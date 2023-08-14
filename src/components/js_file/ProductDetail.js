import React from 'react'

const ProductDetail = ({allProducts}) => {
  return (
    <div>
      <ul>
        {allProducts.map((pro) => (
            <li key={pro.id}>
                <h3>{pro.name}</h3>
                <p>{pro.description}</p>
                <p>Price: ${pro.price}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetail;
