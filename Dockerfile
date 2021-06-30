
# For Frontend (ReactJS)
FROM node:14
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN ls
RUN npm run build


