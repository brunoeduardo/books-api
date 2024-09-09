import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: mongoose.Schema.Types.String, require: true},
    publisher: {type: mongoose.Schema.Types.String},
    price: {type: mongoose.Schema.Types.Number},
    pages: {type: mongoose.Schema.Types.Number},
    author: authorSchema
}, {versionKey: false});

const book = mongoose.model("books", bookSchema);

export default book;