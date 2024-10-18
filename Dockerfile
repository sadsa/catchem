# Use the official Node.js image to build the Angular app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using npm ci for a clean install
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use Nginx to serve the app
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist/pokedex-frontend/browser /usr/share/nginx/html

# Copy a custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 4200
EXPOSE 4200

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]