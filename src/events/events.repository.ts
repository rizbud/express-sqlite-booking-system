import db from "../config/database";

import type { Event, EventInput } from "./events.type";

export const queryGetAllEvents = () => {
  const query = `SELECT
      e.id, e.name, e.event_date, e.capacity,
      e.capacity - COALESCE(SUM(b.number_of_seats), 0) AS available_seats,
      e.booking_started_at, e.booking_ended_at, e.created_at
    FROM
      events e
    LEFT JOIN
      bookings b ON b.event_id = e.id
    GROUP BY
      e.id`;

  return db.prepare(query).all() as Event[];
};

export const queryGetEventById = (id: number | bigint) => {
  const query = `SELECT
      e.id, e.name, e.event_date, e.capacity,
      e.capacity - COALESCE(SUM(b.number_of_seats), 0) AS available_seats,
      e.booking_started_at, e.booking_ended_at, e.created_at
    FROM
      events e
    LEFT JOIN
      bookings b ON b.event_id = e.id
    WHERE
      e.id = ?
    GROUP BY
      e.id`;

  const result = db.prepare(query).get(id) as Event | undefined;

  return result;
};

export const queryInsertEvent = (data: EventInput) => {
  const query =
    "INSERT INTO events (name, event_date, capacity, booking_started_at, booking_ended_at) VALUES (?, ?, ?, ?, ?)";

  const insert = db
    .prepare(query)
    .run(
      data.name,
      data.event_date,
      data.capacity,
      data.booking_started_at,
      data.booking_ended_at
    );
  const result = queryGetEventById(insert.lastInsertRowid);

  return result;
};
