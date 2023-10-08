import type { Booking } from "./booking.type";

export const buildBooking = (overrides?: Partial<Booking>): Booking => ({
  id: 1,
  event_id: 1,
  name: "John Doe",
  email: "johndoe@gmail.com",
  created_at: "2023-10-12T00:00:00.000Z",
  ...overrides,
});

export const buildBookings = (
  count = 2,
  overrides?: Partial<Booking>[]
): Booking[] => {
  const bookings = [];

  for (let i = 0; i < count; i++) {
    bookings.push(buildBooking(overrides?.[i]));
  }

  return bookings;
};
