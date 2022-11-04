import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import student from "../../../assets/student.png";
import user from "../../../assets/user.png";
import React from "react";
import { AuthContext } from "../../components/authProvider";
import AuthComponent from "../../components/layout/authComp";
import style from "../../../styles/profile.module.css";
import Header from "../../components/layout/header";

function Home() {
  const authContext = React.useContext(AuthContext);
  const widget = (
    <>
      <Header pageName={"Home"} />
      <div className="" style={{ margin: "100px" }}>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h2>No Events to show</h2>
            <p>Stay active & Follow clubs to see more</p>
          </div>
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return <AuthComponent child={widget} />;
}

export default Home;
