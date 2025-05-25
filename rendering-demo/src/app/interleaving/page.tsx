import ServerComponentOne from "@/components/server-component-one";
import ClientComponentOne from "@/components/client-component-one";

const InterLeavingPage = () => {
  return (
    <>
      <h1>interleaving page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
};

export default InterLeavingPage;
