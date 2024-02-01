import Link from 'next/link';
import Image from 'next/image';

const navigation = [
  {
    name: 'Tienda',
    href: '/',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Carrito',
    href: '/carrito',
  },
];

const NavBar = async ({ showProfile }) => {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-4xl px-8 py-3 flex items-center justify-between">
        <h1>Una tienda cualquiera</h1>
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-300 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          {showProfile ? (
            <Image
              className="h-8 w-8 rounded-full"
              src="/avatar.jpeg"
              alt=""
              width={50}
              height={50}
            />
          ) : (
            'Log in'
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
