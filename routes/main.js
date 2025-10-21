// Create a new router
const express = require("express");
const path = require("path");
const router = express.Router();

// Obtains the current date in format dd-mm-yyyy
function getDate() {
    // Create a Date object for the current date and time
    const date = new Date();
    // Get day. If number is 1 digit, pad with leading zeroes.
    const dd = date.getDate().toString().padStart(2, "0");
    // Get month. If number is 1 digit, pad with leading zeroes.
    const mm = date.getMonth().toString().padStart(2, "0");
    // Get year in format yyyy
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

// Obtains the current time in format hh:mm
function getTime() {
    // Create a Date object for the current date and time.
    const date = new Date();
    // Get hours. If number is 1 digit, pad with leading zeroes.
    const hh = date.getHours().toString().padStart(2, "0");
    // Get minutes. If number is 1 digit, pad with leading zeroes.    
    const mm = date.getMinutes().toString().padStart(2, "0");
    return `${hh}:${mm}`;
}

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!"));
router.get("/about", (req, res) => res.send("<h1>This is about page</h1>"));
router.get("/contact", (req, res) => res.send(`
    <h1>Contact details</h1>
    <i>emurd001 AT gold.ac.uk</i>`));
router.get("/date", (req, res) => res.send(`
    <h1>Date and time</h1>
    <b>It is currently ${getTime()} on ${getDate()}</b>`));
// Display the name of a user passed into the URL.
router.get("/welcome/*user", (req, res) => res.send(`<h1>Welcome, ${req.params.user}</h1>`));
// Chain two route callback functions together.
router.get("/chain",
    (req, res, next) => {
        console.log("First callback");
        next();
    },
    (req, res) => {
        console.log("Second callback.");
        res.send("Callback chain finished.");
    }
);
// Send an HTML file.
router.get("/file", (req, res) => res.sendFile("a.html", {root: path.join(__dirname, "../views")}));


// Export the router object so index.js can access it
module.exports = router;