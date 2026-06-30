const express = require("express");

const router = express.Router();

const controller = require("../controllers/pqrsController");

router.get("/", controller.obtenerPQRS);
router.get("/:id", controller.obtenerPQRSId);
router.post("/", controller.crearPQRS);
router.put("/:id", controller.actualizarPQRS);
router.delete("/:id", controller.eliminarPQRS);

module.exports = router;