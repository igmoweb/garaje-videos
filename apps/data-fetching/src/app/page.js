import Link from 'next/link';
import { fetchFacts } from '../utils/fetch';

export default async function Home() {
  const facts = await fetchFacts();
  return (
    <main className="p-24">
      <div className="flex flex-col items-center justify-between gap-8">
        <h1 className="text-3xl">Cats facts</h1>
        <ul className="space-y-4">
          {facts.map((fact, index) => {
            return (
              <li
                key={index}
                className="border p-3 text-sm rounded border-gray-600 "
              >
                <Link href="/fact">{fact.fact}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
