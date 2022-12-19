const mongoose = require("mongoose");

const subservice = mongoose.Schema({
  name: {
    type: String,
  },
  parentService: {
    type: String,
  },
});

module.exports = mongoose.model("subservice", subservice);
