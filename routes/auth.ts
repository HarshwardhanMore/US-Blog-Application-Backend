const authRouter = require("express").Router();
const authController = require("../controllers/authController");
const authenticateUsers = require("../middlewares/auth");

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);

authRouter.get("/getAllUsers", authenticateUsers, authController.getAllUsers);
authRouter.get(
  "/getAllUsersDetails",
  authenticateUsers,
  authController.getAllUsersDetails
);
authRouter.get(
  "/getUsersDetailsById",
  authenticateUsers,
  authController.getUsersDetailsById
);
authRouter.get(
  "/getUsersDetailsByEmail",
  authenticateUsers,
  authController.getUsersDetailsByEmail
);
authRouter.get("/getMyDetails", authenticateUsers, authController.getMyDetails);

module.exports = authRouter;
