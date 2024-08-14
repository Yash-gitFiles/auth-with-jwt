const jwt = require("jsonwebtoken");

function ensureAuth(req, res, next) {
  const auth = req.headers["authorization"];
  if (!auth) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send({ message: "Invalid token" });
  }
}

module.exports = {
  ensureAuth,
};
