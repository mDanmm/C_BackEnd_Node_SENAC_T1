//instaldo a biblio que permite entrada de dados
import PromptSync from "prompt-sync";

//
const prompt = PromptSync();

//class é um modelo de algo(objeto)

class Pessoa{
    
    //atributo privado
    #senha;

    // construtor constroi mais de um objeto
    // para por os valores de cada objeto, colocamos via parametro
    constructor(nome,idade,dataNasc,senha, palavraChave) {
        this.nome = nome,
        this.idade = idade,
        this.dataNasc = new Date(dataNasc).toDateString("pt-BR") ,
        this.#senha = senha
        this.palavraChave = palavraChave
    };
    apresentar(){
        console.log(`Olá me chamo ${this.nome}, tenho${this.idade} anos`);
        
    }

    // criar uma função ver senha 
    // precisa pedir ao usuario
    // retorne se é verdadeiro ou falso
    
    
    get senha(){
        const palavraChave =  prompt("Para ve a senha, você precisa falar a palavra chave")
        // ESTRUTURA CONDICIONAL SIMPLES
       if(this.palavraChave == palavraChave){
        return this.#senha
       }
       else{
        return "foi mal tente novamente";
       }
    }
}

let nomePessoa = prompt("Digite o seu nome")
let idadePessoa = prompt("Digite a sua idade")
let dataNascpessoa = prompt("Digite a sua data de nascimento")
let senhaPessoa = prompt("Digite a sua senha")


// criando o objeto

const novaPessoa = new Pessoa(nomePessoa, idadePessoa, dataNascpessoa, senhaPessoa, palavraChave);

// aciona a função do objeto já criado

novaPessoa.apresentar();
novaPessoa.senha

console.log(novaPessoa);