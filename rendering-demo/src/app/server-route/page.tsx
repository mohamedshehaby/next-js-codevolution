import {getData} from "@/utils/server-utils/getData";

const ServerRoute = async  () => {

     await getData();

    return (
        <div>
                Server Route
        </div>
    );
};

export default ServerRoute;