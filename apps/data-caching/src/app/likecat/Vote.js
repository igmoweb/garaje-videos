'use client';
import { useRouter } from 'next/navigation';

const sendLike = async (value) =>
  await fetch('/api/cat/like', {
    method: 'POST',
    body: JSON.stringify({ like: value }),
  });

const Vote = () => {
  const router = useRouter();
  return (
    <>
      <button
        className="bg-white text-black font-bold py-2 px-4 rounded mt-2"
        onClick={async () => {
          await sendLike(true);
          router.refresh();
        }}
      >
        Me gusta
      </button>
      <button
        className="bg-white text-black font-bold py-2 px-4 rounded mt-2"
        onClick={async () => {
          await sendLike(false);
          router.refresh();
        }}
      >
        No me gusta
      </button>
    </>
  );
};

export default Vote;
