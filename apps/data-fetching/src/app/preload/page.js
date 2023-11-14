import { preload, RandomFact } from './RandomFact';
import { fetchFacts } from '../../utils/fetch';

const FactPage = async () => {
  preload();
  const facts = await fetchFacts();
  return (
    <>
      <main className="min-h-screen p-24">
        <h1 className="text-4xl mb-20">Random Fact</h1>
        <div className="flex justify-between">
          <RandomFact />
        </div>
        <div>
          <ul className="space-y-4">
            {facts.map((fact, index) => (
              <li
                key={index}
                className="border p-3 text-sm rounded border-gray-600 "
              >
                {fact.fact}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default FactPage;
