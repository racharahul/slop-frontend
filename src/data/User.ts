/* eslint-disable new-cap */
import { Expose, plainToInstance } from "class-transformer";
import Club from "./Club";

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
  clubsFollowedByUser: Club[];
}
export function toUserList(jsonArr: string[]): User[] {
  const users = jsonArr.map((json) => toUser(json));
  return users;
}

export function toUser(json: string): User {
  return plainToInstance(User, json);
}
