import { isBefore } from "date-fns";

import type { EventInput } from "./events.type";

// YYYY-MM-DD pattern
const eventDatePattern = /^\d{4}-\d{2}-\d{2}$/;
// YYYY-MM-DD HH:mm:ss pattern
const dateTimePattern = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

export const createEventValidator = (event?: EventInput) => {
  if (!event) return "All fields are required!";

  let message: string[] = [];

  if (!event.name) message.push("name is required!");
  if (!event.capacity) message.push("capacity is required!");
  if (!event.event_date) message.push("event_date is required!");
  if (!event.booking_started_at)
    message.push("booking_started_at at is required!");
  if (!event.booking_ended_at) message.push("booking_ended_at is required!");
  if (event.capacity < 1) message.push("capacity must be greater than 0!");

  // check format of date
  if (!eventDatePattern.test(event.event_date)) {
    message.push("event_date must be in YYYY-MM-DD format!");
  }

  if (!dateTimePattern.test(event.booking_started_at)) {
    message.push("booking_started_at must be in YYYY-MM-DD HH:mm:ss format!");
  }

  if (!dateTimePattern.test(event.booking_ended_at)) {
    message.push("booking_ended_at must be in YYYY-MM-DD HH:mm:ss format!");
  }

  const eventDate = new Date(event.event_date);
  const bookingStartedAt = new Date(event.booking_started_at);
  const bookingEndedAt = new Date(event.booking_ended_at);
  const today = new Date();

  if (isBefore(eventDate, today)) {
    message.push("event_date must be greater than today!");
  }

  if (isBefore(bookingStartedAt, today)) {
    message.push("booking_started_at at must be greater than today!");
  }

  if (isBefore(bookingEndedAt, today)) {
    message.push("booking_ended_at must be greater than today!");
  }

  if (isBefore(bookingEndedAt, bookingStartedAt)) {
    message.push("booking_ended_at must be greater than booking_started_at!");
  }

  if (isBefore(eventDate, bookingStartedAt)) {
    message.push("event_date must be greater than booking_started_at!");
  }

  if (isBefore(eventDate, bookingEndedAt)) {
    message.push("event_date must be greater than booking_ended_at!");
  }

  return message.length ? (message.length === 1 ? message[0] : message) : null;
};
