const { connectDB } = require("../db/database");

const ctrl = {};

ctrl.obtenerTareas = async (req, res) => {
    try {
        const connection = await connectDB();
        const [results] = await connection.query("SELECT * FROM task");
        return res.status(200).json(results);
    } catch (error) {
        return res.status(500).send("Error al obtener las tareas");
    }
};

ctrl.crearTarea = async (req, res) => {
    const { title, description, isComplete } = req.body;
    //Controles
    if (!title.trim() || !description.trim() || title.length > 255 || typeof isComplete !== "boolean") {
        let msg = "El título y la descripción no pueden estar vacíos.";
        if (typeof isComplete !== "boolean") {
            msg = "Tipo de dato incorrecto"
        }
        if (title.length > 255) {
            msg = "El título no puede tener más de 255 caracteres";
        }
        return res.status(400).send(msg);
    }
    try {
        const connection = await connectDB();
        await connection.query(
            "INSERT INTO task (title,description, isComplete) VALUES (?,?,?)",
            [title, description, isComplete]
        );
        return res.status(201).send("Tarea creada correctamente");
    } catch (error) {
        return res.status(500).send("Error al crear la tarea");
    }
};

ctrl.obtenerTareaId = async (req, res) => {
    const id = req.params.id;
    try {
        const connection = await connectDB();
        const [results] = await connection.query(
            "SELECT * FROM task WHERE id = ?",
            id
        );
        if (results.length === 0) {
            return res.status(404).send("Tarea no encontrada");
        }
        return res.status(200).json(results[0]);
    } catch (error) {
        return res.status(500).send("Error al obtener tarea");
    }
};

ctrl.editarTarea = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    try {
        const connection = await connectDB();
        const [result] = await connection.query(
            "UPDATE task SET title = ?, description = ? WHERE id = ?",
            [title, description, id]
        );
        //Si ningún registro fue afectado, la tarea no existe 
        if (result.affectedRows === 0) {
            return res.status(404).send("Tarea no encontrada");
        }
        return res.status(200).send("Tarea editada correctamente");
    } catch (error) {
        return res.status(500).send("Error al editar tarea");
    }
};

ctrl.eliminarTarea = async (req, res) => {
    const id = req.params.id;
    try {
        const connection = await connectDB();
        const [result] = await connection.query(
            "DELETE FROM task WHERE id = ?",
            id
        );
        //Si ningún registro fue afectado, la tarea no existe 
        if (result.affectedRows === 0) {
            return res.status(404).send("Tarea no encontrada");
        }
        return res.status(200).send("Tarea eliminada correctamente");
    } catch (error) {
        return res.status(500).send("Error al eliminar tarea");
    }
};

module.exports = ctrl;
