import { body, param } from "express-validator";

//POST /tasks
export const validateNewTask = [
    body("title").notEmpty().withMessage("El título no puede estar vacío").isLength({ max: 255 }).withMessage("El título no puede tener más de 255 caracteres"),
    body("description").notEmpty().withMessage("La descripción no puede estar vacía"),
    body("isComplete").isBoolean().withMessage("El campo isComplete debe ser un booleano")
]

//GET /task/:id
export const validateTaskId = [
    param("id").isInt().withMessage("El id debe ser un número entero")
]

//PUT /task/:id
export const validateUpdateTask = [
    param("id").isInt().withMessage("El id debe ser un número entero"),
    body("title").notEmpty().withMessage("El título no puede estar vacío").isLength({ max: 255 }).withMessage("El título no puede tener más de 255 caracteres"),
    body("description").notEmpty().withMessage("El título no puede estar vacío"),
    body("isComplete").isBoolean().withMessage("El campo isComplete debe ser un booleano")
]
