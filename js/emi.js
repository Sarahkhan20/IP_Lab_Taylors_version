const express = require("express");
const EventEmitter = require("events"); // require EventEmitter from 'events' module
const app = express();

const eventEmitter = new EventEmitter();

eventEmitter.on("count api", function () {
    console.log("Event called");
});

app.get("/", (req, res) => {
    console.log("API called");
    eventEmitter.emit("count api"); // Emit the event when the API is called
    res.send("Hello, World!");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

