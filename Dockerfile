# Stage 1: Build
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine

# Copy build files from previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration file
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
