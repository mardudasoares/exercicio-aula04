function layout(title, content){
    return `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <nav>
    <a href="/">Home</a>
    <a href="/alunos">Alunos</a>
    <a href="/cursos">Cursos</a>
    <a href="/contatos">Contatos</a>
    </nav>
    ${content}
</body>
</html>
    `
}

export function homePage(){
    return layout("Home", "<h1>Bem vindo à escola maneira</h1>")
}

const alunos = [
    { name: "Maria", ano: 7, idade: 12},
    { name: "Marcelo", ano: 8, idade: 13},
    { name: "Merida", ano: 9, idade: 14},
    { name: "Marcia", ano: 6, idade: 11},
    { name: "Moana", ano: 8, idade: 13},
    { name: "Marcela ", ano: 5, idade: 11},
    { name: "Mortiça", ano: 1, idade: 6},
    { name: "Mount", ano: 6, idade: 11},
    { name: "Marcos", ano: 7, idade: 13},
    { name: "Mario", ano: 9, idade: 15}
]

export function alunosPage(){
    const rows = alunos.map((a) => 
    `<tr>
            <td>${a.name}</td>
            <td>${a.ano}</td>
            <td>${a.idade}</td>
        </tr>`).join (" ")
    return layout("Alunos", `
        <h1>alunos</h1>
        <table>
            <tr>
                <th>Aluno</th>
                <th>Ano </th>
                <th>Idade</th>
            </tr>
            ${rows}
        </table>    
        `
    )
}

const cursos = [
    { nameC: "Português", hora: "7:00Am", diaSemana: "Quarta"},
    { nameC: "Matemática", hora: "8:00Am", diaSemana: "Sexta"},
    { nameC: "Inglês", hora: "9:00Am", diaSemana: "Sabado"},
    { nameC: "Libras", hora: "10:00Am", diaSemana: "Terça"},

]


export function cursosPage(){
    const rows = cursos.map((c) => 
    `<tr>
            <td>${c.nameC}</td>
            <td>${c.hora}</td>
            <td>${c.diaSemana}</td>
        </tr>`).join (" ")
    return layout("Cursos", `
        <h1>Curso</h1>
        <table>
            <tr>
                <th>Curso</th>
                <th>Hora</th>
                <th>Dia da semana</th>
            </tr>
            ${rows}
        </table>    
        `
    )
}
export function contatosPage(){
    return layout("Contatos", "<h1>Nossos Contatos</h1>")
}
export function notFoundPage() {
    return layout("Not Found", "<h1>Page not found</h1>")
}

