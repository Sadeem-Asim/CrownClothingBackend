const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://cdnjs.cloudflare.com"
  );
  next();
});
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

process.on("uncaughtException", (err) => {
  console.log("Error 💥", err.name, err.message, err.stack);
});
// Connecting Database
mongoose
  .connect(
    "mongodb+srv://quizcashapp:quizcashapp@quizcashapp.lqu9f.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connection Successful");
  });

// Router

app.all("*", (req, res) => {
  res.json({ message: "No Route found for this url" });
});

// App Server
app.listen(port, () => {
  console.log(`app is running on server ${port}`);
});
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection");
  console.log("Error 💥", err.name, err.message);
});
