import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (query) {
    return Response.json(
      comments.filter((comment) => comment.text.includes(query))
    );
  }

  return Response.json(comments);
}

export async function POST(request: Request) {
  const { text } = await request.json();
  const newComment = { id: comments.length + 1, text };
  comments.push(newComment);
  return Response.json(newComment, { status: 201 });
}
