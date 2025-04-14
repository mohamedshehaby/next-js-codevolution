import type { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;

  const title = await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId) {
        resolve("IPhone " + productId);
      } else {
        reject(new Error("Product not found"));
      }
    }, 1000);
  });

  return {
    title: "Product" + title,
  };
}

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;

  return <h2>product id: {productId}</h2>;
}
