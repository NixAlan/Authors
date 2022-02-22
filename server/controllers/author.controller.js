const Author = require("../models/authors.model");

module.exports = {
  findAllAuthors: (req, res) => {
    Author.find()
      .then((allAuthors) => {
        console.log(allAuthors);
        res.json(allAuthors);
      })
      .catch((err) => {
        console.log("Find All Authors Failed");
        res
          .status(400)
          .json({ message: "Find All Authors Failed", error: err });
      });
  },

  createNewAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthors) => {
        console.log(newAuthors);
        res.json(newAuthors);
      })
      .catch((err) => {
        console.log("Create Author Failed");
        res.status(400).json({ message: "Create Author Failed", error: err });
      });
  },

  findOneAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((oneAuthor) => {
        console.log(oneAuthor);
        res.json(oneAuthor);
      })
      .catch((err) => {
        console.log("Find one Author Failed");
        res.status(400).json({ message: "Find one Author Failed", error: err });
      });
  },

  deleteOneAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((deleteOneAuthor) => {
        console.log(deleteOneAuthor);
        res.json(deleteOneAuthor);
      })
      .catch((err) => {
        console.log("Delete one Author Failed");
        res
          .status(400)
          .json({ message: "Delete one Author Failed", error: err });
      });
  },

  updateOneAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateOneAuthor) => {
        console.log(updateOneAuthor);
        res.json(updateOneAuthor);
      })
      .catch((err) => {
        console.log("update one Author Failed");
        res
          .status(400)
          .json({ message: "update one Author Failed", error: err });
      });
  },
};
