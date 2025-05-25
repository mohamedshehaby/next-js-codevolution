import * as fs from "node:fs";
import ClientComponentOne from "@/components/client-component-one";

const ServerComponentOne = () => {
  fs.readFileSync("./src/components/server-component-one.tsx", "utf8");
  return (
    <>
      <h1>Server Components One</h1>
      <ClientComponentOne />
    </>
  );
};

export default ServerComponentOne;
