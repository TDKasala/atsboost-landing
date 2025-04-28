// login/page.tsx
"use client";

import { useState } from "react";

export default function Login() {
  const [msg, setMsg] = useState("");
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setMsg("Login attempted (implement real auth later).");
  }
  return (
    <main className="max-w-sm mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input className="border p-2 rounded" type="email" placeholder="Email" required />
        <input className="border p-2 rounded" type="password" placeholder="Password" required />
        <button className="bg-blue-600 text-white py-2 rounded" type="submit">Login</button>
        <span>{msg}</span>
      </form>
    </main>
  );
}