const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A authors name is required"],
    minlength: [3, "The author's name must be at least 3 characters"],
  },
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
