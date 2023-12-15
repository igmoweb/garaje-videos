import Image from 'next/image';
async function fetchRandomCatImage() {
  console.time('--fetching');

  const res = await fetch('http://localhost:3000/api/cat/image', {
    method: 'GET',
    cache: 'no-store',
  });

  console.timeEnd('--fetching');

  return await res.json();
}
const BreedsList = async ({}) => {
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

export default BreedsList;
