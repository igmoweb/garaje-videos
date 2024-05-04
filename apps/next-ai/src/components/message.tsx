import { SparklesIcon, UserIcon } from '@heroicons/react/24/solid';
import Markdown from 'marked-react';

export function Message({
  message,
}: {
  message: {
    role: 'user' | 'ai';
    content: string;
  };
}) {
  return (
    <div className="flex gap-3 my-4 text-gray-600 text-xs flex-1 border-b-1">
      <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
        <div className="rounded-full bg-gray-100 border p-2">
          {message.role === 'user' ? (
            <UserIcon className="size-4" />
          ) : (
            <SparklesIcon className="size-4" />
          )}
        </div>
      </span>
      <p className="leading-relaxed">
        <span className="block font-bold text-gray-700">
          {message.role === 'user' ? 'User' : 'AI'}
        </span>
        <Markdown>{message.content}</Markdown>
      </p>
    </div>
  );
}
