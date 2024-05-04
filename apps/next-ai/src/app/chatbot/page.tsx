'use client';
import { Message } from '../../components/message.tsx';

export default function Chatbot() {
  const messages = [
    {
      id: 1,
      role: 'user',
      content: 'Hola, qué tal',
    },
    {
      id: 2,
      role: 'assistant',
      content: 'Buenos días',
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-1.5 pb-6">
        <h1 className="font-semibold text-lg tracking-tight">Chatbot</h1>
      </div>

      <div className="table max-w-3xl">
        {messages.map((message) => {
          return <Message key={message.id} message={message} />;
        })}
      </div>

      <form className="fixed right-0 left-0 bg-gray-800 bottom-0 p-6">
        <input
          type="text"
          className="text-black text-xs border border-gray-300 rounded w-full p-1"
          placeholder="Pregunta lo que quieras..."
        />
      </form>
    </>
  );
}
