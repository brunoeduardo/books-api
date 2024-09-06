import book from "../models/Book.js"

class BookController {
    static async booksList (req, res) {
        try {
            const listBooks = await book.find({});
            res.status(200).json(listBooks);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - failure books list`});            
        }
    }

    static async bookById (req, res) {
        try {
            const bookIndex = await book.findById({_id: req.params.id});
            res.status(200).json(bookIndex);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - failure get book by id`});            
        }
    }

    static async registerBook (req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).send({ message: "Book registered successfully", book: newBook});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - registration failure`});
        }
    }

    static async bookUpdate (req, res) {
        try {
            const updatedBook = await book.updateOne({_id: req.params.id}, { title: req.body.title});
            res.status(200).send({message: "Book updated successfully", book: updatedBook});
        } catch (error) {
            res.status(500).json({message: `${erro.message} -  failure book update`});
        }
    }

    static async bookDelete (req, res) {
        try {
            await book.deleteOne({_id: req.params.id});
            res.status(200).send({message: "Book deleted successfully"});
        } catch (error) {
            res.status(500).json({message: `${erro.message} -  failure delete book`});
        }
    }
}

export default BookController;
