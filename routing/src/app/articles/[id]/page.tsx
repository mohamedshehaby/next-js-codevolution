import Link from "next/link";

export default async function NewsArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  const { id } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <div>
      <h1>News Article {id}</h1>
      <p>Reading in language {lang}</p>

      <div>
        <Link href={"/articles/id?lang=en"}>English</Link>
        <Link href={"/articles/id?lang=fr"}>French</Link>
        <Link href={"/articles/id?lang=se"}>Spanish</Link>
      </div>
    </div>
  );
}
