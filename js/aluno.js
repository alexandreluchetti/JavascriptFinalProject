class Aluno{
    constructor(nome, idade, cpf, celular, email, cidade, turma){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.celular = celular;
        this.email = email;
        this.cidade = cidade;
        this.turma = turma;
    }

    linhaTabela = function(){
        let linha = "";
        linha +=   "<tr><th scope='row'>" + contagemTabelaAlunos + "</th>" + 
                        "<td>" + this.nome + "</td>" +
                        "<td>" + this.idade + "</td>" +
                        "<td>" + this.cpf + "</td>" +
                        "<td>" + this.celular + "</td>" +
                        "<td>" + this.email + "</td>" +
                        "<td>" + this.cidade + "</td>" +
                        "<td>" + this.turma + "</td></tr>";

        return linha;
    }
}

function exibirAlunos() {
    tabelaConsultaAlunos.style.display = "block";
    tituloConsultaAlunos.style.display = "block";

    contagemTabelaAlunos = 1;

    if (selectConsultaAlunos.value == "Todos") {
        let resultadoAlunos = "";

        for (let cont in arrayAlunos) {
            resultadoAlunos += arrayAlunos[cont].linhaTabela();
            contagemTabelaAlunos++;
        }
        corpoTabelaConsultaAlunos.innerHTML = resultadoAlunos;

    } else if (selectConsultaAlunos.value == "Maiores") {
        let resultadoAlunos = "";

        for (let cont in arrayAlunos) {
            if (arrayAlunos[cont].idade >= 18) {
                resultadoAlunos += arrayAlunos[cont].linhaTabela();
                contagemTabelaAlunos++;
            }
        }
        corpoTabelaConsultaAlunos.innerHTML = resultadoAlunos;

    } else if (selectConsultaAlunos.value == "Menores") {
        let resultadoAlunos = "";

        for (let cont in arrayAlunos) {
            if (arrayAlunos[cont].idade < 18) {
                resultadoAlunos += arrayAlunos[cont].linhaTabela();
                contagemTabelaAlunos++;
            }
        }
        corpoTabelaConsultaAlunos.innerHTML = resultadoAlunos;
    } else {
        alert("Você não selecionou o tipo de relatório.");
        tabelaConsultaAlunos.style.display = "none";
        tituloConsultaAlunos.style.display = "none";
        return;
    }
}