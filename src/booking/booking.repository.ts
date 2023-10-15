import db from "../config/database";

import type { Booking, BookingInput } from "./booking.type";

export const queryGetBookingsByEventId = (eventId: number | bigint) => {
  return db
    .prepare("SELECT * FROM bookings WHERE event_id = ?")
    .all(eventId) as Booking[];
};

export const queryInsertBooking = (data: BookingInput) => {
  const stmt = db.prepare(
    "INSERT INTO bookings (event_id, name, email, number_of_seats) VALUES (?, ?, ?, ?)"
  );

  const insert = stmt.run(
    data.event_id,
    data.name,
    data.email,
    data.number_of_seats
  );
  const result = db
    .prepare("SELECT * FROM bookings WHERE id = ?")
    .get(insert.lastInsertRowid);

  return result as Booking;
};
