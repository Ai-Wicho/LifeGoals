# Nuestro build
FROM node:20-alpine as build-step
WORKDIR /app
COPY package.json ./

# Instalamos  dependencias
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Servidor
FROM nginx:alpine
COPY --from=build-step /app/dist/lifegoals/browser /usr/share/nginx/html
# Angular Router
RUN echo 'server { listen 80; root /usr/share/nginx/html; index index.html; location / { try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 80