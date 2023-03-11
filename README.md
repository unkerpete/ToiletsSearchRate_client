# Bidets of Singapore
A toilet search and rating app. 
Users can geolocate themselves and toilets around them. 
Users can browse through toilet cards and each of these cards will have information such as: 
- location, address, sex, bidet type,
- amount of likes(hearts), dislikes(poop)
- reviews of that toilet from other registered users

The repo for the backend is at https://github.com/unkerpete/toilets_backend.

## Quick Demo

Browse through Toilet Cards
</br>
<img width="470" alt="image" src="https://user-images.githubusercontent.com/118168304/224464130-b69daab1-1758-42fe-8a8a-f013dd3cf988.png">
</br>
</br>
Reviewing, liking/disliking a toilet. See others' reviews
</br>
<img width="904" alt="image" src="https://user-images.githubusercontent.com/118168304/224464224-6e5b9a56-7c1c-4120-baad-a5a0698780d1.png">
</br>
</br>
Toilet map showing user geolocation and toilet markers
</br>
<img width="480" alt="image" src="https://user-images.githubusercontent.com/118168304/224464159-4d6a150c-a1df-401f-be5d-126fc5532bb8.png">
 
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

## Technologies
This project uses the following technologies:

- HTML, CSS, Javascript
- TailwindCSS: a utility-first CSS framework
- **P**ostgres: an SQL database used to store and retrieve data
- **E**xpress: a backend web framework for Node.js
- **R**eact: a frontend JavaScript library for building user interfaces
- **N**ode.js: a JavaScript runtime environment for server-side development

## General Approach
How I broke down this project into smaller steps:
1. Write out what functionalities a user will need.
2. Draw a wireframe that caters to the above functionalities.
3. Draw out an app hierarchy, and from here identify if any clearly reusable components.
4. Create the backend server. Everytime one controller is done, test it on postman. Repeat.
5. Begin on frontend with a focus on functionality and ability to manipulate the database.
6. Styling at the end.

## Hierarchy Frontend
<img width="498" alt="image" src="https://user-images.githubusercontent.com/118168304/224412155-7ee1fb22-c80f-478d-b621-265af80fb452.png">
 
## SQL Schema
<img width="429" alt="image" src="https://user-images.githubusercontent.com/118168304/224402426-8b509cd8-0fe5-4b75-b89d-609829c04d7d.png">

## Endpoints
The following endpoints are available:

 - `/toilets/getall` - retrieves all the toilets in the database
 - `/toilets/createtoilet` - protected endpoint that lets admin create a  toilet row
 - `/toilets/deletetoilet` - protected endpoint that lets admin delete a toilet row
 - `/toilets/getsingletoilet` - protected endpoint that lets admin retrieve a toilet by id
 - `/toilets/updatetoilet` - protected endpoint that lets admin update a toilet
 - `/user/create` - for guests to register
 - `/user/find` - protected endpoint that lets admin find a specific user
 - `/user/delete` - protected endpoint that lets admin delete a user
 - `/comments/createcomment` - protected endpoint for registered users to submit a review for a toilet
 - `/comments/getcomments/:toilets_id` -  endpoint that retrieves all comments by a toilet ID
 - `/comments/getusercomments/:username` -  endpoint that retrieves all comments by a toilet ID
 - `/likes/submitlikes/` -  protected endpoint for registered users to submit a like
 - `/likes/getlikes/:toilets_id` -  endpoint to retrieve number of likes of a toilet
 - `/likes/getdislikes/:toilets_id` -  endpoint to retrieve number of dislikes of a toilet

## Further work
- Switch to google Oauth
- Responsive styling for mobile phones






