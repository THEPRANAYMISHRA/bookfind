const connection = require('./db');
const booksrouter = require('./routes/book.routes');
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.use('/book', booksrouter)

app.listen(4500, async () => {
    try {
        connection;
        console.log('connection successful!')
    } catch (error) {
        console.log(error)
    }
    console.log("Server running at 4500")
})