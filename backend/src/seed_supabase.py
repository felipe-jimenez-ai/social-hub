
import os
import pandas as pd
from supabase import create_client
from dotenv import load_dotenv

# Configuration
load_dotenv()
print(f"🔍 Loading environment from: {os.getcwd()}/.env")

# Try multiple sources for credentials
supabase_url = os.environ.get("SUPABASE_URL") or os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
supabase_service_key = os.environ.get("SUPABASE_SERVICE_KEY") or os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

# If backend .env doesn't work, try to load from frontend/.env.local
if not supabase_service_key:
    frontend_env_path = os.path.join(os.getcwd(), '..', 'frontend', '.env.local')
    if os.path.exists(frontend_env_path):
        print(f"🔍 Also checking frontend/.env.local...")
        load_dotenv(frontend_env_path)
        supabase_url = supabase_url or os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
        supabase_service_key = supabase_service_key or os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

print(f"🔍 SUPABASE_URL: {'✅ Found' if supabase_url else '❌ Not found'}")
print(f"🔍 SUPABASE_SERVICE_KEY: {'✅ Found' if supabase_service_key else '❌ Not found'}")

# Debug: Print first and last few characters of the key
if supabase_service_key:
    print(f"🔍 Service Key starts with: {supabase_service_key[:20]}...")
    print(f"🔍 Service Key ends with: ...{supabase_service_key[-20:]}")

if not supabase_url or not supabase_service_key:
    print("❌ Missing Supabase configuration!")
    print("📝 Please set the following environment variables:")
    print("   SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL")
    print("   SUPABASE_SERVICE_KEY or SUPABASE_SERVICE_ROLE_KEY")
    print("🔧 You can create a .env file in the backend/ directory or use the frontend/.env.local")
    exit(1)

print(f"🔗 Using Supabase URL: {supabase_url}")

# Test the connection before proceeding
print(f"🔍 Testing Supabase connection...")
supabase_client = create_client(supabase_url, supabase_service_key)

# Fetch all existing Supabase Auth users to map emails to IDs
email_to_id_map = {}
print(f"🔍 Fetching existing user emails and IDs from Supabase Auth...")
try:
    # Use the admin client to list all users with a high limit to try and get all at once
    # Supabase's list_users() can take 'page' and 'per_page' parameters for pagination.
    # Setting a high per_page to retrieve all users if possible in one call.
    users_response = supabase_client.auth.admin.list_users(page=1, per_page=1000) # Increased per_page

    # Debug: Print the raw response from list_users()
    print(f"DEBUG: Raw users_response: {users_response}")

    users_list = []
    # Handle different response structures from Supabase's list_users()
    if hasattr(users_response, 'data') and hasattr(users_response.data, 'users'):
        users_list = users_response.data.users
    elif isinstance(users_response, dict) and 'users' in users_response:
        users_list = users_response['users']
    elif isinstance(users_response, list):
        users_list = users_response
    else:
        print(f"❌ Unexpected response format from Supabase Auth list_users: {type(users_response)}")
        print(f"🔍 Full response: {users_response}")
        exit(1)

    if users_list:
        print(f"DEBUG: Number of users in parsed list: {len(users_list)}")
        for user in users_list:
            email = None
            user_id = None
            
            if hasattr(user, 'email') and hasattr(user, 'id'):
                email = user.email
                user_id = user.id
            elif isinstance(user, dict) and 'email' in user and 'id' in user:
                email = user['email']
                user_id = user['id']

            if email and user_id:
                email_to_id_map[email.strip()] = user_id
                # Debug: print each email successfully mapped
                # print(f"DEBUG: Mapped email '{email.strip()}' to ID '{user_id}'")
        print(f"✅ Successfully fetched {len(email_to_id_map)} user IDs from Supabase Auth.")
    else:
        print(f"⚠️ No users found in Supabase Auth. Ensure 'create_auth_users.py' has been run.")
        exit(1) # Exit if no users are found, as we can't link profiles without them

except Exception as user_fetch_error:
    print(f"❌ Error fetching users from Supabase Auth: {user_fetch_error}")
    print(f"🔍 This might happen if the service key doesn't have list_users permissions or the Supabase client version is different.")
    exit(1)

# File path (adjust as necessary for your environment)
excel_file_path = "backend/data/data-achievers-20250812.xlsx"

