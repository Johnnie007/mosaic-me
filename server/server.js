const axios = require("axios");
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

const port = process.env.Port || 7010;

app.use(cors());
app.use(express.json());

app.use("/images", (req, res) => {
    res.json();
});



app.listen(7000, () => console.log(`Listening on ${port}`));
