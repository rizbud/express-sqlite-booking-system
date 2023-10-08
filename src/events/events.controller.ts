import { getAllEvents, getEventById, newEvent } from "./events.service";
import { createEventValidator } from "./events.validator";

import type { Request, Response } from "express";

export const getEvents = async (req: Request, res: Response) => {
  const events = await getAllEvents();

  return res.status(200).json({
    message: "Events retrieved successfully!",
    data: events,
  });
};

export const getEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Event ID is required!" });
  }

  const event = await getEventById(parseInt(id));

  return res.status(200).json({
    message: `Event with id ${id} retrieved successfully!`,
    data: event,
  });
};

export const createEvent = async (req: Request, res: Response) => {
  const error = createEventValidator(req.body);

  if (error) {
    return res.status(400).json({ message: error });
  }

  const event = await newEvent(req.body);

  return res.status(201).json({
    message: "Event created successfully!",
    data: event,
  });
};
