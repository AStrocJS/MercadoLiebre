const express = require("express")
const path = require("path")
const app = express()

const port = 3030
app.set('views', path.join(__dirname, 'views'));


app.use (express.static(path.resolve(__dirname, "public")))
app.listen(port, () => `Servidor levantado en puerto ${port}`)

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "views", "home.html")))
app.get("/creaTuCuenta", (req, res) => res.sendFile(path.resolve(__dirname, "views", "creaTuCuenta.html")))
app.get("/ayuda", (req, res) => res.sendFile(path.resolve(__dirname, "views", "ayuda.html")))
app.get("/ingresa", (req, res) => res.sendFile(path.resolve(__dirname, "views", "ingresa.html")))
app.get("/misCompras    ", (req, res) => res.sendFile(path.resolve(__dirname, "views", "misCompras.html")))
app.get("/ofertas", (req, res) => res.sendFile(path.resolve(__dirname, "views", "ofertas.html")))
app.get("/tiendasOficiales", (req, res) => res.sendFile(path.resolve(__dirname, "views", "tiendasOficiales.html")))
app.get("/vender", (req, res) => res.sendFile(path.resolve(__dirname, "views", "vender.html")))
