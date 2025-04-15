import { headers } from "next/headers";
import { cookies } from "next/headers";

export async function GET() {
  const headersList = await headers();

  for (const [key, value] of headersList.entries()) {
    console.log(key, value);
  }
  const token = headersList.get("authorization");

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");

  console.log("theme -> ", theme);

  return Response.json(
    {
      message: "User profile",
      token,
    },
    {
      headers: {
        "Set-Cookie": `theme=dark`,
      },
    }
  );
}
