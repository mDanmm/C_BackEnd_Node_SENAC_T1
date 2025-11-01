//instaldo a biblio que permite entrada de dados
import PromptSync from "prompt-sync";

//
let prompt = PromptSync();

//class é um modelo de algo(objeto)

class Pessoa {
    
    //atributo privado
    #senha;

    // construtor constroi mais de um objeto
    // para por os valores de cada objeto, colocamos via parametro
    constructor(nome, idade, dataNasc, senha, palavraChave) {
        this.nome = nome,
        this.idade = idade,
        this.dataNasc = new Date(dataNasc).toLocaleDateString("pt-BR") ,
        this.#senha = senha
        this.palavraChave = palavraChave
    };
    apresentar(){
        console.log(`Olá me chamo ${this.nome}, tenho${this.idade} anos`);
        
    }
    
    //metodo especial que permite eu gerenciar a visualização da senha
    get senha(){
        const palavraChave =  prompt("Para ve a senha, você precisa falar a palavra chave: ")

        // ESTRUTURA CONDICIONAL SIMPLES
       if(this.palavraChave == palavraChave) {
        return this.#senha;
       }
       else{
        return "foi mal tente novamente";
       }
    }
}

// Class Aluno
    class Aluno  extends Pessoa{
        constructor(nome, dataNasc,senha, RA,){
            super(nome, dataNasc, senha)
            this.RA = RA
        };
        apresentar(){
            console.log(`Olá sou o aluno(a) ${this.nome} e o meu R.A é ${this.RA}`); 
        };
    }
// Class Professor
    class Professor extends Pessoa{
        constructor(nome, dataNasc, senha, salário, registro){
            super(nome, dataNasc, senha)
            this.salário = salário,
            this.registro = registro
        };
        apresentar(){
            console.log(`Olá sou o Docente(a) ${this.nome} e o meu Registro é ${this.registro}`)

            }
    };
// pergunte para o usuario ou aluno
// se for professo digite 1
// se for aluno digite 2 

console.log("BEM-VINDO AO CADASTRO SENAC");
console.log("Por gentileza, para continuarmos com o seu cadastro, informe se você é Aluno ou Professor");

let professorOuAluno = parseInt(prompt("Digite 1 para Professor ou 2 para Aluno"))

let novaPessoa2;
let nomePessoa2 = prompt("Digite o seu nome")
let dataNascpessoa2 = prompt("Digite a sua data de nascimento")
let senhaPessoa2 = prompt("Digite a sua senha")



// verificar o valor verificado 
// 3 === compara o valor e o tipo
// 2 == compara somente o valor
if (professorOuAluno === 2) { // Condição Simples
    // aluno
    let raAluno = prompt ("Digite seu R.A: ")

    //instancia

    novaPessoa2 = new Aluno(
    nomePessoa2 = nomePessoa2,
    dataNascpessoa2 = dataNascpessoa2,
    senhaPessoa2 = nomePessoa2,
    raAluno = raAluno
    );
}
else if (professorOuAluno === 1){ // Condição encadeada
    //professor
    let salarioProfessor = prompt("Digite seu Salário:")
    let registroProfessor = prompt("Digite o N° do seu Registro: ")

    novaPessoa2 = new Professor(
    nomePessoa2 = nomePessoa2,
    dataNascpessoa2 = dataNascpessoa2,
    senhaPessoa2 = nomePessoa2,
    registroProfessor = registroProfessor,
    salarioProfessor = salarioProfessor
    );
}

else{
    console.log("Opção Inválida");
};

console.log(novaPessoa2);

/*let nomePessoa = prompt("Digite o seu nome")
let idadePessoa = prompt("Digite a sua idade")
let dataNascpessoa = prompt("Digite a sua data de nascimento")
let senhaPessoa = prompt("Digite a sua senha")
let palavraChavePessoa = prompt("Digite a palavra-chave, caso um dia queira ver sua senha")


// criando o objeto

const novaPessoa = new Pessoa(
    nomePessoa, 
    idadePessoa, 
    dataNascpessoa, 
    senhaPessoa, 
    palavraChavePessoa
);

// aciona a função do objeto já criado

//novaPessoa.apresentar();
//acionando ver a senha
//novaPessoa.senha

//exibir todo o objeto
//console.log(novaPessoa);*/