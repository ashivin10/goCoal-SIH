const router = require("express").Router();
const coal = require("../Models/coalPush");

router.get("/", async (req, res) => {
  try {
    const msg = await coal.find();
    msg.map(Stock);

    function Stock(item) {
      ms = item.Stock;
      res.status(201).send(ms);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
