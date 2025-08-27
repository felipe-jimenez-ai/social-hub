import os
from sqlmodel import create_engine
from dotenv import load_dotenv

load_dotenv()

POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_DB = os.getenv("POSTGRES_DB")

# Determine host based on environment
DB_HOST = "db" if os.getenv("DOCKERIZED") == "true" else "localhost"

DATABASE_URL = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{DB_HOST}:5432/{POSTGRES_DB}"

engine = create_engine(DATABASE_URL, echo=True)
