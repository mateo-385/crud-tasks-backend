import { validationResult } from "express-validator";

export const applyValidations = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMsg = errors.array().map(error => error.msg)
        return res.status(400).json(errorMsg)
    }
    next()
}