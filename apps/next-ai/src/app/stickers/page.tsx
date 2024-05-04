'use client';
import { useChat } from 'ai/react';
import { useState } from 'react';
import Link from 'next/link';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function StickersPage() {
  const { input, handleInputChange } = useChat({
    api: '/api/predictions',
  });
  const [result, setResult] = useState(null);
  const [predictionId, setPredictionId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const prompt = e.target.prompt.value;

    setPredictionId(null);
    setResult(null);

    const body = {
      prompt,
    };

    const response = await fetch('/api/stickers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    let prediction = await response.json();
    setPredictionId(prediction.id);

    while (
      prediction.status !== 'succeeded' &&
      prediction.status !== 'failed'
    ) {
      await sleep(500);
      const response = await fetch('/api/stickers/' + prediction.id, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      prediction = await response.json();
      if (response.status !== 200) {
        return;
      }

      if (prediction.status === 'succeeded') {
        setPredictionId(null);
        setResult(prediction.output[0]);
      }
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-1.5 pb-6">
        <h1 className="font-semibold text-lg tracking-tight">
          Crea pegatinas!
        </h1>
      </div>

      {result && <img src={result} className="max-w-60" alt="" />}

      <form onSubmit={handleSubmit} className="animate-in fade-in duration-700">
        <div className="flex mt-8">
          <input
            name="prompt"
            value={input}
            onChange={handleInputChange}
            placeholder="Un gato feo"
            className="block w-full flex-grow border border-gray-300 rounded-l-md p-1"
            disabled={!!predictionId}
          />

          {!!predictionId || (
            <button
              className="bg-black text-white rounded-r-md text-small inline-block p-3 flex-none"
              type="submit"
            >
              Crear
            </button>
          )}
        </div>

        {predictionId && (
          <div>
            <Link
              href={`https://replicate.com/p/${predictionId}`}
              target="_blank"
            >
              Generando imagen...
            </Link>
          </div>
        )}
      </form>
    </>
  );
}
