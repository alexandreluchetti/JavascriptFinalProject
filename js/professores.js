class Professor{
    constructor(nome, idade, cpf, celular, email, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.celular = celular;
        this.email = email;
        this.cidade = cidade;
    }

    linhaTabela = function(){
        let linha = "";
        linha +=   "<tr><th scope='row'>" + contagemTabelaProfessores + "</th>" + 
                        "<td>" + this.nome + "</td>" +
                        "<td>" + this.idade + "</td>" +
                        "<td>" + this.cpf + "</td>" +
                        "<td>" + this.celular + "</td>" +
                        "<td>" + this.email + "</td>" +
                        "<td>" + this.cidade + "</td></tr>";
        
        return linha;
    }
}

function exibirProfessores() {
    tabelaConsultaProfessores.style.display = "block";
    tituloConsultaProfessores.style.display = "block";

    contagemTabelaProfessores = 1;

    let resultadoProfessores = "";

    for (let cont in arrayProfessores) {
        resultadoProfessores += arrayProfessores[cont].linhaTabela();
        contagemTabelaProfessores++;
    }
    corpoTabelaConsultaProfessores.innerHTML = resultadoProfessores;
}