import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="space-x-4">
        <Link
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
          href="/chatbot"
        >
          Chatbot
        </Link>
        <Link
          className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-600"
          href="/stickers"
        >
          Stickers
        </Link>
      </div>
    </div>
  );
}
