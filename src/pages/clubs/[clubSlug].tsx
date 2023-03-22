import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Club } from "../../util/racha";
import FakeApiCall from "../../util/racha";

function ClubHomePage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const [club, setClub] = useState<Club>();
  useEffect(() => {
    if (!router.isReady) return;
    console.log("res");
    setLoading(true);
    FakeApiCall(
      `http://localhost:3000/api/clubs/${router.query.clubSlug}`,
      router.query.clubSlug as string
    ).then((res) => {
      console.log(res);

      if (res.status === 200 && res.data) {
        setClub(res.data);
      } else {
        setError(res.message as string);
      }
      setLoading(false);
    });
  }, [router.isReady]);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      {router.query.clubSlug}
      <h1>{JSON.stringify(club)}</h1>
      <h1>{JSON.stringify(error)}</h1>
    </div>
  );
}
export default ClubHomePage;
