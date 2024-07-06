var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Avaliable";
    ProductStatus["OutOfStock"] = "Out of Stock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
var Products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
Products.forEach(function (e) {
    console.log("Product: ".concat(e.name, ", Status: ").concat(e.status, ", Price: ").concat(e.price, " "));
});
