const jwt = require("jsonwebtoken");
const config = require("../config");

// const JWT_SECRET = "us-harshwardhanmore";

const authenticateUser = (req: any, res: any, next: any) => {
  let token = req.header("Authorization") || req.query.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7);
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (ex: any) {
    if (ex.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Access denied. Token expired." });
    } else if (ex.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Access denied. Invalid token." });
    } else {
      return res.status(500).json({ message: "Internal server error." });
    }
  }
};

module.exports = authenticateUser;
