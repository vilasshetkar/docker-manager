# Use official Node.js image as base
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy application files
COPY . .

# Expose port 3110
EXPOSE 3110

# Set environment variables (optional)
ENV NODE_ENV=production

# Start the Express.js app
CMD ["node", "server.js"]
