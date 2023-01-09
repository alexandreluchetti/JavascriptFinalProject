class Turma{
    constructor(nome, turno){
        this.nome = nome;
        this.turno = turno;
    }

    linhaTabela = function(){
        let linha = "";
        linha +=   "<tr><th scope='row'>" + contagemTabelaTurmas + "</th>" +
                        "<td>" + this.nome + "</td>" +
                        "<td>" + this.turno + "</td></tr>";
        
        return linha;
    }

    TurmaEmCursos = function(){
        let linha = "";
        linha +=    "<option value=" + this.nome + " - " + this.turno + ">" +
                        this.nome + " - " + this.turno +
                    "</option>"

        return linha;
    }
}

function exibirTurmas() {
    tabelaConsultaTurmas.style.display = "block";
    tituloConsultaTurmas.style.display = "block";

    contagemTabelaTurmas = 1;

    if (selectConsultaTurmas.value == "manhã") {
        let resultadoTurmas = "";

        for (let cont in arrayTurma) {
            if (arrayTurma[cont].turno == "Manhã") {
                resultadoTurmas += arrayTurma[cont].linhaTabela();
                contagemTabelaTurmas++;
            }
        }
        corpoTabelaConsultaTurmas.innerHTML = resultadoTurmas;

    } else if (selectConsultaTurmas.value == "tarde") {
        let resultadoTurmas = "";

        for (let cont in arrayTurma) {
            if (arrayTurma[cont].turno == "Tarde") {
                resultadoTurmas += arrayTurma[cont].linhaTabela();
                contagemTabelaTurmas++;
            }
        }
        corpoTabelaConsultaTurmas.innerHTML = resultadoTurmas;

    } else if (selectConsultaTurmas.value == "noite") {
        let resultadoTurmas = "";

        for (let cont in arrayTurma) {
            if (arrayTurma[cont].turno == "Noite") {
                resultadoTurmas += arrayTurma[cont].linhaTabela();
                contagemTabelaTurmas++;
            }
        }
        corpoTabelaConsultaTurmas.innerHTML = resultadoTurmas;

    } else if(selectConsultaTurmas.value == "todas"){
        let resultadoTurmas = "";

        for (let cont in arrayTurma) {
            resultadoTurmas += arrayTurma[cont].linhaTabela();
            contagemTabelaTurmas++;
        }
        corpoTabelaConsultaTurmas.innerHTML = resultadoTurmas;
    } else {
        alert("Você não selecionou o tipo de relatório.");
        tabelaConsultaTurmas.style.display = "none";
        tituloConsultaTurmas.style.display = "none";
        return;
    }
}