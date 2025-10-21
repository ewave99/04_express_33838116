// Load the Express module
const express = require("express");
// Create an Express App object
const app = express();
// This is the port we host the web server on.
const port = 8000;

// Load route handlers. This adds the "main" module to the 'middleware stack'.
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);
// Use the following 'static middleware' to serve images and other static content from a public folder.
app.use(express.static('public'));

// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`));