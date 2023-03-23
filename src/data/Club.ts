import { plainToInstance } from "class-transformer";

export default class Club {
  id: string;
  clubName: string;
  clubDescription: string;
  clubSlug: string;
  profilePicture: string;
}

export function toClubList(jsonArr: string[]): Club[] {
  const clubs = jsonArr.map((json) => toClub(json));
  return clubs;
}
export function toClub(json: string): Club {
  return plainToInstance(Club, json);
}
