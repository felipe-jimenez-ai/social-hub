from fastapi import FastAPI

app = FastAPI(title="The Hub Backend")

@app.get("/", tags=["Root"])
async def read_root():
    return {"status": "ok", "message": "Welcome to The Hub Backend!"}
