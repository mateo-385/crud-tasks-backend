//Importacion de modulos
const express = require("express")

//Configuraciones
const app = express()
const PORT = 3000

//Middleware
app.use(express.json())

//Rutas
app.get("/", (req, res) => {
    res.send("Servidor funcionando")
})

app.use(require("./routes/tasks.routes"))

app.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`))