import { getAllEvents, getEventById, newEvent } from "./events.service";
import { createEventValidator } from "./events.validator";

import type { Request, Response } from "express";

export const getEvents = async (req: Request, res: Response) => {
  let events;
  try {
    events = await getAllEvents();
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }

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

  let event;
  try {
    event = await getEventById(parseInt(id));
    if (!event) {
      return res.status(404).json({ message: "Event not found!" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }

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

  let event;
  try {
    event = await newEvent(req.body);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }

  return res.status(201).json({
    message: "Event created successfully!",
    data: event,
  });
};
