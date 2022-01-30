var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const schema = new Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    bookAuthor: {
      type: String,
      required: true,
    },
    bookDetails: {
      type: String,
      required: true,
    },
    image: String,
  },
  { strict: true }
);

const BookModel = new Model("Book", schema);
module.exports = BookModel;
