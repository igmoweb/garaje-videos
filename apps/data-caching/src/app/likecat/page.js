import Image from 'next/image';
import Vote from '@/app/likecat/Vote';
async function fetchRandomCatImage() {
  console.time('--fetching');
  const cacheOptions = {
    // next: { revalidate: 3 },
    // cache: 'no-store',
    // next: { tags: ['cat', 'image'] },
  };
  const res = await fetch(
    'https://api.thecatapi.com/v1/images/search',
    cacheOptions,
  );

  console.timeEnd('--fetching');

  const images = await res.json();
  return images[0].url;
}

const CatImage = async () => {
  // Refresca el navegador y verás cuánto tiempo tarda
  // Usar Cmd + shift + R para refrescar la cache
  const image = await fetchRandomCatImage();
  console.log({ image });
  return (
    <Image
      src={image}
      alt="Random cat image"
      width={600}
      height={600}
      layout="responsive"
    />
  );
};
const BreedsList = async ({}) => {
  return (
    <>
      {
        // *.thecatapi.com must be in next.config
      }
      <CatImage />
      {/*<Vote />*/}
    </>
  );
};

export default BreedsList;
