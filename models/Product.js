const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  categeory: {
    type: [
      {
        type: String,
        enum: ["veg", "non-veg"],
      },
    ],
  },

 bestseller: {
    type: String,
  },
  description: {
    type: String,
  },

  firm: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "firm",
    },
  ],
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;