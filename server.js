const express = require("express");
const mongoose = require("mongoose");

const htmlRoutes = require('./routes/html_routes')
const apiRoutes = require('./routes/api_routes')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/murmuring-anchorage-95322", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// routes
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
