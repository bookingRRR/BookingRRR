const router = require('express').Router();
const Book = require('../models/books');

router.get('/getBooks', async (req, res) => {
    try{
        console.log("getBooksCalled route called")
        let title = req.query.title;
        let author = req.query.author;
        const titleRegex = new RegExp(`.*${title}.*`, 'i');
        const authorRegex = new RegExp(`.*${author}.*`, 'i');
        let books = await Book.find({title:titleRegex, author:authorRegex})
        return res.status(200).json({books: books})
    }catch(err){
        console.log(err)
        return res.status(500).json({error: err.message});
    }
})
router.get('/getBooksEmail', async (req, res) => {
    try{
        console.log("getBooksEmail route called")
        let books = await Book.find({email:req.query.email})
        console.log("BOOKs ", books)
        return res.status(200).json({books: books})
    }catch(err){
        console.log(err)
        return res.status(500).json({error: err.message});
    }
})
router.post('/addBook', async (req, res) => {
    try{
        console.log("addBook route called")
        let body = req.body;
        const book = new Book({
            title: body.title,
            author: body.author,
            edition: body.edition,
            condition: body.condition,
            email: body.email
        })
        await book.save()
        return res.status(200).json({message: "Book added successfully"})
    }catch(err){
        console.log(err)
        return res.status(500).json({error: err.message});
    }
})
router.delete('/deleteBookById', async (req, res) => {
    try{
        console.log("deleteBookById route called")
        let id = req.query.id;
        await Book.findByIdAndDelete(id)
        return res.status(200).json({message: "Book deleted successfully"})
    }catch(err){
        console.log(err)
        return res.status(500).json({error: err.message});
    }
})

module.exports = router;