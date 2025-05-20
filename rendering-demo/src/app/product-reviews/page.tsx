import Product from "@/components/product";
import Reviews from "@/components/reviews";
import {Suspense} from "react";

const Page = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading Product Details...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading Reviews...</p>}>
                <Reviews />
            </Suspense>

        </div>
    );
};

export default Page;