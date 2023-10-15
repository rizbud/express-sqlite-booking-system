export interface Booking {
  id: number;
  event_id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface BookingInput {
  event_id: number;
  name: string;
  email: string;
  number_of_seats: number;
}
