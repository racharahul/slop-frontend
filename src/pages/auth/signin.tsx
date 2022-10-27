import style from "../../../styles/signin.module.css";
import SignInForm from "../../components/forms/signInForm";
import AuthHeader from "../../components/AuthHeader";
import AuthComponent from "../../components/layout/authComp";

function Signin() {
  const widget = (
    <div className="auth-background">
      <div className={style.box1}></div>
      <div className={style.box2}></div>
      <AuthHeader style={style} />
      <SignInForm style={style} />
    </div>
  );
  return <AuthComponent child={widget} fromAuth={true} />;
}

export default Signin;
