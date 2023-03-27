import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../../styles/globals.css";
import "../../styles/main.scss";
import AuthProvider from "../components/authProvider";
import "reflect-metadata";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
