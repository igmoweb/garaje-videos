'use client';
import { useState } from 'react';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function StickersPage() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prompt = e.target.prompt.value;
  };

  return (
    <>
      <div className="flex flex-col space-y-1.5 pb-6">
        <h1 className="font-semibold text-lg tracking-tight">
          Crea pegatinas!
        </h1>
      </div>

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
