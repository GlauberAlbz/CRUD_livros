const books = require("../data/books")

const findALL = () => {
    return books
}

const create = (newBook) => {
    books.push(newBook)

    return newBook
}

const findByID = (id) => {
    return books.find(book => book.id == id)
}

const update = (id, newBook) => {
    const book = books.find(book => book.id == id)

    if(!book) {
        return undefined
    }

    if(newBook.name) {
        book.name = newBook.name
    }

    if(newBook.author) {
        book.author = newBook.author
    }

    if(newBook.publication_date) {
        book.publication_date = newBook.publication_date
    }

    return book
}

const remove = (id) => {
    const index = books.findIndex(book => book.id === id)

    const book = books[index]

    if(!book) {
        return undefined
    }

    books.splice(index, 1)

    return book
}

module.exports = {
    findALL,
    create,
    findByID,
    update,
    remove
}