class Curso{
    constructor(nome, turma, turno){
        this.nome = nome;
        this.turma = turma;
        this.turno = turno;
    }

    linhaTabela = function(){
        let linha = "";
        linha +=   "<tr><th scope='row'>" + contagemTabelaCursos + "</th>" + 
                        "<td>" + this.nome + "</td>" +
                        "<td>" + this.turma + "</td></tr>";
        
        return linha;
    }
}

function exibirCursos() {
    tabelaConsultaCursos.style.display = "block";
    tituloConsultaCursos.style.display = "block";

    contagemTabelaCursos = 1;

    let resultadoCursos = "";

    for (let cont in arrayCursos) {
        resultadoCursos += arrayCursos[cont].linhaTabela();
        contagemTabelaCursos++;
    }
    corpoTabelaConsultaCursos.innerHTML = resultadoCursos;
}