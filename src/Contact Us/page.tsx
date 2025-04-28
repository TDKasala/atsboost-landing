"use client";

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => setStatus('Sent!'), 1000); // Simulate success
  }

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input className="border rounded p-2" type="text" placeholder="Name" required />
        <input className="border rounded p-2" type="email" placeholder="Email" required />
        <textarea className="border rounded p-2" placeholder="Message" required />
        <button className="bg-blue-600 text-white py-2 rounded" type="submit">Send</button>
        <span>{status}</span>
      </form>
    </main>
  );
}