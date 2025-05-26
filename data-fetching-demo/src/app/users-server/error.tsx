"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">An error occurred</h1>
        <p className="text-lg text-red-600">{error.message}</p>
      </div>
    </div>
  );
}
