const express = require("express");
const connectionDB = require("./db/connection");
const authRoutes = require("./routes/auth");
const products = require("./routes/products");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/products", products);

app.listen(5000, () => {
  connectionDB();
  console.log("Server is running on port 5000");
});
