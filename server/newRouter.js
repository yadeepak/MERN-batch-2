const Express = require("express");
const BirdsRouter = Express.Router();

BirdsRouter.get("/birds", function (req, res) {
  res.send("Birds home page");
});

module.exports = BirdsRouter;
