import style from "../../../styles/signin.module.css";
import SignInForm from "../../components/forms/signInForm";
import AuthHeader from "../../components/AuthHeader";
import AuthComponent from "../../components/layout/authComp";

function Signin() {
  const widget = (
    <div className="auth-background">
      {/* <AuthHeader style={style} /> */}
      {/* <div className={style.box1} /> */}
      {/* <div className={style.box2} /> */}
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ height: "100%", width: "100%" }}
      >
        <SignInForm style={style} />
      </div>
    </div>
  );
  return <AuthComponent child={widget} fromAuth={true} />;
}

export default Signin;
