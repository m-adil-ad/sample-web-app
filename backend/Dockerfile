# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend port
EXPOSE 4000

# Start the backend service
CMD ["npm", "start"]
