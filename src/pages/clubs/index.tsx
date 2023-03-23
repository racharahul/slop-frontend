import Club, { toClubList } from "../../data/Club";
import React, { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../../components/authProvider";
import AuthComponent from "../../components/layout/authComp";
import Header from "../../components/layout/header";
import Head from "next/head";
import api from "../../util/api";
import Image from "next/image";

function Clubs() {
  const authContext = React.useContext(AuthContext);
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("/clubs", {
        headers: { Authorization: `Bearer ${authContext.authState}` },
      })
      .then((res) => {
        if (res.status === 200) {
          const clubs = toClubList(res.data.clubs);
          console.log(clubs);
          setClubs(() => [...clubs]);
        } else {
          console.log("error", res);
          alert(JSON.stringify(res));
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const widget = (
    <>
      <Head>
        <title>Clubs</title>
      </Head>
      <Header pageName={"Clubs"} />
      {clubs.map((club) => (
        <div key={club.clubSlug}>
          <h1>{club.clubName}</h1>
          <h2>{club.clubSlug}</h2>
          <h3>{club.clubDescription}</h3>
          <Image
            src={`http://localhost:8080/api/images/${club.profilePicture}`}
            width={100}
            height={100}
          />
        </div>
      ))}
    </>
  );
  return <AuthComponent child={loading ? <h1>Loading</h1> : widget} />;
}

export default Clubs;
