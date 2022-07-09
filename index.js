const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const textos = require("./Lines/Frases.json")

app.get("/textos", (req,res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);

    return res.json(textos)
})

app.listen(port, () => {
    console.log("Esta rodando")
})