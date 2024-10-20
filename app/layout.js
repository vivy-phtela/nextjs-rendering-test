export const metadata = {
  title: "<Next.js>レンダリング比較",
  description: "CSR/SSR/SSG/ISRの比較",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
