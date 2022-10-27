import { Router } from "@mui/icons-material";
import { constants } from "fs/promises";
import { useRouter } from "next/router";
import React from "react";
import User from "../../data/User";
import api from "../../util/api";
import { AuthContext } from "../authProvider";

const UpdateUserForm: React.FC<{ user: User }> = ({ user }) => {
  const authContext = React.useContext(AuthContext);
  const router = useRouter();
  const [fullName, setFullName] = React.useState<string>(user.fullName);
  const [bio, setBio] = React.useState<string>(user.bio);
  const onSubmit = async () => {
    console.log(authContext.authState);
    const res = await api.patch(
      `/users/${user.id}`,
      { fullName, bio },
      {
        headers: { Authorization: `Bearer ${authContext.authState}` },
      }
    );
    if (res.status === 200) await router.reload();
  };
  const widget = (
    <div className="card m-5">
      <div className="m-5">
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
            setFullName(value);
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

        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );

  return widget;
};

export default UpdateUserForm;
