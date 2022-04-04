const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
mongoose
  .connect("mongodb://localhost:27017/ATLP-learn-express", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express(); /* 
  A new express instance in the app variable. This app variable lets us do everything we need to configure our REST API, like registering our routes, installing necessary middlewares */
    app.use(express.json());
    app.use("/api", routes);
    app.listen(5000, () => {
      console.log("Server has started!");
    });
  });
