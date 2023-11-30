# Use the official Node.js image as base image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Install Bootstrap
RUN npm install bootstrap

# Copy only the necessary files for installing dependencies
COPY ./frontend/angular-app/pataponto/package.json .

# Install dependencies (including using --force)
RUN npm install --force

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the entire application to the container
COPY ./frontend/angular-app/pataponto .

# Expose port 4200 to the outside world
EXPOSE 4200

# Set the entry point to ng serve
ENTRYPOINT ["ng", "serve"]

# Command to run the application
CMD ["--host", "0.0.0.0"]
