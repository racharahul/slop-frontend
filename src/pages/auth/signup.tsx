import style from "../../../styles/signup.module.css";
import Link from "next/link";
import AuthHeader from "../../components/AuthHeader";
import React from "react";
import SignUpForm from "../../components/forms/signUpForm";
import AuthComponent from "../../components/layout/authComp";

function Signup() {
  const widget = (
    <div className="auth-background">
      {/* <div className={style.box1} />
      <div className={style.box2} />
      <AuthHeader style={style} /> */}
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100%", width: "100%" }}
      >
        <SignUpForm style={style} />
      </div>
    </div>
  );
  return <AuthComponent child={widget} fromAuth={true} />;
}

export default Signup;
