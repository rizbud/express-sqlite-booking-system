import type { BookingInput } from "./booking.type";

export const createBookingValidator = (booking: Partial<BookingInput>) => {
  if (!booking) return "All fields are required!";

  if (!booking.name) return "Name is required!";
  if (!booking.email) return "Email is required!";

  return null;
};
