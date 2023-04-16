import axios from "axios";
import { Bird } from "../models/bird";

const SERVER_URL = "localhost";
const PORT = 3000;

export const birdService = {
  getAllBirds: async () => {
    const birds = await axios
      .get(`api/birds`)
      .then((res) => {
        return res.data.map((result) => new Bird(result));
      })
      .catch((err) => {
        console.error(err);
      });
    return birds;
  },
};

// The Nuthatch API IDs of birds featured in this application.
const eponymouslyNamedBirds = [];
