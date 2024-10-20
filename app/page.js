import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Link href="/csr">
        <button>CSR</button>
      </Link>
      <Link href="/ssr">
        <button>SSR</button>
      </Link>
      <Link href="/ssg">
        <button>SSG</button>
      </Link>
      <Link href="/isr">
        <button>ISR</button>
      </Link>
    </div>
  );
}
