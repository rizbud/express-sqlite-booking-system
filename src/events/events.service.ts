import {
  queryGetAllEvents,
  queryGetEventById,
  queryInsertEvent,
} from "./events.repository";

import type { EventInput } from "./events.type";

export const getAllEvents = async () => {
  return queryGetAllEvents();
};

export const getEventById = async (id: number) => {
  return queryGetEventById(id);
};

export const newEvent = async (data: EventInput) => {
  return queryInsertEvent(data);
};
