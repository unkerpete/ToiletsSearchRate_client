# Bidets of Singapore
A toilet search and rating app. 
Users can geolocate themselves and toilets around them. 
Users can browse through toilet cards and each of these cards will have information such as: 
- location, address, sex, bidet type,
- amount of likes(hearts), dislikes(poop)
- reviews of that toilet from other registered users

The repo for the backend is at https://github.com/unkerpete/toilets_backend.
 
## Installation
At the frontend:
- npm create vite@latest
- npm install -D tailwindcss
- npx tailwindcss init
- npm install react-router-dom
- npm install --save react-toastify
- npm install moment
- npm install react-leaflet leaflet
- npm install react-leaflet-cluster

At the backend:
- npm init -y
- npm i express dotenv cors pg
- npm i -D nodemon
- npm i jsonwebtoken bcrypt

## Usage
This repository should run concurrently with the backend server to retrieve and manipulate data from an sql database. You may clone the backend development repository from https://github.com/unkerpete/toilets_backend.
 
## SQL Schema
<img width="429" alt="image" src="https://user-images.githubusercontent.com/118168304/224402426-8b509cd8-0fe5-4b75-b89d-609829c04d7d.png">
