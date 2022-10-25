import { Router, useRouter } from "next/router";

function Codex() {
  const router = useRouter();
  return <div>{router.query.clubSlug}</div>;
}
export default Codex;
