/* eslint-disable new-cap */
import { Expose, plainToInstance } from "class-transformer";

export default class User {
  id: string;

  fullName: string;

  registrationId: string;

  bio: string;

  emailId: string;

  userRole: "USER" | "CLUB" | "ADMIN" | "SUPER_ADMIN";
}
export function toUserList(jsonArr: string[]): User[] {
  const users = jsonArr.map((json) => toUser(json));
  return users;
}

export function toUser(json: string): User {
  return plainToInstance(User, json);
}
