from fastapi import FastAPI, HTTPException, status, Depends
from typing import List, Optional
from sqlmodel import Field, Session, SQLModel, create_engine, select
from uuid import UUID, uuid4
from .database import engine
from sqlalchemy import or_

# Define the Data Model
class UserProfile(SQLModel, table=True):
    id: UUID = Field(default_factory=uuid4, primary_key=True, index=True)
    display_name: str
    title: str
    superpower: str
    kryptonite: str  # Using 'kryptonite' instead of 'ask'
    profile_image: Optional[str] = None
    linkedin: Optional[str] = None

app = FastAPI(title="The Hub Backend - User Profiles")

# Dependency to get database session
def get_db():
    with Session(engine) as session:
        yield session

@app.get("/", tags=["Root"])
async def read_root():
    return {"status": "ok", "message": "Welcome to The Hub Backend!"}

# POST /users/
@app.post("/users/", response_model=UserProfile, status_code=status.HTTP_201_CREATED)
async def create_user_profile(profile: UserProfile, db: Session = Depends(get_db)):
    """
    Creates a new user profile.
    """
    db.add(profile)
    db.commit()
    db.refresh(profile)
    return profile

# GET /users/
@app.get("/users/", response_model=List[UserProfile])
async def get_all_user_profiles(db: Session = Depends(get_db)):
    """
    Returns a list of all user profiles.
    """
    users = db.exec(select(UserProfile)).all()
    return users

# GET /users/{user_id}
@app.get("/users/{user_id}", response_model=UserProfile)
async def get_user_profile(user_id: UUID, db: Session = Depends(get_db)):
    """
    Retrieves a single user by their ID. Returns a 404 error if not found.
    """
    user = db.get(UserProfile, user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User profile not found")
    return user

# PUT /users/{user_id}
@app.put("/users/{user_id}", response_model=UserProfile)
async def update_user_profile(user_id: UUID, updated_profile: UserProfile, db: Session = Depends(get_db)):
    """
    Updates an existing user profile. Returns a 404 error if not found.
    """
    user = db.get(UserProfile, user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User profile not found")
    
    # Update fields
    for key, value in updated_profile.model_dump(exclude_unset=True).items():
        setattr(user, key, value)
    
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

# DELETE /users/{user_id}
@app.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_user_profile(user_id: UUID, db: Session = Depends(get_db)):
    """
    Deletes a user profile. Returns a 404 error if not found and a 204 No Content on success.
    """
    user = db.get(UserProfile, user_id)
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User profile not found")
    
    db.delete(user)
    db.commit()
    return

@app.get("/search/", response_model=List[UserProfile])
async def search_users(query: str, db: Session = Depends(get_db)):
    """
    Searches for user profiles across multiple fields.
    """
    search_query = f"%{query.lower()}%"
    
    users = db.exec(
        select(UserProfile).where(
            or_(
                UserProfile.display_name.ilike(search_query),
                UserProfile.title.ilike(search_query),
                UserProfile.superpower.ilike(search_query),
                UserProfile.kryptonite.ilike(search_query)
            )
        )
    ).all()
    
    return users
