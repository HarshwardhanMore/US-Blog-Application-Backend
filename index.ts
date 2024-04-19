const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/index");
const configFile = require("./config");

// const dotenv = require("dotenv");
// dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.use("/api", router);

app.get("/api", (req: any, res: any) => {
  res.send("Backend Is Working!");
});

app.listen(configFile.PORT, () => {
  console.log("listening on port " + configFile.PORT);
});
