const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

require("./config/mongoose.config");
require("./routes/author.routes")(app);

app.listen(port, () => console.log(`connected to port ${port}`));
