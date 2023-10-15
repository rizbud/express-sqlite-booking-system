import { format } from "date-fns";
import db from "../config/database";

import type { Event, EventInput } from "./events.type";

export const queryGetAllEvents = () => {
  return db.prepare("SELECT * FROM events").all() as Event[];
};

export const queryGetEventById = (id: number) => {
  return db.prepare("SELECT * FROM events WHERE id = ?").get(id) as
    | Event
    | undefined;
};

export const queryGetEventAvailableSeatsById = (id: number) => {
  return db
    .prepare("SELECT available_seats FROM events WHERE id = ?")
    .get(id) as Pick<Event, "available_seats"> | undefined;
};

export const queryInsertEvent = (data: EventInput) => {
  const query =
    "INSERT INTO events (name, event_date, capacity, available_seats, booking_started_at, booking_ended_at) VALUES (?, ?, ?, ?, ?, ?)";

  const insert = db
    .prepare(query)
    .run(
      data.name,
      data.event_date,
      data.capacity,
      data.capacity,
      data.booking_started_at,
      data.booking_ended_at
    );
  const result = db
    .prepare("SELECT * FROM events WHERE id = ?")
    .get(insert.lastInsertRowid);

  return result as Event;
};

export const queryUpdateEventAvailableSeatsById = (
  eventId: number,
  availableSeats: number
) => {
  const query =
    "UPDATE events SET available_seats = ?, updated_at = ? WHERE id = ?";

  const now = new Date().toISOString();
  const updatedAt = format(new Date(now.slice(0, -1)), "yyyy-MM-dd HH:mm:ss");

  const update = db.prepare(query).run(availableSeats, updatedAt, eventId);
  const result = db
    .prepare("SELECT * FROM events WHERE id = ?")
    .get(update.lastInsertRowid);

  return result as Event;
};
