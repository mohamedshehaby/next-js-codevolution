"use client";
import { ReactNode, useState } from "react";

const ClientComponentOne = ({ children }: { children?: ReactNode }) => {
  const [name, setName] = useState("Sayed");

  return (
    <>
      <h1>Client Components One</h1>
      {children}
    </>
  );
};

export default ClientComponentOne;
