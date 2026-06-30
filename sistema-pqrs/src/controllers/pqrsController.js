const model = require("../models/pqrsModel");
exports.obtenerPQRS = (req, res) => {    res.status(200).json(model.obtenerTodas());};
exports.obtenerPQRSId = (req, res) => {    res.status(200).json(model.obtenerPorId(req.params.id));};
exports.crearPQRS = (req, res) => {    res.status(201).json(model.crear());};
exports.actualizarPQRS = (req, res) => {    res.status(200).json(model.actualizar(req.params.id));};
exports.eliminarPQRS = (req, res) => {    res.status(200).json(model.eliminar(req.params.id));};