const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  ProductPrice: {
    type: String,
    required: true,
    trim: true,
  },
  count: {
    type: Number,
    required: true,
    default: 1,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  ticketCount: {
    type: Number,
    required: true,
  },
  soldTicketCount: {
    type: Number,
    default: 0,
  },
  buyers: [
    {
      user: {
        type: String,
      },
      count: {
        type: Number,
      },
    },
  ],
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
