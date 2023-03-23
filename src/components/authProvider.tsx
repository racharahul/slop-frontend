import React from "react";
import Cookies from "js-cookie";

type ProviderValue = {
  authState: string;
  userId: string;
  isUserAuthenticated(): boolean;
  setAuthState(userAuthInfo: TokenInfo | undefined): void;
};
export type TokenInfo = {
  id: string;
  registrationId: string;
  fullName: string;
  emailId: string;
  phoneNumber: string;
  bio: string;
  profilePicture: string;
  userRole: "USER" | "CLUB" | "ADMIN";
  userSchool: string;
  userSpecialization: string;
  jwt: string;
};
export const AuthContext = React.createContext<ProviderValue>(undefined!);

const AuthProvider: React.FC<any> = ({ children }) => {
  const [authState, setAuthState] = React.useState<string>(
    Cookies.get("token") ?? ""
  );
  const [userId, setUserId] = React.useState<string>(
    Cookies.get("userId") ?? ""
  );
  const setUserAuthInfo = (data: TokenInfo) => {
    Cookies.set("token", data.jwt, { sameSite: "lax" });
    Cookies.set("userId", data.id, { sameSite: "lax" });
    const id = Cookies.get("userId");
    const token = Cookies.get("token");
    setUserId(id ?? "");
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
    userId,
    setAuthState(userAuthInfo: TokenInfo | undefined) {
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
