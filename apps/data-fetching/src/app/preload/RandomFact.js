import { fetchFact } from '../../utils/fetch';

export async function preload() {
  await fetchFact();
}
export const RandomFact = async () => {
  const fact = await fetchFact();
  return (
    <div className="z-10 max-w-5xl w-full flex-col gap-8 items-center justify-between font-mono text-sm lg:flex">
      <p className="text-xl">{fact.fact}</p>
    </div>
  );
};

export default RandomFact;
