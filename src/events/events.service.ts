import { buildEvent, buildEvents } from "./events.fixture";

import type { EventInput } from "./events.type";

export const getAllEvents = async () => {
  return buildEvents();
};

export const getEventById = async (id: number) => {
  return buildEvent({ id });
};

export const newEvent = async (data: EventInput) => {
  return buildEvent(data);
};
