import express from "express";

import eventsRoutes from "./events/events.route";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

routes.use("/events", eventsRoutes);

export default routes;
