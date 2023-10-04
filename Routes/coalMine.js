const router = require("express").Router();
const coalPush = require("../Models/coalPush");

router.post("/", async (req, res) => {
  try {
    await new coalPush({ ...req.body }).save(); //saving userdata in db
    res.status(201).send({ message: "Coal Stock Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
