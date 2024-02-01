export default function FullScreenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-black bg-opacity-70 p-10 absolute top-0 bottom-0 left-0 right-0">
      <div className="bg-white">
        <div className="mx-auto max-w-xl">
          <div className=" px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
