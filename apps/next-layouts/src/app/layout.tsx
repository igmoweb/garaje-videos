import type { Metadata } from 'next';
import './globals.css';
import NavBar from '../components/NavBar';
import ProductsList from '../components/ProductsList';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const isLoggedIn = async () => {
  return new Promise((resolve) => setTimeout(resolve, 1000, true));
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isUserLoggedIn = await isLoggedIn();
  return (
    <html lang="en">
      <body>
        <div className="bg-white">
          <NavBar showProfile={isUserLoggedIn} />
          <main className="mx-auto max-w-xl">
            <div className=" px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
