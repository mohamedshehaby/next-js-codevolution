import { comments } from "@/app/comments/data";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find(
    (comment: { id: number; text: string }) => comment.id === parseInt(id)
  );

  if (!comment) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }

  return Response.json(comment);
}
