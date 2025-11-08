//
import express from "express";

//chamamos o objeto com o nome express  e passamos o valor dele mesmo
//podendo acessar suas caracteristica e comportamento
const app = express();

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


//app listen precisa estar como a ultima opção
app.listen(3000, ()=>{
    console.log("Iniciando minha API com EXPRESS");
})