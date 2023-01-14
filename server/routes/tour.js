import express from "express";
import { createTour, getTour } from "../controllers/tour.js";

const router = express.Router();
router.post("/", createTour);
router.get("/", getTour);

export default router;
