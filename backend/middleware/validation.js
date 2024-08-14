const Joi = require("joi");

function signUpValidation(req, res, next) {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4).max(20),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: "Bad Request", error, success: false });
  }

  next();
}

function loginValidation(req, res, next) {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(4).max(20),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad Request", error });
  }

  next();
}

module.exports = {
  signUpValidation,
  loginValidation,
};
