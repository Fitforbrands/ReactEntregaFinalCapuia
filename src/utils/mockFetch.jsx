const products = [
  {
    id: 1,
    name: "Cafe",
    category: "cafe",
    price: 1000,
    stock: 500,
    description: "Cafe expreso Cafe expreso",
    imgUrl:
      "https://img.freepik.com/vector-gratis/espuma-amor-cafe-frijoles-icono-dibujos-animados-ilustracion_138676-2575.jpg?w=500",
  },
  {
    id: 2,
    name: "Te",
    category: "cafe",
    price: 1000,
    stock: 500,
    description: "Te verde Te verde Te verde",
    imgUrl:
      "https://img.freepik.com/vector-premium/taza-cafe-platillo-palabra-cafe_838811-45.jpg",
  },
  {
    id: 3,
    name: "Medialuna",
    category: "cafe",
    price: 500,
    stock: 500,
    description: "Medialunas de manteca",
    imgUrl:
      "https://img.freepik.com/vector-gratis/espuma-amor-cafe-frijoles-icono-dibujos-animados-ilustracion_138676-2575.jpg?w=500",
  },
  {
    id: 4,
    name: "Tostado",
    category: "almuerzo",
    price: 2200,
    stock: 500,
    description: "Tostado de jamon y queso",
    imgUrl:
      "https://img.freepik.com/vector-premium/taza-cafe-platillo-palabra-cafe_838811-45.jpg",
  },
  {
    id: 5,
    name: "Coca Cola",
    category: "bebidas",
    price: 1500,
    stock: 500,
    description: "Cafe expreso doble",
    imgUrl:
      "https://img.freepik.com/vector-gratis/espuma-amor-cafe-frijoles-icono-dibujos-animados-ilustracion_138676-2575.jpg?w=500",
  },
];

export const mFetch = (pid) =>
  new Promise((res, rej) => {
    // const condition = true;
    // if (pid) {
    setTimeout(() => {
      res(pid ? products.find((product) => product.id === pid) : products);
    }, 1000);
    // } else {

    // }
  });
