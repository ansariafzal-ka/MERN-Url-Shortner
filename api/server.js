require("dotenv").config();

const express = require("express");
const app = express();

const connectDb = require("./src/config/database");
connectDb();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const shortUrlRouter = require("./src/routes/shortUrl.routes");
app.use("/api/v1/shortUrl", shortUrlRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
