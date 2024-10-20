const SsgPage = async () => {
  const res = await fetch("http://localhost:3001/products", {
    cache: "force-cache",
  });
  const data = await res.json();

  return (
    <div>
      <h1>SSG</h1>
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

export default SsgPage;
