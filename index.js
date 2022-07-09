const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const textos = require("./Lines/Frases.json")

app.get("/textos", (req,res) => {
    return res.json(textos)
})

app.listen(port, () => {
    console.log("Esta rodando")
})