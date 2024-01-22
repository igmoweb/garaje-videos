import Image from 'next/image';
import Vote from '@/app/likecat/Vote';

export async function fetchRandomCatImage() {
  console.time('--fetching');
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {
    next: { tags: ['cat', 'image'] },
  });
  console.timeEnd('--fetching');

  const images = await res.json();
  return images[0].url;
}

const CatImage = async () => {
  const image = await fetchRandomCatImage();

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
const LikeCatPage = async ({}) => {
  return (
    <>
      {
        // *.thecatapi.com must be in next.config
      }
      <CatImage />
      <Vote />
    </>
  );
};

export default LikeCatPage;
