let categories = require("./../model/Category");
let sequelizeInstance = require("./../config/db.config");
let createTable = async () => {
  await sequelizeInstance.sync();
  console.log("Table is created successfully");
};
let insertCategories = async () => {
  await categories.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobile",
    },
    {
      name: "Electronics",
    },
    {
      name: "Appications",
    },
  ]);
};
let getAllCategories = async(req, res, next) => {
  res.write("this is the category page");
  res.end();
};
let getCategoryById = (req, res, next) => {
  res.write("this is for " + req.params.categoriesId);
  res.end();
};
//createTable();
//insertCategories();
module.exports = { getAllCategories, getCategoryById };
