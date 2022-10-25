import { useRouter } from "next/router";
import React from "react";
import { AuthContext } from "../authProvider";
import Loader from "../loader";

type AuthComponentPropsI = {
  child: JSX.Element;
  fromAuth?: boolean;
};
const AuthComponent: React.FC<AuthComponentPropsI> = ({
  child,
  fromAuth = false,
}) => {
  const authContext = React.useContext(AuthContext);
  const [pageLoading, setPageLoading] = React.useState(true);
  const router = useRouter();
  React.useEffect(() => {
    let path;
    if (fromAuth) path = authContext.isUserAuthenticated() ? "/home" : null;
    else path = authContext.isUserAuthenticated() ? null : "/auth/signin";

    if (path)
      router.replace(path).catch((e) => {
        console.error("Routing error", e);
      });
    else setPageLoading(false);
  }, [authContext, fromAuth, router]);

  const widget = <>{child}</>;
  return <Loader loading={pageLoading} child={widget} />;
};

export default AuthComponent;
