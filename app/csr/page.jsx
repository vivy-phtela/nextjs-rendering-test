"use client";

import React, { useEffect, useState } from "react";

const CsrPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3001/products");
      const data = await res.json();

      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p style={{ color: "red" }}>Loading...</p>;

  return (
    <div>
      <h1>CSR</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.id}: {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CsrPage;
