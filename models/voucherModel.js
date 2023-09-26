const { Schema, models, model } = require("mongoose");

const VoucherSchema = new Schema({
  voucherCode: {
    type: "String",
    required: true,
    unique : true
  },
  desc : {
    type : "String",
    required : true
  },
  quantity: {
    type: "Number",
    required: true,
  },
  discount: {
    type: "Number",
    required: true,
  },
},{timestamps : true});

const Voucher = models.Voucher || model("Voucher", VoucherSchema);

export default Voucher
