import express from "express";

import { createBooking, getBookings } from "./booking.controller";

const routes = express.Router();

routes.get("/", getBookings);
routes.post("/", createBooking);

export default routes;
