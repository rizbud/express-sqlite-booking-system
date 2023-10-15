import db from "../config/database";

import {
  queryGetBookingsByEventId,
  queryInsertBooking,
} from "./booking.repository";

import { queryGetEventById } from "../events/events.repository";

import type { Booking, BookingInput } from "./booking.type";

export const getBookingsByEventId = async (eventId: number) => {
  const event = queryGetEventById(eventId);
  if (!event) return undefined;

  return queryGetBookingsByEventId(eventId);
};

export const newBooking = async (eventId: number, booking: BookingInput) => {
  let bookingResult: Booking;

  try {
    db.exec("BEGIN EXCLUSIVE");

    const event = queryGetEventById(eventId);
    if (!event) {
      db.exec("ROLLBACK");
      return undefined;
    }
    if (event.available_seats < booking.number_of_seats) {
      db.exec("ROLLBACK");
      return { message: "Not enough seats!" };
    }

    bookingResult = queryInsertBooking({ ...booking, event_id: eventId });
    if (!bookingResult) {
      db.exec("ROLLBACK");
      return { message: "Failed to create booking!" };
    }

    db.exec("COMMIT");
  } catch (error) {
    console.log(error);
    db.exec("ROLLBACK");
    throw error;
  }

  return {
    booking: bookingResult,
  };
};
