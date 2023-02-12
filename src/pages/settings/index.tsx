import React from "react";
import { AuthContext } from "../../components/authProvider";
import AuthComponent from "../../components/layout/authComp";
import Header from "../../components/layout/header";
import api from "../../util/api";
import User, { toUser } from "../../data/User";
import UpdateUserForm from "../../components/forms/userUpdateForm";

function Settings() {
  const authContext = React.useContext(AuthContext);
  const [user, setUser] = React.useState<User>(undefined!);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | undefined>();
  React.useEffect(() => {
    console.log("Use Effect");
    api
      .get("/users/getUser", {
        headers: { Authorization: `Bearer ${authContext.authState}` },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setUser(toUser(res.data));
          console.log(user);
        } else {
          console.log("error", res.data);
        }
      })
      .catch((err) => {
        console.log("error");
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const widget = loading ? (
    <>{loading}</>
  ) : (
    <div className="root" style={{ margin: "100px" }}>
      <title>Settings</title>
      <Header pageName={"Settings"} />
      <UpdateUserForm user={user} />
    </div>
  );
  return <AuthComponent child={widget} />;
}

export default Settings;
