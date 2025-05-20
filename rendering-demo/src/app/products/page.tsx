import Link from "next/link";

const ProductsPage = () => {
    return (
        <div>
            <h1>Products</h1>
            <p>List of products will be displayed here.</p>
            <ul>
                <li><Link href={'/products/1'}>
                    Product 1
                </Link></li>
                <li><Link href={'/products/1'}>
                    Product 2
                </Link></li>
                <li><Link href={'/products/1'}>
                    Product 3
                </Link></li>
                </ul>
        </div>
    );
};

export default ProductsPage;