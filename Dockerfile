# Use a minimal Node base for building
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Use lightweight NGINX for serving
FROM nginx:1.25-alpine
COPY --from=builder /app/out /usr/share/nginx/html

# Harden nginx config
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
