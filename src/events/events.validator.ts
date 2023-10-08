import { isBefore } from "date-fns";

import type { EventInput } from "./events.type";

// YYYY-MM-DD pattern
const eventDatePattern = /^\d{4}-\d{2}-\d{2}$/;
// ISO 8601 pattern
const isoPattern = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;

export const createEventValidator = (event?: EventInput) => {
  if (!event) return "All fields are required!";

  if (!event.name) return "Name is required!";
  if (!event.capacity) return "Capacity is required!";
  if (!event.event_date) return "Event date is required!";
  if (!event.booking_started_at) return "Booking started at is required!";
  if (!event.booking_ended_at) return "Booking ended at is required!";
  if (event.capacity < 1) return "Capacity must be greater than 0!";

  // check format of date
  if (!eventDatePattern.test(event.event_date)) {
    return "Event date must be in YYYY-MM-DD format!";
  }

  if (!isoPattern.test(event.booking_started_at)) {
    return "Booking started at must be in ISO 8601 format!";
  }

  if (!isoPattern.test(event.booking_ended_at)) {
    return "Booking ended at must be in ISO 8601 format!";
  }

  const eventDate = new Date(event.event_date);
  const bookingStartedAt = new Date(event.booking_started_at);
  const bookingEndedAt = new Date(event.booking_ended_at);
  const today = new Date();

  if (isBefore(eventDate, today)) {
    return "Event date must be greater than today!";
  }

  if (isBefore(bookingStartedAt, today)) {
    return "Booking started at must be greater than today!";
  }

  if (isBefore(bookingEndedAt, today)) {
    return "Booking ended at must be greater than today!";
  }

  if (isBefore(bookingEndedAt, bookingStartedAt)) {
    return "Booking ended at must be greater than booking started at!";
  }

  if (isBefore(eventDate, bookingStartedAt)) {
    return "Event date must be greater than booking started at!";
  }

  if (isBefore(eventDate, bookingEndedAt)) {
    return "Event date must be greater than booking ended at!";
  }

  return null;
};
