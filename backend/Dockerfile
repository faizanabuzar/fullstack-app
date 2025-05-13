# Use Node.js official image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port for the app
EXPOSE 3000

# Start the Node.js app
CMD ["node", "app.js"]

