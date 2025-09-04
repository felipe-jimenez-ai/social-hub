
import os
import pandas as pd
import uuid # For generating temporary passwords
from supabase import create_client
from dotenv import load_dotenv

# Configuration
load_dotenv()
supabase_url = os.environ.get("SUPABASE_URL") or os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
supabase_service_key = os.environ.get("SUPABASE_SERVICE_KEY") or os.environ.get("SUPABASE_SERVICE_ROLE_KEY")

if not supabase_url or not supabase_service_key:
    print("❌ Missing Supabase configuration!")
    print("📝 Please set the following environment variables:")
    print("   SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL")
    print("   SUPABASE_SERVICE_KEY or SUPABASE_SERVICE_ROLE_KEY")
    print("🔧 You can create a .env file in the backend/ directory or use the frontend/.env.local")
    exit(1)

supabase_client = create_client(supabase_url, supabase_service_key)

# File path (adjust as necessary for your environment)
excel_file_path = "backend/data/data-achievers-20250812.xlsx"

def create_auth_users():
    created_users_count = 0
    skipped_users_count = 0

    try:
        if not os.path.exists(excel_file_path):
            print(f"❌ Error: Excel file not found at '{excel_file_path}'")
            print("📁 Please ensure your Excel file is located at the correct path.")
            exit(1)

        df = pd.read_excel(excel_file_path)
        print(f"✅ Successfully read {len(df)} rows from Excel file.")

        # Assume email column is named "Dirección de correo electrónico"
        email_column = "Dirección de correo electrónico"

        if email_column not in df.columns:
            print(f"❌ Error: Email column '{email_column}' not found in Excel file.")
            print(f"Available columns: {df.columns.tolist()}")
            exit(1)

        for index, row in df.iterrows():
            email = str(row[email_column]).strip()
            if not email:
                print(f"⚠️  Skipping row {index + 2}: Email address is empty.")
                skipped_users_count += 1
                continue

            # Generate a secure, random temporary password
            password = str(uuid.uuid4())

            try:
                # Create user with email confirmation set to False, and user_metadata
                user = supabase_client.auth.admin.create_user(
                    {
                        "email": email,
                        "password": password,
                        "email_confirm": True, # Set to True to prevent immediate email confirmation
                        "user_metadata": {"onboarded": False, "created_by_script": True}
                    }
                )
                print(f"✅ Successfully created user: {email}")
                created_users_count += 1
            except Exception as e:
                if "User already registered" in str(e):
                    print(f"⚠️  User {email} already exists, skipping.")
                    skipped_users_count += 1
                else:
                    print(f"❌ Error creating user {email}: {e}")
                    skipped_users_count += 1

    except Exception as e:
        print(f"❌ An unexpected error occurred: {e}")

    finally:
        print(f"\n--- User Creation Summary ---")
        print(f"Total users attempted: {created_users_count + skipped_users_count}")
        print(f"Successfully created: {created_users_count}")
        print(f"Skipped (already exists or error): {skipped_users_count}")

if __name__ == "__main__":
    create_auth_users()
