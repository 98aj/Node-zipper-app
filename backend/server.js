const express = require("express"); //for creating powerful api

const notes = require("./data/notes");

const dotenv = require("dotenv"); //to store secreate things like password and links

const cors = require("cors"); //to connect forntend and backend
//without cors it will give error as our forntend and baackend need to run on same server and to avoid this we install cors
//To start fornend and backend at one command we hve user concurrently and configer below in script
// "client": "npm start --prefix frontend",
//     "dev": "concurrently \"npm start\" \"npm run client\""

const connectDb = require("./config/db"); //to connect node to cluster or online mongodb

const app = express(); //initalizig app with express

app.use(cors()); // using cors for run both apps

dotenv.config(); // use .env file things and configure to node

connectDb(); //running function created for db

//API creating
//responce : res is the thing we get from backend and send it to frontend
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// API
//req : request that we get from frontend and sent it to backend
//res : responce res is the thing we get from backend and send it to frontend
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

//Listen to used to run server on desired port eg : localhost:5000 or 3000 or 8000 any as we wanted
app.listen(PORT, console.log(`My server is live ${PORT}`));
