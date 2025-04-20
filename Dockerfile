# Stage 1: Build the React app with Vite
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the built files using a lightweight web server
FROM nginx:stable-alpine

# Copy build output to nginx's public directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default nginx config and copy custom one (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]