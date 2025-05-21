import {getData} from "@/utils/server-utils/getData";
import {clientSideFunction} from "@/utils/clinet-utils/client-utils";

const ServerRoute = async  () => {

     await getData();
     clientSideFunction();
    return (
        <div>
                Server Route
        </div>
    );
};

export default ServerRoute;