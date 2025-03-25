export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <div>
      <h2>Product id: {productId}</h2>
      <h2>Review id: {reviewId}</h2>
    </div>
  );
}
