import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { Club } from "../../util/racha";
import FakeApiCall from "../../util/racha";
import Image from "next/image";
import Header from "../../components/layout/header";

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
  if (error || !club) return <h1>Error {error}</h1>;
  return (
    <div>
      <div className="card mb-3 m-2">
        <div className="card-body">
          <h5 className="card-title">{club.name}</h5>
          <p className="card-text">{club.description}</p>

          {/* NavTabs */}
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Followers
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                Events
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabIndex={0}
            >
              ....
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabIndex={0}
            >
              ...
            </div>
            <div
              className="tab-pane fade"
              id="disabled-tab-pane"
              role="tabpanel"
              aria-labelledby="disabled-tab"
              tabIndex={0}
            >
              ...
            </div>
          </div>

          {/* NavTabs End */}
        </div>
      </div>
    </div>
  );
}
export default ClubHomePage;
