const router = require("express").Router();

const {
  crearTarea,
  obtenerTareas,
  obtenerTareaId,
  editarTarea,
  eliminarTarea,
} = require("../controllers/tasks.controllers");

router.post("/tareas", crearTarea);

router.get("/tareas", obtenerTareas);

router.get("/tareas/:id", obtenerTareaId);

router.put("/tareas/:id", editarTarea);

router.delete("/tareas/:id", eliminarTarea);

module.exports = router;
