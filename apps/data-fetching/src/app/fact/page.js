import { fetchFact, fetchFacts } from '../../utils/fetch';
import { Suspense } from 'react';

const FactsWidget = async () => {
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
};

const RandomFact = async () => {
  const fact = await fetchFact();
  return <p className="text-lg font-mono">{fact.fact}</p>;
};

const FactPage = async () => {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-4xl mb-20">Random Fact</h1>
      <div className="flex justify-between">
        <Suspense fallback="Cargando fact...">
          <RandomFact />
        </Suspense>
        <div className="w-44">
          <Suspense fallback="Cargando facts...">
            <FactsWidget />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default FactPage;
