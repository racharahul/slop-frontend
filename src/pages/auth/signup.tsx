import style from "../../../styles/signup.module.css";
import Link from "next/link";
import Header from "../../components/header";
import React from "react";
import SignUpForm from "../../components/forms/signUpForm";
import AuthComponent from "../../components/layout/authComp";

function Signup() {
  const widget = (
    <div className="auth-background">
      <div className={style.box1} />
      <div className={style.box2} />
      <Header style={style} />
      <SignUpForm style={style} />
    </div>
  );
  return <AuthComponent child={widget} fromAuth={true} />;
}

export default Signup;
