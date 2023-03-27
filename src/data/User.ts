/* eslint-disable new-cap */
import { plainToInstance, Type } from "class-transformer";
import Club from "./Club";
import Event from "./Event";
export default class User {
  id: string;
  fullName: string;
  registrationId: string;
  bio: string;
  emailId: string;
  userRole: "USER" | "CLUB" | "ADMIN" | "SUPER_ADMIN";
  profilePicture: string;
  userSpecilization: string;
  userSchool: string;
  @Type(() => Club)
  clubsFollowedByUser: Club[];
  @Type(() => Event)
  eventsRegisteredByUser: Event[];
}
export function toUserList(jsonArr: string[]): User[] {
  const users = jsonArr.map((json) => toUser(json));
  return users;
}

export function toUser(json: string): User {
  return plainToInstance(User, json);
}
