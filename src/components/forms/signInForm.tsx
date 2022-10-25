import Link from "next/link";
import Router from "next/router";
import React from "react";
import { ValidationError } from "yup";
import api from "../../util/api";
import { signInFormValidation } from "../../util/dataValidation";
import { AuthContext } from "../authProvider";

type Prop = {
  style: {
    readonly [key: string]: string;
  };
};

type FormType = {
  emailId: string;
  password: string;
};
const SignInForm: React.FC<Prop> = ({ style }) => {
  const authContext = React.useContext(AuthContext);
  const [formVal, setFormVal] = React.useState<FormType>({
    emailId: "",
    password: "",
  });
  const [err, setErr] = React.useState("");
  const validate = async (data: FormType) => {
    const isValid = await signInFormValidation.isValid(data);
    try {
      await signInFormValidation.validate(data);
    } catch (e: unknown) {
      if (e instanceof ValidationError) setErr(e.message);
    }
    return isValid;
  };
  const onSubmit = async () => {
    if (!(await validate(formVal))) return;
    setErr("");
    const res = await api.post("/auth/signin", formVal);
    if (res.status === 200) authContext.setAuthState(res.data);
    else setErr(res.data.message);
  };
  return (
    <div className={style.signin}>
      <h1>Let`s Goo</h1>
      <input
        className={style.input}
        type="email"
        placeholder="Email ID"
        onChange={(e) => {
          const { value } = e.target;
          setFormVal((prev) => ({ ...prev, emailId: value }));
        }}
      />
      <br />
      <input
        className={style.input}
        type="password"
        placeholder="Password"
        onChange={(e) => {
          const { value } = e.target;
          setFormVal((prev) => ({ ...prev, password: value }));
        }}
      />
      <br />
      <div className="error-text">{err}</div>
      <br />
      <button className={style.btn} onClick={onSubmit}>
        Sign In
      </button>

      <p>
        Don`t Have An Account?
        <Link href="/auth/signup">
          <a className={style.a}>Create One!</a>
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
