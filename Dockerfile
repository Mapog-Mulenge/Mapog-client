# Use official Node.js LTS version
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy app files
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
