const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/abm-tornillos", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB`);
  });
