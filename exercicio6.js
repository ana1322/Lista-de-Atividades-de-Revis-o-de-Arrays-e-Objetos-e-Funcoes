//Manipulação de Objetos Avançada
let pessoa = {
    nome: "Ana aguiar",
    idade: 17,
    profissao: "Nail designer",
    endereco: {
        rua: "Rua mathias, 22",
        cidade: "Sao jose",
        estado: "SC"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.profissao} e moro em ${this.endereco.cidade}.`;
    }
};

console.log("Cidade do endereço:", pessoa.endereco.cidade);

// 4. Atualizar a propriedade profissao para um novo valor e exibir o objeto atualizado
pessoa.profissao = "nail designer";
console.log("Objeto pessoa atualizado (com nova profissão):", pessoa);

// 5. Adicionar uma nova propriedade telefone ao objeto pessoa e exibir o objeto atualizado
pessoa.telefone = "(48) 984829578";
console.log("Objeto pessoa atualizado (com telefone):", pessoa);

console.log(pessoa.apresentacao());