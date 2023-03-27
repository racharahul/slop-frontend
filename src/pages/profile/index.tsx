import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import student from "../../../assets/student.png";
import user from "../../../assets/user.png";
import userprofile from "../../../assets/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import { AuthContext } from "../../components/authProvider";
import AuthComponent from "../../components/layout/authComp";
import verified from "../../../assets/verified-black.png";
import style from "../../../styles/profile.module.css";
import Header from "../../components/layout/header";
import UserProfileCard from "../../components/UserProfileCard";
import Head from "next/head";
import { height } from "@mui/system";
import Codex from "../../../assets/CodeX.png";
import kala from "../../../assets/kala.png";
import api from "@/util/api";
import User, { toUser } from "@/data/User";
import { getImageLink } from "@/util/image";
import { EventPost } from "@/components/Post";
import Event from "@/data/Event";

function Profile() {
  const authContext = React.useContext(AuthContext);
  const [user, setUser] = React.useState<User>(undefined!);
  React.useEffect(() => {
    console.log("Use Effect");
    api
      .get("/users/getUser", {
        headers: { Authorization: `Bearer ${authContext.authState}` },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setUser(toUser(res.data));
          console.log(user);
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log("error");
        console.error(err);
      });
  }, []);
  const widget = user ? (
    <div className="root" style={{ margin: "100px" }}>
      <Head>
        <title>Profile</title>
      </Head>
      <Header pageName={"Profile"} />
      {/* Profile Card */}
      <UserProfileCard user={user} />

      <hr />

      {/* navtabs */}
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
            Following CLubs
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
            Events Registered
          </button>
        </li>
        {/* <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact-tab-pane"
            type="button"
            role="tab"
            aria-controls="contact-tab-pane"
            aria-selected="false"
          >
            #
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="disabled-tab"
            data-bs-toggle="tab"
            data-bs-target="#disabled-tab-pane"
            type="button"
            role="tab"
            aria-controls="disabled-tab-pane"
            aria-selected="false"
            disabled
          >
            #
          </button>
        </li> */}
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabIndex={0}
        >
          <br />

          <div className="container text-center">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              {user.clubsFollowedByUser.map((club) => {
                return (
                  <div className="col" key={club.clubSlug}>
                    <div className="p-3">
                      <div
                        className=" card text-center"
                        // style={{ width: "10rem", height: "10rem" }}
                      >
                        <Image
                          src={getImageLink(club.profilePicture)}
                          className="card-img-top"
                          width={500}
                          height={500}
                          alt=""
                        />
                        <div className="card-body">
                          <p className="card-text">
                            <Link href={`/clubs/${club.clubSlug}`}>
                              <a>{club.clubName}</a>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex={0}
        >
          <div style={{ marginLeft: "400px" }}>
            {user.eventsRegisteredByUser.map((event) => {
              return <EventPost event={event} key={event.slug} />;
            })}
          </div>
        </div>

        {/* <div
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
        </div> */}
      </div>
    </div>
  ) : (
    <>Loadin</>
  );
  return <AuthComponent child={widget} />;
}

export default Profile;
