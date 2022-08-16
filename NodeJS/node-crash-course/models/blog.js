const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true }); // generate timestamps automatically

// Model
const Blog = mongoose.model('Blog', blogSchema);
// the name string is important, it will plural it and look the collection in MongoDB

module.exports = Blog;