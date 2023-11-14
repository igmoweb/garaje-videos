import { fetchFacts } from '../../../utils/fetch';

export default async function FactsWidget() {
  const facts = await fetchFacts();
  return (
    <>
      <h3 className="text-xl font-bold mb-4">Other facts</h3>
      <ul className="space-y-4">
        {facts.map((fact, index) => {
          return <li key={index}>{fact.fact}</li>;
        })}
      </ul>
    </>
  );
}
