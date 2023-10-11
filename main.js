function Funcionario(nome, cargo) {
    this.nome = nome;
    this.cargo = cargo;
}

function Designer(nome) {
    Funcionario.call(this, nome, "Designer")
}

function Programador(nome) {
    Funcionario.call(this, nome, "Programador")
}

const funcionario1 = new Designer("Reginaldo");
const funcionario2 = new Programador("Alberto");
const funcionario3 = new Programador("Alex");