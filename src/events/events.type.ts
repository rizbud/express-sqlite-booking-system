export interface Event {
  id: number;
  name: string;
  event_date: string;
  capacity: number;
  available_seats: number;
  booking_started_at: string;
  booking_ended_at: string;
  created_at: string;
}

export interface EventInput {
  name: string;
  event_date: string;
  capacity: number;
  booking_started_at: string;
  booking_ended_at: string;
}
