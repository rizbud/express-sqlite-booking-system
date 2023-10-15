import express from "express";

import { createBooking, getBookings } from "./booking.controller";

const routes = express.Router();

routes.get("/:id/booking", getBookings);
routes.post("/:id/booking", createBooking);

export default routes;
