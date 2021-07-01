import express from "express";
import { BandController } from "../controller/BandController";

export const bandRouter = express.Router();

const bandController = new BandController();

bandRouter.post("/registry", bandController.registry);
bandRouter.get("/:week_day", bandController.getProfile);
