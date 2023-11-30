# Use the official Python image as base image
FROM python:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Install pip
RUN apt-get update && \
    apt-get install -y python3-pip

# Copy only the necessary files for installing dependencies
COPY requirements.txt .

# Install dependencies
RUN pip3 install -r requirements.txt

# Copy the entire application to the container
COPY . .

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the application
CMD ["python", "app.py"]
