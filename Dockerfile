# Use a base image with Node.js
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for both frontend and backend
COPY client/package*.json ./client/
COPY api/package*.json ./api/

# Install dependencies for both frontend and backend
RUN cd client && npm install
RUN npm install

# Copy all files
COPY . .

# Build the frontend
WORKDIR /app/client
RUN npm run build

# Expose the backend port
EXPOSE 3000

# Set the working directory back to the main app directory
WORKDIR /app

# Command to run the application
CMD ["npm", "start"]
