export const dynamic = "force-static";
export const revalidate = 10;

export async function GET() {
  const time = new Date().toUTCString();
  return new Response(time);
}
