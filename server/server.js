const axios = require("axios");
express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
app.use(cors());

const port = process.env.Port || 7010;

app.listen(7000, () => console.log(`Listening on ${port}`));
