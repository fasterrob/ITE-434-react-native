enum ProductStatus {
  Available = "Avaliable",
  OutOfStock = "Out of Stock",
  Discontinued = "Discontinued",
}

let Products: any[] = [
  { name: "Laptop", status: ProductStatus.Available, price: 1200 },
  { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
  { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];

function displayProductDetails(product: any[]) {
  product.forEach((e) => {
    console.log(`Product: ${e.name}, Status: ${e.status}, Price: ${e.price} `);
  });
}

displayProductDetails(Products);
