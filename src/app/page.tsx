import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Hello Home</h1>
      <Link href="/products">Products</Link>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
}
