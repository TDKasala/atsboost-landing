'use client';

import { useState } from 'react';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState('');

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedFile(e.target.files?.[0] || null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedFile) {
      setUploadMsg('Please select a file.');
      return;
    }
    // This just mocks upload/analysis
    setUploadMsg('Uploading...');
    setTimeout(() => setUploadMsg('Resume uploaded. (Connect backend for analysis.)'), 1500);
  }

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Upload Your Resume</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="file" accept=".pdf,.docx,.txt" onChange={handleFile} />
        <button className="bg-blue-600 text-white py-2 rounded" type="submit">Upload</button>
        <span>{uploadMsg}</span>
      </form>
    </main>
  );
}