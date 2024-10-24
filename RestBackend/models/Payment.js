const mongoose = require("mongoose");

const Payment = new mongoose.Schema({
  cart: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  address: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const CartPayment = mongoose.model("CartBill", Payment);

module.exports = CartPayment;
