import { comments } from "@/app/comments/data";
export async function GET(
  _request: Request,
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

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const { text } = await request.json();
  const comment = comments.find(
    (comment: { id: number; text: string }) => comment.id === parseInt(id)
  );

  if (!comment) {
    return Response.json({ message: "Comment not found" }, { status: 404 });
  }

  comment.text = text;

  return Response.json(comment);
}

export async function DELETE(
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

  comments.splice(comments.indexOf(comment), 1);

  return Response.json({ message: "Comment deleted" }, { status: 200 });
}
