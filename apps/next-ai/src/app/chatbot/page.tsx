'use client';
import { useChat } from 'ai/react';
import { Message } from '../../components/message.tsx';

export default function Chatbot() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
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
        onSubmit={handleSubmit}
        className="fixed right-0 left-0 bg-gray-800 bottom-0 p-6"
      >
        <input
          type="text"
          className="text-black text-xs border border-gray-300 rounded w-full p-1"
          value={input}
          onChange={handleInputChange}
          placeholder="Pregunta lo que quieras..."
        />
      </form>
    </>
  );
}
