// Dummy data for events

import type { Event } from "./events.type";

export const buildEvent = (overrides?: Partial<Event>): Event => ({
  id: 1,
  name: "Event 1",
  event_date: "2023-11-20",
  capacity: 100,
  available_seats: 100,
  booking_started_at: "2023-10-20T00:00:00.000Z",
  booking_ended_at: "2023-11-10T00:00:00.000Z",
  created_at: "2023-10-19T00:00:00.000Z",
  ...overrides,
});

export const buildEvents = (
  count = 2,
  overrides?: Partial<Event>[]
): Event[] => {
  const events = [];

  for (let i = 0; i < count; i++) {
    events.push(buildEvent(overrides?.[i]));
  }

  return events;
};
