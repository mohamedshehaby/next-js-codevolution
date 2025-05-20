import {delay} from "@/utils/delay";

const Product = async  () => {
    await delay(10000)
    return (
        <div>
            Product Component
        </div>
    );
};

export default Product;