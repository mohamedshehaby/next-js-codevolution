"use client"
import {useTheme} from "@/components/providers/themeProvider";
import {clientSideFunction} from "@/utils/clinet-utils/client-utils";

const ClientRoute =    () => {
      clientSideFunction()
      const theme = useTheme();
    console.log("Client Route", theme);
    return (
        <div>
            Client Route
        </div>
    );
};

export default ClientRoute;