const express = require('express')
const { BookModel } = require('../models/book.model')

const booksrouter = express.Router()

booksrouter.get('/', async (req, res) => {
    let books = await BookModel.find()
    return res.send(books)
})
booksrouter.post('/', async (req, res) => {
    const { title, author, genre, description, price } = req.body

    try {
        let newBook = new BookModel({ title, author, genre, description, price });
        await newBook.save()
        return res.status(200).send({ msg: "New book has been added to library!" })
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: "Something went wrong!" })
    }
})
booksrouter.delete('/:id', async (req, res) => {
    let id = req.params.id;

    try {
        await BookModel.findByIdAndDelete({ _id: id })
        return res.status(200).send({ msg: "book has been deleted from library!" })
    } catch (error) {
        console.log(error)
        return res.status(400).send({ msg: "Something went wrong!" })
    }
})

module.exports = booksrouter