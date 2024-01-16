//setup model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String,},
    author: {type: String},
    edition: {type: String},
    condition: {type: String},
    email: {type: String},
})

const Book = mongoose.model('book_schema', bookSchema);
module.exports = Book;