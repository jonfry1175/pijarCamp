const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hello World!");
});

const productRoute = require("./productRoutes");
route.use("/products", productRoute);

module.exports = route;
