const alunos = [
    { nome: "Alice", nota: 10 },
    { nome: "Rodrigo", nota: 4 },
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 6 },
    { nome: "Murilo", nota: 5 },
];

const notasAprovadas = alunos.filter(aluno => aluno.nota >= 6);

console.log(notasAprovadas);