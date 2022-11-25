let express = require("express");
let router = express.Router();
router.get("/", (req, res, next) => {
  res.write("this is the base page");
  res.end();
});
router.get("/categories", (req, res, next) => {
  res.write("this is the category page");
  res.end();
});
router.get("/categories/:categoriesId", (req, res, next) => {
  res.write("this is for " + req.params.categoriesId);
  res.end();
});
router.get("/products", (req, res, next) => {
  res.write("this is the products page");
  res.end();
});
router.get("/products/:productId", (req, res, next) => {
  res.write("this is for " + req.params.productId);
  res.end();
});
module.exports = router;
