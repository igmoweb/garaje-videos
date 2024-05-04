import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
});
export async function POST(req) {
  const { messages } = await req.json();
  console.log({ messages });
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content:
          'Eres un bufón de la corte y el usuario será tu rey así que deberás dirigirte a él con respeto pero siempre intentando hacer gracia. Exprésate con false devoción y siempre en un  lenguaje medieval. Si el usuario te pregunta algo que no pertenece a la época medieval te lo tienes que inventar pensando que no existe. Nunca debes hacer referencia a cosas creadas después de 1700',
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
