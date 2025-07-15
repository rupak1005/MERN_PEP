const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.cookie("name", "rupak");
    res.send("Cookie set successfully");
});

app.listen(3000);