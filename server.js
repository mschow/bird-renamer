import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import { eponymousBirdFilter as birdIsEponymouslyNamed } from "./server/eponymousBirdIdentifiers.js";

const app = express();
const port = 3000;

/** API URLs */
const NUTHATCH_URL = "https://nuthatch.lastelm.software";
const NUTHATCH_HEADERS = {
  "api-key": process.env.NUTHATCH_KEY,
};

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

app.get("/api/birds", (req, res, next) => {
  axios
    .get(`${NUTHATCH_URL}/birds`, { headers: NUTHATCH_HEADERS })
    .then((response) => res.status(200).send(response.data.filter(birdFilter)))
    .catch((err) => {
      next(err);
    });
});

app.get("/api/birds/:id", (req, res, next) => {
  axios
    .get(`${NUTHATCH_URL}/birds/${req.params.id}`, {
      headers: NUTHATCH_HEADERS,
    })
    .then((response) => res.status(200).send(response.data))
    .catch((err) => {
      next(err);
    });
});

app.listen(port, () => {
  console.log(`Bird Renamer servier listening on port ${port}`);
});

const birdFilter = (bird) => birdHasImage(bird) && birdIsEponymouslyNamed(bird);
const birdHasImage = (bird) => bird.images?.length > 0;
