'use client';
import { useState } from 'react';

export default function StickersPage() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(null);

    const prompt = e.target.prompt.value;

    const response = await fetch('/api/stickers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const prediction = await response.json();
    setResult(prediction);
  };

  return (
    <>
      <div className="flex flex-col space-y-1.5 pb-6">
        <h1 className="font-semibold text-lg tracking-tight">
          Crea pegatinas!
        </h1>
      </div>

      {result && <img src={result.output[0]} className="max-w-60" alt="" />}

      <form onSubmit={handleSubmit} className="animate-in fade-in duration-700">
        <div className="flex mt-8">
          <input
            name="prompt"
            placeholder="Un gato feo"
            className="block w-full flex-grow border border-gray-300 rounded-l-md p-1"
          />

          <button
            className="bg-black text-white rounded-r-md text-small inline-block p-3 flex-none"
            type="submit"
          >
            Crear
          </button>
        </div>
      </form>
    </>
  );
}
