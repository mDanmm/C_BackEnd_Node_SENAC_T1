//
import express from "express";

//chamamos o objeto com o nome express  e passamos o valor dele mesmo
//podendo acessar suas caracteristica e comportamento
const app = express();

// serviço = API
app.get("/", (req, res) => {
    res.send("Primeiro dia com NODE");
})

app.listen(300, ()=>{
    console.log("Iniciando minha API com EXPRESS");
})