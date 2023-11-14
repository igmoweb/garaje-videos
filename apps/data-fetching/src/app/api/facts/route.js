import { fetchFacts } from '../../../utils/fetch';

export async function GET() {
  const facts = await fetchFacts();
  return Response.json({ facts });
}
