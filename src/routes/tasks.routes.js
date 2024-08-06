const router = require("express").Router();

const {
  crearTarea,
  obtenerTareas,
  obtenerTareaId,
  editarTarea,
  eliminarTarea,
} = require("../controllers/tasks.controllers");

router.post("/tasks", crearTarea);

router.get("/tasks", obtenerTareas);

router.get("/task/:id", obtenerTareaId);

router.put("/task/:id", editarTarea);

router.delete("/task/:id", eliminarTarea);

module.exports = router;
