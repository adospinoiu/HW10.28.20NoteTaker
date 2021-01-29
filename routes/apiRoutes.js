const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

// const app = express();

module.exports = (app) => {
    app.post("/api/notes", function (req, res) {
        let enteredNote = req.body;
        enteredNote.id = uuidv4();

        fs.readFile("./db/db.json", "utf8", function (err, data) {
            let currentNote = (JSON.parse(data));
            currentNote.push(enteredNote);
            console.log(currentNote);
            fs.writeFile("./db/db.json", JSON.stringify(currentNote), "utf8", function (err) {
                console.log("Saved");
            })
        })

        res.json(enteredNote);
    })

    app.get("/api/notes", function (req, res) {
        fs.readFile("./db/db.json", "utf8", function (err, data) {
            res.json(JSON.parse(data));
        });
    })
}