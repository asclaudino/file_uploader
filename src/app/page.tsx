'use client';
import Image from "next/image";
import type { Metadata } from 'next'
import { useState } from 'react';


export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<any>(null);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!file) {
      alert('Please select a file first!');
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch(`${apiUrl}/upload`, {
        method: 'POST',
        body: formData,
      });
      const result = await res.json();
      setResponse(result);
      //const result = await res.json();
      //console.log(result);
      //setResponse(text);
    } catch (error) {
      console.error('Error uploading file:', error);
      setResponse({ error: 'Failed to upload file' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex flex-col flex-1 items-center justify-center p-6 bg-white shadow-lg rounded-lg mx-4 my-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Upload your files</h1>

        <form onSubmit={handleUpload} className="w-full max-w-sm">
          <input
            name="file"
            type="file"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Upload
          </button>
        </form>
        {loading && (
          <div className="mt-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-blue-500 border-t-transparent"></div>
              <p className="text-lg text-gray-700">Processing, please wait...</p>
            </div>
          </div>
        )}

        {response && !loading && (
          <div className="mt-4">
            {/* Display the image and text */}
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-medium text-gray-800 mb-2">Uploaded Image:</h2>
              <img
                src={response.fileUrl}
                alt="Uploaded Image"
                className="max-w-full h-auto rounded-md shadow-md"
              />
              <h2 className="text-xl font-medium text-gray-800 mt-6 mb-2">Extracted Text:</h2>
              <p className="mt-4 text-lg text-gray-700">
                {response.text}
              </p>
            </div>
          </div>
        )}
      </main>

      <footer className="text-center p-4 bg-gray-800 text-white mt-auto">
        <p>All rights reserved</p>
      </footer>
    </div>
  );
}



