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
    <div className="root">
      <Header pageName={"Home"} />

      <div className={style.align}>
        <h2>No Events to show</h2>
        <p>Stay active & Follow clubs to see more</p>
      </div>
    </div>
  );

  return <AuthComponent child={widget} />;
}

export default Home;
