const express = require("express");
const cors = require("cors");
const connectDb = require("./Config/dbConnection");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const userRoutes = require("./routes/UserRoutes");

connectDb();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log("Running on " + PORT);
});
app.use(cors());
