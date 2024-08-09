import { Router } from "express";
const router = Router();

import { crearTarea, obtenerTareas, obtenerTareaId, editarTarea, eliminarTarea } from "../controllers/tasks.controllers.js";

router.post("/tasks", crearTarea);

router.get("/tasks", obtenerTareas);

router.get("/task/:id", obtenerTareaId);

router.put("/task/:id", editarTarea);

router.delete("/task/:id", eliminarTarea);

export { router };
