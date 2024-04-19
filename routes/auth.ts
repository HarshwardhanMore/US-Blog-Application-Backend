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
authRouter.post(
  "/getUsersDetailsById",
  authenticateUsers,
  authController.getUsersDetailsById
);
authRouter.post(
  "/getUsersDetailsByEmail",
  authenticateUsers,
  authController.getUsersDetailsByEmail
);
authRouter.get("/getMyDetails", authenticateUsers, authController.getMyDetails);
authRouter.get("/getMyActivity", authenticateUsers, authController.getMyActivity);

module.exports = authRouter;
