import { Router } from "express";
const router = Router();

import { crearTarea, obtenerTareas, obtenerTareaId, editarTarea, eliminarTarea } from "../controllers/tasks.controllers.js";

import { validateNewTask, validateUpdateTask, validateTaskId } from "../validations/taskValidations.js";
import { applyValidations } from "../validations/applyValidations.js";

router.post("/tasks", validateNewTask, applyValidations, crearTarea);
router.get("/tasks", obtenerTareas);
router.get("/task/:id", validateTaskId, applyValidations, obtenerTareaId);
router.put("/task/:id", validateUpdateTask, applyValidations, editarTarea);
router.delete("/task/:id", validateTaskId, applyValidations, eliminarTarea);

export { router };
