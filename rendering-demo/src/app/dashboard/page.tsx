"use client";
import { useState } from "react";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  console.log("Dashboard");
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
