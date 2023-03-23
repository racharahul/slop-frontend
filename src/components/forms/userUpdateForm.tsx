import { Router } from "@mui/icons-material";
import { constants } from "fs/promises";
import { useRouter } from "next/router";
import React, {useEffect, useState} from "react";
import User from "../../data/User";
import api from "../../util/api";
import { AuthContext } from "../authProvider";

const UpdateUserForm: React.FC<{ user: User }> = ({ user }) => {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();
  const [gst, setGst] = useState("none")
  const [gsb, setGsb] = useState("none")
  const [gss, setGss] = useState("none")
  const [fullName, setFullName] = React.useState<string>(user.fullName);
  const [bio, setBio] = React.useState<string>(user.bio);
  const [school, setSchool] = React.useState<string>("GST");
  const [specialization, setSpecialization] = React.useState<string>("CSE");
  const [err, setErr] = React.useState<string | undefined>();
  const onSubmit = async () => {
    if (!fullName) {
      setErr("Full name should not be empty!");
      return;
    } else if (/\d/.test(fullName)) {
      setErr("Fullname should not contain a number");
      return;
    }
    console.log(authContext.authState);
    const res = await api.patch(
      `/users/${user.id}`,
      { fullName, bio, school, specialization },
      {
        headers: { Authorization: `Bearer ${authContext.authState}` },
      }
    );
    if (res.status === 200) await router.reload();
    setErr(undefined);
  };
  useEffect(()=>{
    if(school==="GST"){
      setGst("block")
      setGsb("none")
      setGss("none")
    }
    if(school==="GSB"){
      setGst("none")
      setGsb("block")
      setGss("none")
    }
    if(school==="GSS"){
      setGst("none")
      setGsb("none")
      setGss("block")
    }
  },[school])

  const widget = (
    <div className="card mt-4" style={{ width: "100%" }}>
      <div className="m-4">
        <label htmlFor="FullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="FullName"
          aria-describedby="emailHelp"
          defaultValue={fullName}
          onChange={(e) => {
            const { value } = e.target;
            setFullName(value.trim());
          }}
        />

        <div className="mb-3 my-3">
          <label htmlFor="Bio" className="form-label">
            Bio
          </label>
          <input
            type="text"
            className="form-control"
            id="Bio"
            defaultValue={bio}
            onChange={(e) => {
              const { value } = e.target;
              setBio(value);
            }}
          />
        </div>
        <div className="mb-3 my-3">
          <label htmlFor="school" className="form-label">
            School
          </label>
          <select
              className="form-select"
              aria-label="Default select example"
              id="school"
              defaultValue={school}
              onChange={(e) => {
                const { value } = e.target;
                setSchool(value);
              }}>
            <option selected>select <span className={"lower-triangle"}>▼</span></option>
            <option value="GST">Gitam School Of Technology (GST)</option>
            <option value="GSS">Gitam School Of Science (GSS)</option>
            <option value="GSB">Gitam School Of Business (GSB)</option>
          </select>
        </div>
        <div className="mb-3 my-3" style = {{display: gst}}>
          <label htmlFor="specialization" className="form-label">
            Specialization
          </label>
          <select
              className="form-select"
              aria-label="Default select example"
              id="specialization"
              defaultValue={school}
              onChange={(e) => {
                const { value } = e.target;
                setSpecialization(value);
              }}>
            <option selected>--select--</option>
            <option value="CSE">Computer Science and Engineering (CSE) - Regular</option>
            <option value="CSEAIML">CSE - Specialized with Artificial Intelligence and Machine Learning</option>
            <option value="CSECS">CSE - Specialized with Cyber Security </option>
            <option value="CSEDS">CSE - Specialized with Data Science </option>
            <option value="CSEIOT">CSE - Specialized with Internet Of Things </option>
            <option value="CSEBS">CSE - Specialized with Business Systems </option>
            <option value="ECE">Electronics and Communication Engineering (ECE) - Regular </option>
            <option value="ECEAIML">ECE - Specialized with Artificial Intelligence and Machine Learning </option>
            <option value="EEE">Electrical and Electronics Engineering - EEE </option>
            <option value="MECH">Mechanical Engineering - (MECH) </option>
          </select>
        </div>
        <div className="mb-3 my-3" style = {{display: gsb}}>
          <label htmlFor="specialization" className="form-label">
            Specialization
          </label>
          <select
              className="form-select"
              aria-label="Default select example"
              id="specialization"
              defaultValue={school}
              onChange={(e) => {
                const { value } = e.target;
                setSpecialization(value);
              }}>
            <option selected>--select--</option>
            <option value="BBA">Bachelor of Business Administration (BBA) - Regular</option>
            <option value="BBAFM">BBA - Specialized with Financial Management</option>
            <option value="BBAMM">BBA - Specialized with Marketing Management</option>
            <option value="BBAHR">BBA - Specialized with Human Resource Management</option>
            </select>
        </div>
        <div className="mb-3 my-3" style = {{display: gss}}>
          <label htmlFor="specialization" className="form-label">
            Specialization
          </label>
          <select
              className="form-select"
              aria-label="Default select example"
              id="specialization"
              defaultValue={school}
              onChange={(e) => {
                const { value } = e.target;
                setSpecialization(value);
              }}>
            <option selected>--select--</option>
            <option value={"BCA"}>Bachelor Of Computer Applications  (BCA)</option>
            <option value={"MCA"}>Masters Of Computer Applications  (MCA)</option>

          </select>
        </div>
        {err ? <p style={{ color: "red" }}>{err}</p> : <></>}
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );

  return widget;
};

export default UpdateUserForm;
