type Product = {
  name: string;
  price: number;
  category: string;
};

let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Apparel" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];

function filterProductByPrice(
  products: Product[],
  filterPrice: number
): Product[] {
  return products.filter((e) => e.price > filterPrice);
}

function discountProduct(products: Product[]): Product[] {
  return products.map((e) => ({ ...e, price: e.price * 0.9 }));
}

let filterProduct = filterProductByPrice(products, 2500);

let discountProducts = discountProduct(filterProduct);

console.log(discountProducts);
