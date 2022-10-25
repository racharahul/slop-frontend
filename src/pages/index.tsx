import { useRouter } from "next/router";
import React from "react";

const RedirectingPage: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    if (!router.isReady) return;
    router.push("/auth/signin");
  }, [router.isReady]);
  return <></>;
};

export default RedirectingPage;
