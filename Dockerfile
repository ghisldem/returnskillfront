# You are free to change the contents of this file
FROM nginx
# Configure for angular fallback routes
COPY . /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
