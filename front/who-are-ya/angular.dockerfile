## Front-end (Angular) Dockerfile

# Uses official Node.js base image (minimum version required for Angular CLI)
FROM node:18.19.0 AS build

# Sets working directory
WORKDIR /code

# Copies all packages files to /code
COPY package*.json ./

# Installs dependencies
RUN npm install 

# Installs Angular CLI globally
RUN npm install -g @angular/cli

# Copies app code to /code
COPY . ./

# Builds Angular app
RUN ng build --configuration=production

# Uses official NGINX image
FROM nginx:latest

# Copies Angular final files to be used by NGINX
COPY --from=build code/dist/who-are-ya /usr/share/nginx/html

EXPOSE 80