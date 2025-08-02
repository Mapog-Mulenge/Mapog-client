# Stage 1: Build
FROM node:22-alpine AS builder latest
WORKDIR /app

# Copy package files first for dependency caching
COPY package*.json ./, package-lock.json

# Install dependencies using lock file
RUN npm install

# Copy all project files
COPY . .

# Build & export Next.js
RUN npm run build
RUN npm run export

# Stage 2: Production - Serve with NGINX
FROM nginx:1.25-alpine

# Copy exported static files to nginx web root
COPY --from=builder /app/out /usr/share/nginx/html

# Copy hardened nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
