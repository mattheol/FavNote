const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const morgan = require("morgan");
const cors = require("cors");
const LocalStrategy = require("passport-local").Strategy;
const routes = require("./routes");
const User = require("./models/User");
require("dotenv/config");

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(morgan("combined"));
app.use(cors());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(
  session({
    secret: "matiol",
    resave: false,
    saveUninitialized: true
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to db");
});

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
