// HTML routes. (Modeled after the HotRestaurant Day-3 Activity-16)

const path = require("path");
const router = require("express").Router();


router.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = router; 