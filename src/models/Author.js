import mongoose from "mongoose"

const authorSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        name: {type: mongoose.Schema.Types.String, require: true},
        nationality: {type: mongoose.Schema.Types.String}
    }, { versionKey: false }
);

const author = mongoose.model("authors", authorSchema);

export {author, authorSchema};