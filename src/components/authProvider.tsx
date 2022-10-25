import React from "react";
import Cookies from "js-cookie";

type ProviderValue = {
  authState: string;
  isUserAuthenticated(): boolean;
  setAuthState(userAuthInfo: string | undefined): void;
};

export const AuthContext = React.createContext<ProviderValue>(undefined!);

const AuthProvider: React.FC<any> = ({ children }) => {
  const [authState, setAuthState] = React.useState<string>(
    Cookies.get("token") ?? ""
  );

  const setUserAuthInfo = (data: string) => {
    Cookies.set("token", data, { sameSite: "lax" });
    const token = Cookies.get("token");
    setAuthState(token ?? "");
  };

  const removeUserAuthInfo = () => {
    Cookies.remove("token");
    setAuthState("");
  };

  // Checks if the user is authenticated or not
  const isUserAuthenticated = () => Boolean(authState);

  const appContext: ProviderValue = {
    authState,
    setAuthState(userAuthInfo: string | undefined) {
      if (userAuthInfo === undefined) {
        removeUserAuthInfo();
        return;
      }

      setUserAuthInfo(userAuthInfo);
    },
    isUserAuthenticated,
  };
  return (
    <AuthContext.Provider value={appContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
