import { Request, Response } from "express";
import { getBookingsByEventId, newBooking } from "./booking.service";
import { createBookingValidator } from "./booking.validator";

export const getBookings = async (req: Request, res: Response) => {
  const { eventId } = req.params;

  if (!eventId) {
    return res.status(400).json({ message: "Event ID is required" });
  }

  const bookings = await getBookingsByEventId(parseInt(eventId));

  return res.status(200).json({
    message: `Bookings with event id ${eventId} retrieved successfully!`,
    data: bookings,
  });
};

export const createBooking = async (req: Request, res: Response) => {
  const { eventId } = req.params;
  const { body } = req;

  if (!eventId) {
    return res.status(400).json({ message: "Event ID is required" });
  }

  const error = createBookingValidator(body);

  if (error) {
    return res.status(400).json({ message: error });
  }

  const booking = await newBooking(parseInt(eventId), body);

  return res.status(201).json({
    message: "Booking created successfully!",
    data: booking,
  });
};