def run_etl():
    try:
        # Check if file exists
        if not os.path.exists(excel_file_path):
            print(f"❌ Error: Excel file not found at '{excel_file_path}'")
            print("📁 Please ensure your Excel file is located at the correct path.")
            print("🔧 Current working directory:", os.getcwd())
            print("📂 Expected file path:", os.path.abspath(excel_file_path))
            return

        print(f"📊 Reading Excel file from: {excel_file_path}")
        # Extract
        df = pd.read_excel(excel_file_path)
        print(f"✅ Successfully read {len(df)} rows from Excel file")

        print(f"🔄 Starting data transformation...")

        # Transformation: Column renaming (ONLY map to columns that exist in Supabase profiles table!)
        # IMPORTANT: Keep the email column temporarily to map to user IDs
        excel_email_column = "Dirección de correo electrónico"

        column_mapping = {
            # Personal Information (maps to profiles table columns)
            "Nombre": "display_name",
            "¿Qué estudias o cuál es tu rol?": "title",

            # Superpower and Ask (maps to profiles table columns)
            "¿Qué te hace único?, ¿Tienes alguna pasión o habilidad que estás dispuesto a compartir? ¿En qué eres excepcional y con qué puedes ayudar a otros? p. ej., \"Soy un experto en modelos financieros en Excel\" o \"Puedo crear una página de destino (landing page) efectiva.\"": "superpower",
            "¿Cuál es un reto específico con el que necesitas ayuda ahora mismo? Aquello con lo que necesitas ayuda urgente. p. ej., \"Necesito feedback sobre una presentación para inversores\" o \"Busco a alguien para practicar mi inglés.\"": "ask",

            # Social Links (maps to profiles table columns)
            "Link de LinkdIn": "linkedin",

            # Keep the original email column to map to user IDs
            excel_email_column: "email_for_id_mapping",
        }

        print(f"📋 Will map these Excel columns to Supabase profiles table:")
        for excel_col, supabase_col in column_mapping.items():
            print(f"   '{excel_col[:50]}...' → {supabase_col}")

        df = df.rename(columns=column_mapping)

        # Map Excel emails to Supabase User IDs
        profiles_to_insert = []
        for index, row in df.iterrows():
            email_for_id = str(row.get("email_for_id_mapping", "")).strip()
            if email_for_id in email_to_id_map:
                user_id = email_to_id_map[email_for_id]
                profile_data = row.to_dict()
                profile_data['id'] = user_id # Add the Supabase User ID to the profile
                profiles_to_insert.append(profile_data)
            else:
                print(f"⚠️ Skipping profile for email '{email_for_id}' (row {index + 2}): No matching user ID found in Supabase Auth.")

        df = pd.DataFrame(profiles_to_insert) # Create new DataFrame with only mapped profiles and IDs
        if df.empty:
            print("❌ No profiles to insert after mapping to Supabase users. Exiting.")
            return

        print(f"📊 After mapping, {len(df)} profiles are ready for detailed transformation.")

        # Only keep the columns that exist in the profiles table schema
        expected_columns = {'id', 'display_name', 'title', 'superpower', 'ask', 'linkedin', 'profile_image', 'wants_meet', 'created_at', 'updated_at'}
        existing_columns = [col for col in df.columns if col in expected_columns]
        df = df[existing_columns]
        print(f"📊 After filtering, keeping {len(existing_columns)} columns: {existing_columns}")

        # Transformation: Clean data
        # First, convert all columns to strings to ensure JSON serializability
        for col in df.columns:
            # Convert to string and handle any conversion errors
            try:
                df[col] = df[col].astype(str).str.strip()
                print(f"📝 Converted column '{col}' to string")
            except AttributeError:
                # Handle non-string columns (like datetime)
                df[col] = df[col].astype(str)
                print(f"📅 Converted non-string column '{col}' to string")

        df = df.where(pd.notna(df), None) # Replace NaN with None

        print(f"🧹 Data cleaned (whitespace trimmed, NaN values replaced, timestamps converted)")

        # Convert DataFrame to list of dictionaries
        data_to_insert = df.to_dict(orient='records')
        print(f"🔄 Prepared {len(data_to_insert)} records for insertion")

        # Debug: Check data types in first record
        if data_to_insert:
            print(f"🔍 Sample record keys: {list(data_to_insert[0].keys())}")
            print(f"🔍 Sample record types: {[(k, type(v).__name__) for k, v in list(data_to_insert[0].items())[:3]]}")

        # Load
        print(f"📤 Upserting data into Supabase 'profiles' table...")
        try:
            # Use upsert to update existing profiles or insert new ones, based on 'id'
            response = supabase_client.table('profiles').upsert(data_to_insert, on_conflict='id').execute()

            if response.data:
                print(f"✅ Successfully upserted {len(response.data)} profiles into Supabase!")
            else:
                print("⚠️ No data returned from Supabase upsert, but operation might have succeeded.")
                print(f"🔍 Response: {response}")

        except Exception as upsert_error:
            print(f"❌ Supabase upsert failed: {upsert_error}")
            print(f"🔍 Error type: {type(upsert_error).__name__}")
            # Try to upsert in smaller batches if the error is related to payload size
            if "payload too large" in str(upsert_error).lower() or "too many" in str(upsert_error).lower():
                print("📦 Attempting to upsert in smaller batches...")
                batch_size = 10
                successful_upserts = 0

                for i in range(0, len(data_to_insert), batch_size):
                    batch = data_to_insert[i:i + batch_size]
                    try:
                        batch_response = supabase_client.table('profiles').upsert(batch, on_conflict='id').execute()
                        if batch_response.data:
                            successful_upserts += len(batch_response.data)
                            print(f"✅ Upserted batch {i//batch_size + 1}: {len(batch_response.data)} records")
                    except Exception as batch_error:
                        print(f"❌ Failed to upsert batch {i//batch_size + 1}: {batch_error}")

                print(f"📊 Total successful upserts: {successful_upserts}/{len(data_to_insert)}")

    except Exception as e:
        print(f"❌ An error occurred during ETL: {e}")
        print(f"🔍 Error type: {type(e).__name__}")

if __name__ == "__main__":
    run_etl()
