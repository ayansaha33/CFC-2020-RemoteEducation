const express = require("express");

// Create Express app
const app = express();

// A sample route
app.get("/", (req, res) => res.send("Hello World!"));

// Start the Express server
var PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
