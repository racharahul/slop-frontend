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
import Codex from "../../../assets/Codex.png";
import kala from "../../../assets/kala.png";

function Profile() {
  const authContext = React.useContext(AuthContext);
  const widget = (
    <div className="root" style={{ margin: "100px" }}>
      <Head>
        <title>Profile</title>
      </Head>
      <Header pageName={"Profile"} />
      {/* Profile Card */}
      <UserProfileCard />

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
            Events Attended
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
          tabIndex="0"
        >
          <br />

          <div className="container text-center">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div className="col">
                <div className="p-3">
                  <div
                    className=" card text-center"
                    style={{ width: "10rem", height: "10rem" }}
                  >
                    <Image src={Codex} className="card-img-top" alt="" />
                    <div className="card-body">
                      <p className="card-text">
                        <Link href={""}>
                          <a>Codex</a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          </div>

          {/* <div className="container px-4 text-center">
            <div className="row gx-5">
              <div>
                <div
                  className=" card text-center"
                  style={{ width: "10rem", height: "10rem" }}
                >
                  <Image src={Codex} className="card-img-top" alt="" />
                  <div className="card-body">
                    <p className="card-text">Codex</p>
                  </div>
                </div>
              </div>

              <div
                className=" card text-center"
                style={{ width: "10rem", height: "10rem" }}
              >
                <Image src={Codex} className="card-img-top" alt="" />
                <div className="card-body">
                  <p className="card-text">Codex</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabIndex="0"
        >
          <div className="card text-center mt-5" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="card-link">
                Card link
              </a>
            </div>
          </div>
          <div className="card text-center mt-5" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="card-link">
                Card link
              </a>
            </div>
          </div>
        </div>

        {/* <div
          className="tab-pane fade"
          id="contact-tab-pane"
          role="tabpanel"
          aria-labelledby="contact-tab"
          tabindex="0"
        >
          ...
        </div>
        <div
          className="tab-pane fade"
          id="disabled-tab-pane"
          role="tabpanel"
          aria-labelledby="disabled-tab"
          tabindex="0"
        >
          ...
        </div> */}
      </div>
    </div>
  );
  return <AuthComponent child={widget} />;
}

export default Profile;
