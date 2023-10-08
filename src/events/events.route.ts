import express from "express";
import { createEvent, getEvent, getEvents } from "./events.controller";
import bookingRoutes from "../booking/booking.route";

const routes = express.Router();

routes.get("/", getEvents);
routes.get("/:id", getEvent);
routes.post("/", createEvent);

routes.use("/:id/booking", bookingRoutes);

export default routes;
