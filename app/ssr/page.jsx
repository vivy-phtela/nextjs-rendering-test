const SsrPage = async () => {
  const res = await fetch("http://localhost:3001/products", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div>
      <h1>SSR</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            {product.id}: {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SsrPage;
