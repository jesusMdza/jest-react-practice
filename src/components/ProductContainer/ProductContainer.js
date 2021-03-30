import React from "react";

const ProductContainer = ({ data }) => {
  return (
    <div className="d-flex flex-row">
      {data ? data.map((number) => <h2>{number}</h2>) : ""}
    </div>
  );
};

export default ProductContainer;
