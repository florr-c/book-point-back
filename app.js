require("dotenv/config");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoDb = require("./database");

// environment variables
const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(8000, () => {
  console.log(`Web server listening in port ${PORT} - URL: ${BASE_URL}`);
});
