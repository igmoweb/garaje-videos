import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req) {
  const res = await req.json();

  const input = {
    output_quality: 100,
    prompt: res.prompt,
  };

  const response = await replicate.predictions.create({
    version: '4acb778eb059772225ec213948f0660867b2e03f277448f18cf1800b96a65a1a',
    input,
  });

  return Response.json(response);
}
