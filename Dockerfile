FROM node:17

WORKDIR /usr/src/app

ENV PORT 8080
ENV HOST 0.0.0.0

COPY package*.json ./

RUN npm install --only=production

# Copy local nuxt codeto the container
COPY . .

# Build production app
RUN npm run build

# Start the service
RUN npm start