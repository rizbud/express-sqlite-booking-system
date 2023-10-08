import express from "express";
import { createEvent, getEvent, getEvents } from "./events.controller";

const routes = express.Router();

routes.get("/", getEvents);
routes.get("/:id", getEvent);
routes.post("/", createEvent);

export default routes;
