const mongoose = require("mongoose");

const dbName = "authorsDB";

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`you are connected to the database ${dbName}`);
  })
  .catch((err) => {
    console.log(`you are not connected to the database ${dbName}`, err);
  });
