
# Use the official Python 3.12 slim image as the base image
FROM python:3.12-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file into the container at /app
COPY requirements.txt .

# Install the Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire application source code into the container
COPY src/ src/

# Expose port 8000, which FastAPI will run on
EXPOSE 8000

# Command to run the application using uvicorn, listening on all available interfaces
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]
