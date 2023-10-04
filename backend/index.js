const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/database.js");
const auth = require("./routes/auth.js");
const ticket = require("./routes/tickets.js");


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.disable("x-powered-by");
app.use("/auth", auth);
app.use("/ticket", ticket);

db();

app.get("/", (req, res) => {
  res.json({ message: "salam men isleyirem" });
});

app.listen(process.env.PORT || 5000, () =>
  console.log("server is running port:3000")
);
