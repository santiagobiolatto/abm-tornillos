const express = require("express");
const router = express.Router();
const { Tornillo } = require("../models/tornillo");

//Obtener todos los tornillos
router.get("/", async (req, res) => {
  const tornillo = await Tornillo.find();
  res.render("index", {
    tornillo,
  });
});

//Añadir tornillo
router.get("/agregar", async (req, res) => {
  res.render("agregar");
});
router.post("/agregar", async (req, res) => {
  const tornillo = new Tornillo(req.body);
  await tornillo.save();
  res.redirect("/");
});

//Editar tornillo
router.get("/editar/:id", async (req, res) => {
  const tornillo = await Tornillo.findById(req.params.id);
  res.render("editar", {
    tornillo,
  });
});
router.post("/editar/:id", async (req, res) => {
  await Tornillo.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
});

//Eliminar tornillo
router.get("/delete/:id", async (req, res) => {
  await Tornillo.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
