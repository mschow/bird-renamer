import axios from "axios";
import { Bird } from "../models/bird";
import { eponymousBirdFilter as birdIsEponymouslyNamed } from "./eponymousBirdIdentifiers";

const NUTHATCH_URL = "https://nuthatch.lastelm.software";
const NUTHATCH_HEADERS = {
  "api-key": import.meta.env.VITE_NUTHATCH_KEY,
};

export const birdService = {
  getAllBirds: async () => {
    const birds = await axios
      .get(`${NUTHATCH_URL}/birds`, { headers: NUTHATCH_HEADERS })
      .then((response) => response.data.filter(birdFilter));
    return birds.map((bird) => new Bird(bird));
  },
  getBird: async (id) => {
    const bird = axios.get(`${NUTHATCH_URL}/birds/${req.params.id}`, {
      headers: NUTHATCH_HEADERS,
    });
    return new Bird(bird);
  },
};

const birdFilter = (bird) => birdHasImage(bird) && birdIsEponymouslyNamed(bird);
const birdHasImage = (bird) => bird.images?.length > 0;
