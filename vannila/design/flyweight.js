// The flyweight pattern is a useful way to conserve memory when we’re creating a large number of similar objects.

class Book {
    constructor({ title, author, isbn }) {
        Object.assign(this, { title, author, isbn });
    }
}

const books = new Map();

function createBook({ title, author, isbn }) {
    if (books.has(isbn)) return books.get(isbn);

    const book = new Book({ title, author, isbn });
    books.set(isbn, book);

    return book;
}

const bookList = [];
function addBook({ title, author, isbn }, { availability, sales }) {
    const book = {
        ...createBook({ title, author, isbn }),
        availability,
        sales,
    }

    bookList.push(book);
    return book;
}

addBook({ title: "The Catcher in the Rye", author: "J.D. Salinger", isbn: 9780316769174 }, { availability: 5, sales: 10 });
addBook({ title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", isbn: 9780747532743 }, { availability: 10, sales: 20 });
addBook({ title: "The Hobbit", author: "J.R.R. Tolkien", isbn: 9780544003415 }, { availability: 15, sales: 30 });

console.log({ books, bookList });