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
/*

{user.clubsFollowedByUser.map((club) => {
  return (
    <div className="col" key={club.clubSlug}>
      <div className="p-3 border bg-light">
        <Image
          src={getImageLink(club.profilePicture)}
          alt=""
          width={100}
          height={100}
        />
        <p>{club.clubName}</p>
      </div>
    </div>
  );
})}


<div className="col">
<div className="p-3">
  <div
    className=" card text-center"
    style={{ width: "10rem", height: "10rem" }}
  >
    <Image src={kala} className="card-img-top" alt="" />
    <div className="card-body">
      <p className="card-text">
        <Link href={""}>
          <a>Kalakruthi</a>
        </Link>
      </p>
    </div>
  </div>
</div>
</div>

*/
