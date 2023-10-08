import { buildBooking, buildBookings } from "./booking.fixture";

import type { BookingInput } from "./booking.type";

export const getBookingsByEventId = async (eventId: number) => {
  return buildBookings();
};

export const newBooking = async (eventId: number, booking: BookingInput) => {
  return buildBooking({ ...booking, event_id: eventId });
};
