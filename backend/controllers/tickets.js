const Ticket = require("../models/tickets.js");
const User = require("../models/auth.js");
const mongoose = require("mongoose");
const Auth = require("../models/auth.js");
const ObjectId = mongoose.Types.ObjectId;

const createTicket = async (req, res) => {
  try {
    const {
      ProductPrice,
      caunt,
      img,
      title,
      createdAt,
      ticketPrice,
      ticketCount,
    } = req.body;

    await Ticket.create({
      ProductPrice,
      caunt,
      img,
      title,
      createdAt,
      ticketPrice,
      ticketCount,
    });
    res.status(201).json({
      status: "OK",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();

    if (!tickets) {
      return res.status(500).json({ message: "Bilet yoxdur" });
    }

    return res.status(200).json({ tickets });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const buyTicket = async (req, res) => {
  try {
    const { count, id, email } = req.body;
    const user = await User.findOne({ email });
    const ticket = await Ticket.findOne({ _id: id });

    if (!user) {
      return res.status(500).json({ message: "Belə bir istifadəçi yoxdur" });
    }
    if (user.wallet <= 0) {
      return res.status(500).json({
        message:
          "Balansınızda yetərli deyil. Zəhmət olmasa balansınızı artırın",
      });
    }
    if (!ticket) {
      return res.status(500).json({ message: "Belə bir bilet yoxdur" });
    }
    if (count > ticket.ticketCount - ticket.soldTicketCount) {
      return res.status(500).json({ ticket, message: "Bu qədər bilet yoxdur" });
    }
    if (count <= 0) {
      return res.status(500).json({ message: "dur yer ged burdan" });
    }

    const buyerIndex = ticket.buyers?.findIndex((buyer) => buyer.user == email);

    if (buyerIndex === -1) {
      const newBuyer = {
        user: email,
        count,
      };
      ticket.buyers.push(newBuyer);
      ticket.soldTicketCount += count;
      await ticket.save();
    } else {
      ticket.buyers[buyerIndex].count += count;
      ticket.soldTicketCount += count;
      await ticket.save();
    }

    res.json({ ticket });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSoldTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    const email = req.params.email;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(500).json({ message: "Belə bir istifadəçi yoxdur" });
    }
    if (!tickets) {
      return res.status(500).json({ message: "Bilet yoxdur" });
    }

    const buyerTickets = tickets.filter((ticket) => {
      for (const buyer of ticket.buyers) {
        if (buyer.user === email) {
          return true;
        }
      }
      return false;
    });

    return res.status(200).json({ buyerTickets });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createTicket, getAllTickets, buyTicket, getSoldTickets };
