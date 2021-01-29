// HTML routes. (Modeled after the HotRestaurant Day-3 Activity-16)

const path = require("path");
const router = require("express").Router();


// This is the page that will load once the user is ready to start entering a note
router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// This is the default page that will load. The route is driving it towards the index.html page
router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = router; 