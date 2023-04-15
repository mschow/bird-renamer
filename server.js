import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import axios from "axios";

const app = express();
const port = 3000;

/** API URLs */
const NUTHATCH_URL = "https://nuthatch.lastelm.software";
const NUTHATCH_HEADERS = {
  "api-key": process.env.NUTHATCH_KEY,
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/birds", (req, res, next) => {
  axios
    .get(`${NUTHATCH_URL}/birds`, { headers: NUTHATCH_HEADERS })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
      next(err);
    });
});

app.get("/birds/:id", (req, res, next) => {
  axios
    .get(`${NUTHATCH_URL}/birds/${req.params.id}`, {
      headers: NUTHATCH_HEADERS,
    })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
      next(err);
    });
});

app.use((error, req, res, next) => {
  console.log("Server Error occurred.");
  console.log("Path: ", req.path);
  console.error("Error: ", error);

  if (error.type == "time-out") {
    res.status(408).send(error);
  } else {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Bird Renamer servier listening on port ${port}`);
});
