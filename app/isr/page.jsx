const IsrPage = async () => {
  const res = await fetch("http://localhost:3001/products", {
    next: { revalidate: 30 }, // 30秒ごとに再生成
  });
  const data = await res.json();

  return (
    <div>
      <h1>ISR</h1>
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

export default IsrPage;
