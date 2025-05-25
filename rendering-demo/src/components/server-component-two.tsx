import * as fs from "node:fs";

const ServerComponentTwo = () => {
    fs.readFileSync('./src/components/server-component-two.tsx', 'utf8');
    return (
        <h1>
           Server Components Two
        </h1>
    );
};

export default ServerComponentTwo;