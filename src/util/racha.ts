export type Club = {
  name: string;
  description: string;
  image: string;
  noOfMembers: number;
  noOfEvents: number;
  noOfFollowers: number;
};
const clubs: Club[] = [
  {
    name: "Gstudio",
    description:
      "We decide the vibe of photography, much more than just media 😌",
    image: "https://i.imgur.com/4Z5ZQ9M.png",
    noOfMembers: 0,
    noOfEvents: 0,
    noOfFollowers: 0,
  },
  {
    name: "Kalakrithi",
    description:
      "Arts & entertainment Cultural club GITAM Bengaluru 🖤 | Dance | Music |",
    image: "https://i.imgur.com/4Z5ZQ9M.png",
    noOfEvents: 0,
    noOfFollowers: 0,
    noOfMembers: 0,
  },
  {
    name: "Gusac",
    description: "“तमसो मा ज्योतिर्गमय",
    image: "https://i.imgur.com/4Z5ZQ9M.png",
    noOfEvents: 0,
    noOfFollowers: 0,
    noOfMembers: 0,
  },
  {
    name: "Codex",
    description:
      "We decide the vibe of photography, much more than just media 😌",
    image: "https://i.imgur.com/4Z5ZQ9M.png",
    noOfMembers: 0,
    noOfEvents: 0,
    noOfFollowers: 0,
  },
];
export default async function FakeApiCall(url: string, clubSlug: string) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  const club = clubs.find(
    (club) => club.name.toLowerCase() === clubSlug.toLowerCase()
  );
  if (!club)
    return { status: 404, message: `Club not found with the slug ${clubSlug}` };
  return { status: 200, data: club };
}
