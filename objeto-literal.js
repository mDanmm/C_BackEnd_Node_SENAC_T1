// Objeto 
let pessoa = {
    nome: "Cleiton",
    DataNasc: new Date(2002, 11, 5, 30).toTimeString("pt-BR"),
    altura: 1.74,
    peso: 71,
    senha: "123a",
    idade: 23,

    //maiorDeIdade: function (){}
    maiorDeIdade: function () {
        return this.idade >= 18;
    },
    apresentar() {
        //interpolação
        return `Olá eu me chamo ${this.nome}, minha idade é ${this.idade}`
    }
};

console.log(pessoa);
console.log(pessoa.maiorDeIdade());
console.log(pessoa.apresentar());

