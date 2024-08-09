//Importacion de modulos
import express, { json } from "express"

import { router } from "./routes/tasks.routes.js"

//Configuraciones
const app = express()
const PORT = 3000

//Middleware
app.use(json())

//Rutas
app.get("/", (req, res) => {
    res.send("Servidor funcionando")
})

app.use("/", router)

app.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`))