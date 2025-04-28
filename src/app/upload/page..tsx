'use client';

import { useState } from 'react';

export default function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadMsg, setUploadMsg] = useState('');
  const [result, setResult] = useState('');

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    setSelectedFile(e.target.files?.[0] || null);
    setUploadMsg('');
    setResult('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedFile) {
      setUploadMsg('Please select a file.');
      return;
    }
    setUploadMsg('Uploading...');
    const formData = new FormData();
    formData.append('resume', selectedFile);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();
    setUploadMsg('');
    setResult(data.message);
  }

  return (
    <main className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Upload Your Resume</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="file" accept=".pdf,.docx,.txt" onChange={handleFile} />
        <button className="bg-blue-600 text-white py-2 rounded" type="submit">Upload</button>
        {uploadMsg && <span>{uploadMsg}</span>}
        {result && <div className="mt-4 p-4 bg-green-50 border">{result}</div>}
      </form>
    </main>
  );
}