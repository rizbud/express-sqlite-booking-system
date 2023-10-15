import {
  queryGetEventAvailableSeatsById,
  queryGetEventById,
  queryUpdateEventAvailableSeatsById,
} from "../events/events.repository";

import {
  queryGetBookingsByEventId,
  queryInsertBooking,
} from "./booking.repository";
import db from "../config/database";

import type { Booking, BookingInput } from "./booking.type";
import type { Event } from "../events/events.type";

export const getBookingsByEventId = async (eventId: number) => {
  const event = queryGetEventById(eventId);
  if (!event) return undefined;

  return queryGetBookingsByEventId(eventId);
};

export const newBooking = async (eventId: number, booking: BookingInput) => {
  db.exec("BEGIN EXCLUSIVE");

  const event = queryGetEventAvailableSeatsById(eventId);
  if (!event) {
    db.exec("ROLLBACK");
    return undefined;
  }
  if (event.available_seats < booking.number_of_seats) {
    db.exec("ROLLBACK");
    return { message: "Not enough seats!" };
  }

  let bookingResult: Booking;
  let eventResult: Event;

  try {
    bookingResult = queryInsertBooking({ ...booking, event_id: eventId });
    eventResult = queryUpdateEventAvailableSeatsById(
      eventId,
      event.available_seats - booking.number_of_seats
    );

    db.exec("COMMIT");
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }

  return {
    booking: bookingResult,
    event: eventResult,
  };
};
