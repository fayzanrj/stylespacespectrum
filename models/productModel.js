const { Schema, models, model } = require("mongoose");

const ProductSchema = new Schema({
  productId: {
    type: "String",
    required: true,
    unique : true
  },
  productCategory : {
    type: "String",
    required: true,
  },
  productName: {
    type: "String",
    required: true,
  },
  productDesc: {
    type: "String",
    required: true,
  },
  productPrice : {
    type : "Number",
    required : true,
  },
  productVariants : {
    type : "String",
    required : true,
  },
  productImg: {
    type: "string",
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
},{timestamps : true});

const Product = models.Product || model("Product", ProductSchema);

export default Product
