const orm = require("../config/orm.js");

const burger = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);

    });
  },
  create: function (vals, cb) {
    orm.create("burgers", ["burger_name", "devoured"], vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
