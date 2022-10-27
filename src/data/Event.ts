/* eslint-disable new-cap */
import { Expose, plainToInstance } from "class-transformer";

export default class Event {
  id: string;

  name: string;

  description: string;

  clubName: string;
}
export function toEventList(jsonArr: string[]): Event[] {
  const events = jsonArr.map((json) => toEvent(json));
  return events;
}

export function toEvent(json: string): Event {
  return plainToInstance(Event, json);
}
