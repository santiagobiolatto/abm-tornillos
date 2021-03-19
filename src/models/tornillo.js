const mongoose = require("mongoose");

const tornilloSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  diametro: {
    type: Number,
    required: true,
  },
  longitud: {
    type: Number,
    required: true,
  },
  rosca: {
    type: String,
    required: true,
  },
  cabeza: {
    type: String,
    required: true,
  },
  claseCabeza: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
});

const Tornillo = mongoose.model("Tornillo", tornilloSchema);

module.exports.tornilloSchema = tornilloSchema;
module.exports.Tornillo = Tornillo;
