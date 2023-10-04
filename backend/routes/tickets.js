const express = require("express");
const {
  createTicket,
  getAllTickets,
  buyTicket,
  getSoldTickets
} = require("../controllers/tickets.js");

const router = express.Router();


router.post("/createTicket", createTicket);
router.get("/getAllTickets", getAllTickets);
router.get("/getSoldTickets/:email", getSoldTickets);
router.put("/buyTicket", buyTicket);



module.exports = router;
