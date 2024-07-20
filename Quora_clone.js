const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); // use app.use instead of app.set

app.get("/", (req, res) => { // corrected parameters
    res.send("server working well");
});

app.listen(port, () => {
    console.log(`Listening to port: ${port}`); // updated log message
});
