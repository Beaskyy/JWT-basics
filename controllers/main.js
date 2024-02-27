const jwt = require("jsonwebtoken")

const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  // mongoose validation
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError("Please provide email and password");
  }

  const id = new Date().getDate()

  // try to keep payload small, better experience for user
  const token = jwt.sign({id, username}, process.env.JWT_SECRET)

  

  res.status(200).json({msg: "user created", token})
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John Doe`,
    secret: `Here is your authorized data, your number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
