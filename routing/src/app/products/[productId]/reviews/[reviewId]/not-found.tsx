"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();
  const reviewId = pathname.split("/").pop();
  return (
    <div>
      <h2>
        Review {reviewId} not found for this product {productId}
      </h2>
    </div>
  );
}
