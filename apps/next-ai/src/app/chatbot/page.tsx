'use client';
import { Message } from '../../components/message.tsx';
import { useChat } from 'ai/react';

export default function Chatbot() {
  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: '/api/chatbot',
  });

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

      <form
        className="fixed right-0 left-0 bg-gray-800 bottom-0 p-6"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="text-black text-xs border border-gray-300 rounded w-full p-1"
          placeholder="Pregunta lo que quieras..."
          onChange={handleInputChange}
          value={input}
        />
      </form>
    </>
  );
}
