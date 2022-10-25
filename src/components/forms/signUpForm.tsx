import Link from "next/link";
import Router from "next/router";
import React from "react";
import { ValidationError } from "yup";
import api from "../../util/api";
import { signUpFormValidation } from "../../util/dataValidation";
type Prop = {
  style: {
    readonly [key: string]: string;
  };
};

type FormType = {
  fullName: string;
  registrationId: string;
  emailId: string;
  password: string;
};
const SignUpForm: React.FC<Prop> = ({ style }) => {
  const [formVal, setFormVal] = React.useState<FormType>({
    fullName: "",
    registrationId: "",
    emailId: "",
    password: "",
  });
  const [err, setErr] = React.useState("");
  const validateData = async (data: FormType) => {
    const validity = await signUpFormValidation.isValid(data);
    try {
      await signUpFormValidation.validate(data);
    } catch (e: unknown) {
      if (e instanceof ValidationError) setErr(e.errors[0]);
    }
    return validity;
  };
  const onSubmit = async () => {
    if (!(await validateData(formVal))) return;
    const res = await api.post("/auth/signup", formVal);
    if (res.status === 200) await Router.push("/auth/signin");
    else setErr(res.data.message);
  };
  return (
    <div className={style.signup}>
      <h1>Create An Account</h1>
      <input
        className={style.input}
        type="text"
        placeholder="Full Name"
        onChange={(e) => {
          const value = e.target.value;
          setFormVal((prevFormVal) => {
            prevFormVal.fullName = value;
            return prevFormVal;
          });
        }}
      />
      <br />
      <input
        className={style.input}
        type="text"
        placeholder="Registeration Number"
        onChange={(e) => {
          const value = e.target.value;
          setFormVal((prevFormVal) => {
            prevFormVal.registrationId = value;
            return prevFormVal;
          });
        }}
      />
      <br />
      <input
        className={style.input}
        type="email"
        placeholder="Email ID"
        defaultValue={formVal.emailId}
        onChange={(e) => {
          const value = e.target.value;
          setFormVal((prevFormVal) => {
            prevFormVal.emailId = value;
            return prevFormVal;
          });
        }}
      />
      <br />
      <input
        className={style.input}
        type="password"
        placeholder="Password"
        onChange={(e) => {
          const value = e.target.value;
          setFormVal((prevFormVal) => {
            prevFormVal.password = value;
            return prevFormVal;
          });
        }}
      />
      <br />
      {err ? <div className="error-text">{err}</div> : <></>}
      <br />

      <button className={style.btn} onClick={onSubmit}>
        Create Account
      </button>
      <p>
        Already Have An Account?
        <Link href="/auth/signin">
          <a className={style.a}>Sign in!</a>
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
