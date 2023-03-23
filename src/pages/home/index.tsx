import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import student from "../../../assets/student.png";
import user from "../../../assets/user.png";
import React, { useState } from "react";
import { Post } from "../../components/Post";
import { AuthContext } from "../../components/authProvider";
import AuthComponent from "../../components/layout/authComp";
import style from "../../../styles/profile.module.css";
import Header from "../../components/layout/header";
import Head from "next/head";

function Home() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  const authContext = React.useContext(AuthContext);
  const widget = (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header pageName={"Home"} />
      <div className="" style={{ margin: "100px" }}>
        {/* This page displays only the events that the user is following */}

        <div className="container text-center">
          <div className="btn-group btn-rounded" role="group">
            <div className="dropdown">
              <button
                className="btn btn-light btn-rounded dropdown-toggle mx-1 px-4"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Current
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/home/future">
                    <a className="dropdown-item text-light">Ongoing</a>
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Past
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Future
                  </a>
                </li>
              </ul>
              <button
                className={`btn ${isActive ? "btn-light" : "btn-primary"}`}
                onClick={handleClick}
              >
                Hot
              </button>
            </div>
          </div>
        </div>

        <div className="container-md px-4 text-center">
          {/* Left Content */}
          <div className="row gx-5">
            <div className="col">
              {/* LEFT */}
              <div className="p-3"> </div>
              {/* LEFT */}
            </div>

            {/* Card */}
            <Post />

            {/* Right Content */}
            <div className="col">
              {/* RIGHT */}
              <div className="p-3"></div>
              {/* RIGHT */}
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return <AuthComponent child={widget} />;
}

export default Home;
