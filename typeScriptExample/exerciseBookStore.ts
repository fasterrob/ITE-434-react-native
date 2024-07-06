interface Book {
  title: string;
  genre: "fiction" | "non-fiction" | "educational";
  price: number;
}

const books: Book[] = [
  { title: "The Great Gatsby", genre: "fiction", price: 320 },
  { title: "War and Peace", genre: "fiction", price: 250 },
  { title: "Economics 101", genre: "educational", price: 480 },
  { title: "In Cold Blood", genre: "non-fiction", price: 300 },
  { title: "The Catcher in the Rye", genre: "fiction", price: 400 },
];

function filterGenreAndPrice(
  books: Book[],
  genrefilter: string,
  pricefilter: number
): Book[] {
  return books.filter((e) => e.genre === genrefilter && e.price > pricefilter);
}

function discountBook(books: Book[]): Book[] {
  return books.map((e) => ({ ...e, price: e.price * 0.9 }));
}

let filterBook = filterGenreAndPrice(books, "fiction", 300);

let discont = discountBook(filterBook);

console.log(discont);
