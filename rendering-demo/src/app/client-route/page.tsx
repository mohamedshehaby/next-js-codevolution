"use client"
import {useTheme} from "@/components/providers/themeProvider";

const ClientRoute =    () => {

      const theme = useTheme();
    console.log("Client Route", theme);
    return (
        <div>
            Client Route
        </div>
    );
};

export default ClientRoute;