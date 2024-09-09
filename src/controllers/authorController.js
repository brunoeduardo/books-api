import {author} from "../models/Author.js"

class AuthorController {
    static async authorsList (req, res) {
        try {
            const listAuthors = await author.find();
            res.status(200).json(listAuthors);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - failure authors list`});            
        }
    }

    static async authorById (req, res) {
        try {
            const authorIndex = await author.findById(req.params.id);
            res.status(200).json(authorIndex);
        } catch (error) {
            res.status(500).json({message: `${erro.message} - failure get author by id`});            
        }
    }

    static async registerAuthor (req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).send({ message: "Author registered successfully", Author: newAuthor});
        } catch (error) {
            res.status(500).json({message: `${erro.message} - registration failure`});
        }
    }

    static async authorUpdate (req, res) {
        try {
            await author.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).send({message: "Author updated successfully"});
        } catch (error) {
            res.status(500).json({message: `${erro.message} -  failure author update`});
        }
    }

    static async authorDelete (req, res) {
        try {
            await author.deleteOne(req.params.id);
            res.status(200).send({message: "Author deleted successfully"});
        } catch (error) {
            res.status(500).json({message: `${erro.message} -  failure delete Author`});
        }
    }
}

export default AuthorController;
