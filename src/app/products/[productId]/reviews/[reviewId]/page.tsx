import { notFound } from "next/navigation";

const generateRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  const randomNumber = generateRandomNumberBetween(0, 2);

  if (Number(reviewId) > 1000) {
    notFound();
  }

  if (randomNumber === 1) {
    throw new Error("Error loading product review");
  }

  return (
    <div>
      <h2>Product id: {productId}</h2>
      <h2>Review id: {reviewId}</h2>
    </div>
  );
}
