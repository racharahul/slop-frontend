import React from "react";
type LoaderProps = {
  loading: boolean;
  child?: JSX.Element;
};
const Loader: React.FC<LoaderProps> = ({ loading, child }) => {
  if (loading || !child) return <div className="loader center" />;
  return <>{child}</>;
};

export default Loader;
