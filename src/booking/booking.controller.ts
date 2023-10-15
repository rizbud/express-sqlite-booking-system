import { Request, Response } from "express";
import { getBookingsByEventId, newBooking } from "./booking.service";
import { createBookingValidator } from "./booking.validator";

export const getBookings = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Event ID is required" });
  }

  let bookings;
  try {
    bookings = await getBookingsByEventId(parseInt(id));
    if (!bookings) {
      return res.status(404).json({ message: "Event not found!" });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }

  return res.status(200).json({
    message: `Bookings with event id ${id} retrieved successfully!`,
    data: bookings,
  });
};

export const createBooking = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return res.status(400).json({ message: "Event ID is required" });
  }

  const error = createBookingValidator(body);
  if (error) {
    return res.status(400).json({ message: error });
  }

  let booking;
  try {
    booking = await newBooking(parseInt(id), body);
    if (!booking) {
      return res.status(404).json({ message: "Event not found!" });
    }

    if (booking.message) {
      return res.status(422).json({ message: booking.message });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }

  return res.status(201).json({
    message: "Booking created successfully!",
    data: booking,
  });
};
