import Replicate from 'replicate';
import * as repl from 'repl';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function POST(req) {
  const { prompt } = await req.json();

  const input = {
    output_quality: 90,
    prompt,
  };

  let prediction = await replicate.predictions.create({
    version: '4acb778eb059772225ec213948f0660867b2e03f277448f18cf1800b96a65a1a',
    input,
  });

  while (prediction.status !== 'succeeded') {
    await sleep(500);
    prediction = await replicate.predictions.get(prediction.id);
    console.log({ prediction });
  }

  return Response.json(prediction);
}
