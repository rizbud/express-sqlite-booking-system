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
