import express from "express";
import { createWeather } from "../controllers/weatherController.js";

const router = express.Router();

router.post('/', createWeather);

export default router;