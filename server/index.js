//Tells this .js to use express and cors and saves cors and express to their own variables respectively.
const express = require("express");
const cors = require("cors");

//Creating variable to store express. Not sure what that entails, but everytime we say "app." we're really saying "express()"
const app = express();

//Tells the app to use cors and express.json
app.use(cors());
app.use(express.json());

//Gets function from controller .js
const { getCompliment, getFortune, getExcuse, submitPerson, deletePerson } = require('./controller')


//Honestly not sure what's happening here. I'm sure it's important though. I'll figure it out... maybe. Or maybe I'll just make 4 get requests and then take a nap. Only time will tell.
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/excuse", getExcuse);
app.delete("/api/delete-person", deletePerson);
app.post("/api/submit-person", submitPerson);

//Tells the app the listen on port 4000. Basically an infinite while loop waiting for stuff to happen so it can react.
app.listen(4000, () => console.log("Server running on 4000"));
