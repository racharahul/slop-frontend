export type HomeFeed = {
  events: Event[];
};

export type Event = {
  id: string;
  name: string;
  slug: string;
  descriptionMd: string;
  poster: string;
  startTime: Date | null;
  endTime: Date | null;
  briefDescription: string;
  createdAt: Date;
  numberOfLikes: number;
  numberOfRegistrations: number;
  numberOfShares: number;
  numberOfAttendees: number;
  clubName: string;
  clubSlug: string;
  clubProfilePicture: string;
  registered: boolean;
  liked: boolean;
};
