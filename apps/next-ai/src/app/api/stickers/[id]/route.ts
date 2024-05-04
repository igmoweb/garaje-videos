import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function GET(req, { params: { id } }: { params: { id: string } }) {
  const response = await replicate.predictions.get(id);
  return Response.json(response);
}
