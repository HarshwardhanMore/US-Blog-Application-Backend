const globalRouter = require("express").Router();

globalRouter.use("/auth", require("./auth"));
globalRouter.use("/blog", require("./blog"));

module.exports = globalRouter;
