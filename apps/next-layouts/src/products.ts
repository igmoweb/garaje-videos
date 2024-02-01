export const fetchProducts = async () => {
  return new Promise((resolve) => setTimeout(resolve, 500, products));
};
export const products = [
  {
    id: 1,
    name: 'Café Arábica Premium',
    price: '5€',
    imageSrc: '/row-1-column-1.png',
    sizes: [{ name: 'L', inStock: true }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio provident quod! Ad asperiores cum deleniti doloribus eius enim harum hic illum maxime, non odit omnis possimus, praesentium quam quibusdam.',
    colors: [
      {
        name: 'Black',
        class: 'bg-gray-300',
      },
      { name: 'Blue', class: 'bg-blue-500' },
    ],
  },
  {
    id: 2,
    name: 'Café Robusta',
    price: '4€',
    imageSrc: '/row-1-column-2.png',
    sizes: [{ name: 'L', inStock: true }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio provident quod! Ad asperiores cum deleniti doloribus eius enim harum hic illum maxime, non odit omnis possimus, praesentium quam quibusdam.',
    colors: [
      {
        name: 'Black',
        class: 'bg-gray-300',
      },
      { name: 'Blue', class: 'bg-blue-500' },
    ],
  },
  {
    id: 3,
    name: 'Máquina Espresso Automática',
    price: '250€',
    imageSrc: '/row-1-column-3.png',
    sizes: [{ name: 'L', inStock: true }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio provident quod! Ad asperiores cum deleniti doloribus eius enim harum hic illum maxime, non odit omnis possimus, praesentium quam quibusdam.',
    colors: [
      {
        name: 'Black',
        class: 'bg-gray-300',
      },
      { name: 'Blue', class: 'bg-blue-500' },
    ],
  },
  {
    id: 4,
    name: 'Molinillo de Café',
    price: '30€',
    imageSrc: '/row-2-column-1.png',
    sizes: [{ name: 'L', inStock: true }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio provident quod! Ad asperiores cum deleniti doloribus eius enim harum hic illum maxime, non odit omnis possimus, praesentium quam quibusdam.',
    colors: [
      {
        name: 'Black',
        class: 'bg-gray-300',
      },
      { name: 'Blue', class: 'bg-blue-500' },
    ],
  },
  {
    id: 5,
    name: 'Prensa Francesa',
    price: '20€',
    imageSrc: '/row-2-column-2.png',
    sizes: [{ name: 'L', inStock: true }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio provident quod! Ad asperiores cum deleniti doloribus eius enim harum hic illum maxime, non odit omnis possimus, praesentium quam quibusdam.',
    colors: [
      {
        name: 'Black',
        class: 'bg-gray-300',
      },
      { name: 'Blue', class: 'bg-blue-500' },
    ],
  },
  {
    id: 6,
    name: 'Tazas de Porcelana',
    price: '15€',
    imageSrc: '/row-2-column-3.png',
    sizes: [{ name: 'L', inStock: true }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio provident quod! Ad asperiores cum deleniti doloribus eius enim harum hic illum maxime, non odit omnis possimus, praesentium quam quibusdam.',
    colors: [
      {
        name: 'Black',
        class: 'bg-gray-300',
      },
      { name: 'Blue', class: 'bg-blue-500' },
    ],
  },
  {
    id: 7,
    name: 'Paquete de Filtros de Papel',
    price: '3€',
    imageSrc: '/row-3-column-1.png',
    sizes: [{ name: 'L', inStock: true }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio provident quod! Ad asperiores cum deleniti doloribus eius enim harum hic illum maxime, non odit omnis possimus, praesentium quam quibusdam.',
    colors: [
      {
        name: 'Black',
        class: 'bg-gray-300',
      },
      { name: 'Blue', class: 'bg-blue-500' },
    ],
  },
  {
    id: 8,
    name: 'Jarra para Espumar Leche',
    price: '12€',
    imageSrc: '/row-3-column-2.png',
    sizes: [{ name: 'L', inStock: true }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio provident quod! Ad asperiores cum deleniti doloribus eius enim harum hic illum maxime, non odit omnis possimus, praesentium quam quibusdam.',
    colors: [
      {
        name: 'Black',
        class: 'bg-gray-300',
      },
      { name: 'Blue', class: 'bg-blue-500' },
    ],
  },
  {
    id: 9,
    name: 'Café Descafeinado',
    price: '5€',
    imageSrc: '/row-3-column-3.png',
    sizes: [{ name: 'L', inStock: true }],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio provident quod! Ad asperiores cum deleniti doloribus eius enim harum hic illum maxime, non odit omnis possimus, praesentium quam quibusdam.',
    colors: [
      {
        name: 'Black',
        class: 'bg-gray-300',
      },
      { name: 'Blue', class: 'bg-blue-500' },
    ],
  },
];
