export interface Booking {
  id: number;
  event_id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface BookingInput {
  name: string;
  email: string;
}
