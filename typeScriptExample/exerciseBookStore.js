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
var books = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "educational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher in the Rye", genre: "fiction", price: 400 },
];
function filterGenreAndPrice(books, genrefilter, pricefilter) {
    return books.filter(function (e) { return e.genre === genrefilter && e.price > pricefilter; });
}
function discountBook(books) {
    return books.map(function (e) { return (__assign(__assign({}, e), { price: e.price * 0.9 })); });
}
var filterBook = filterGenreAndPrice(books, "fiction", 300);
var discont = discountBook(filterBook);
console.log(discont);
