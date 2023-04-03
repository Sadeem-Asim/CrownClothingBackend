const Shop = require("../models/shopModel");

exports.get = async (req, res) => {
  try {
    const res = await Shop.find();
    console.log(res);

    res.status(200).json({
      res,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      message: "Error Oops",
    });
  }
};

exports.makeNewItem = async (req, res) => {
  try {
    const newItem = await Shop.create(req.body);

    console.log(newItem);

    res.status(201).json({
      newItem,
    });
  } catch (error) {
    res.status(error.statusCode).json({
      message: "Error Oops",
    });
  }
};
