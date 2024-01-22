import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';
async function fetchRandomCatImage() {
  console.time('--fetching');

  const res = await fetch('http://localhost:3000/api/cat/image', {
    method: 'GET',
    cache: 'no-store',
  });

  console.timeEnd('--fetching');

  return await res.json();
}
const CatPage = async () => {
  const image = await fetchRandomCatImage();

  return (
    <>
      <h1 className="text-3xl">Un gato</h1>
      <Link href="/likecat" className="underline">
        Votar
      </Link>
      <Image
        src={image}
        alt="Random cat image"
        width={600}
        height={600}
        layout="responsive"
      />
    </>
  );
};

export default CatPage;
