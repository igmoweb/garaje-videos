import { fetchFact } from '../../../utils/fetch';

export default async function ({ factId }) {
  const fact = await fetchFact(factId);
  return <p className="text-lg font-mono">{fact.fact}</p>;
}
