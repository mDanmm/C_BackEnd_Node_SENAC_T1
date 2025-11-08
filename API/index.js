//
import express from "express";

//chamamos o objeto com o nome express  e passamos o valor dele mesmo
//podendo acessar suas caracteristica e comportamento
const app = express();


let frutas = ["Uva", "Carambola", "Melância", "Maracujá", "Morango"]



// serviço = API
app.get("/", (req, res) => {
    res.send("Respondendo: Primeiro dia com NODE");
})

//rota usuario/1
app.get("/usuario/:id", (req, res) => {
    let id = req.params.id;
    res.send(`O cliente está querendo ver o usuário on o id ${id}`)

})

app.get("/aluno/:nome/:curso", (req, res) =>{
    const novoAluno = {
        nome: req.params.nome,
        curso: req.params.curso
    }
    res.send(novoAluno);
})

app.post("/fruta",(req, res) => {
    //Vai inserir o dado em ordem sequencial
    frutas.push(novaFruta);
    res.send("Fruta cadastrada com sucesso")
})

app.get("/fruta", (req,res) =>{
    res.send(frutas);
})

app.put("fruta/:posicao", (req, res) => {

})

//app listen precisa estar como a ultima opção
app.listen(3000, ()=>{
    console.log("Iniciando minha API com EXPRESS");
})