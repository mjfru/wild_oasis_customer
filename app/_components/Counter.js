// "use client" allows us to use React hooks on RSCs
"use client";
import { useState } from "react";

export default function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);
  return (
    <>
      <div>
        <p>There are {users.length} users</p>
      </div>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </>
  );
}
