const alunos = [
    { nome: "Alice", nota: 10 },
    { nome: "Rodrigo", nota: 4 },
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 6 },
    { nome: "Murilo", nota: 5 },
];

const retornarNotas = () => {
    const notasAprovadas = [];
    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].nota >= 6) {
            notasAprovadas.push(alunos[i]);
        }
    }
    return notasAprovadas;
};

console.log(retornarNotas());