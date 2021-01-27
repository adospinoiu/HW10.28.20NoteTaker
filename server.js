const express = require("express");
const morgan = require("morgan");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize the application to create a port
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(morgan('tiny'));

// Routes
// app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start up the server
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));