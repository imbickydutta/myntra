const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: false },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: false },
    image: { type: String, required: false },
    discount: { type: Number, required: false },
    sizes: [{ type: Number, required: false }],
    colorIds: [
      { type: mongoose.Schema.Types.ObjectId, ref: "color", required: false },
    ],
    gender: { type: String, required: true },
    tagIds: [
      { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

module.exports = Product;
