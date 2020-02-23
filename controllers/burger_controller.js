const burger = require("../models/burger.js");
const express = require("express");
const router = express.Router();

// I need to define the routes and get the data using the ORM and giving back to the handlebars

router.get("/", (req, res) => {
  burger.all(burgers => {
    res.render("index", {
      burgers
    });
  });
});


router.post("/burgers", (req, res) => {
  burger.create([
    req.body.burger_name, 0
  ], function (result) {
    res.json({
      id: result.insertId
    });
  });
});

router.put("/burgers/:id", (req, res) => {
  const condition = "id = " + req.params.id;
  const devoured = req.body.devoured
  burger.update({
    devoured
  }, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;





















module.exports = router;
