import React from "react";

const ProductDetailsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <h3> Featured Products based on </h3>
    </>
  );
};

export default ProductDetailsLayout;
