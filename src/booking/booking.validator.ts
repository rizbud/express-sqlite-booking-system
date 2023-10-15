import type { BookingInput } from "./booking.type";

export const createBookingValidator = (booking: Partial<BookingInput>) => {
  if (!booking) return "All fields are required!";

  let message: string[] = [];
  if (!booking.name) message.push("name is required!");
  if (!booking.email) message.push("email is required!");
  if (!booking.number_of_seats) message.push("number_of_seats is required!");

  return message.length ? (message.length === 1 ? message[0] : message) : null;
};
