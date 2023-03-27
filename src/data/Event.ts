/* eslint-disable new-cap */
import { Expose, plainToInstance } from "class-transformer";
import User from "./User";
import { Transform, classToPlain } from "class-transformer";
import moment, { Moment } from "moment";

export default class Event {
  id: string;

  name: string;

  descriptionMd: string;

  slug: string;
  poster: string;

  @Transform(({ value }) => moment(value))
  createdAt: Moment;

  @Transform(({ value }) => {
    if (value === null) return undefined;
    return moment(value);
  })
  startTime?: Moment | undefined;

  @Transform(({ value }) => {
    if (value === null) return undefined;
    return moment(value);
  })
  endTime?: Moment | undefined;
  numberOfLikes: number;
  numberOfRegistrations: number;
  numberOfShares: number;
  numberOfAttendees: number;
  clubName: string;
  clubSlug: string;
  clubProfilePicture: string;
  registered: boolean;
  liked: boolean;
  // eventCreators: User[];

  // registeredUsers: User[];

  briefDescription: string;
}
export function toEventList(jsonArr: string[]): Event[] {
  const events = jsonArr.map((json) => toEvent(json));
  return events;
}

export function toEvent(json: string): Event {
  return plainToInstance(Event, json);
}
