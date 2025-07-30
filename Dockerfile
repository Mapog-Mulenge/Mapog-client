# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build & export Next.js
RUN npm run build
RUN npm run export

# Stage 2: Production - Serve with NGINX
FROM nginx:1.25-alpine

# Copy exported static files
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom nginx config (with offline support & caching)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
