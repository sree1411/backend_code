const mongoose = require("mongoose");

const firmSchema = new mongoose.Schema({
  firmname: {
    type: String,
    required: true,
  },
  area: {
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

  region: {
    type: [
      {
        type: String,
        enum: ["south-indian", "north-indian"],
      },
    ],
  },
  offer: {
    type: String,
  },
  image: {
    type: String,
  },

  vendor: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },
  ],
  product: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Firm = mongoose.model("firm", firmSchema);

module.exports = Firm;
