var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
function filterProductByPrice(products, filterPrice) {
    return products.filter(function (e) { return e.price > filterPrice; });
}
function discountProduct(products) {
    return products.map(function (e) { return (__assign(__assign({}, e), { price: e.price * 0.9 })); });
}
var filterProduct = filterProductByPrice(products, 2500);
var discountProducts = discountProduct(filterProduct);
console.log(discountProducts);
