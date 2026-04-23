const bookModel = require("../models/bookModel")

const getALLbooks = (req, res) => {
    const books = bookModel.findALL()

    return res.send(books)
}

const createBook = (req, res) => {
    const name = req.body.name
    const author = req.body.author
    const publication_date = req.body.publication_date

    const newBook = {
        id: Date.now(),
        name: name,
        author: author,
        publication_date: publication_date
    }
    const createdBook = bookModel.create(newBook)

    res.status(201).json(createdBook)
}

const getBookByID = (req, res) => {
    const id = req.params.id

    const book = bookModel.findByID(id)

    if(!book) {
        return res.status(404).json({
            message: "Livro não encontrado."
        })
    }

    return res.json(book)
}

const updateBook = (req, res) => {
    const {id} = req.params

    const {
        name,
        author,
        publication_date
    } = req.body

    const bookToUpdate = {
        name: name,
        author: author,
        publication_date: publication_date
    }

    const updatedBook = bookModel.update(id, bookToUpdate)

    if(!updatedBook) {
        return res.status(404).json({
            message: "Livro não encontrado."
        })
    }

    return res.json(updatedBook)
}

const deleteBook = (req, res) => {
    const id = Number(req.params.id)
    
    const book = bookModel.remove(id)

    if(!book) {
        return res.status(404).json({
            message: "Livro não encontrado."
        })
    }

    return res.json(book)
} 

module.exports = {
    getALLbooks,
    createBook,
    getBookByID,
    updateBook,
    deleteBook
}