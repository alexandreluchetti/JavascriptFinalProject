var containerHome = document.getElementById("containerHome");
var containerCadastros = document.getElementById("containerCadastros");
var containerConsultas = document.getElementById("containerConsultas");

//Cadastro
var selectTipoCadastro = document.getElementById("selectTipoCadastro");

var tituloCadAlunos = document.getElementById("tituloCadAlunos");
var tituloCadProf = document.getElementById("tituloCadProf");
var tituloCadCursos = document.getElementById("tituloCadCursos");
var tituloCadTurmas = document.getElementById("tituloCadTurmas");

var divCadAlunoProfessor = document.getElementById("divCadAlunoProfessor");
var divCadastroCurso = document.getElementById("divCadastroCurso");
var divCadastroTurma = document.getElementById("divCadastroTurma");

var nome = document.getElementById("inputNome");
var idade = document.getElementById("inputIdade");
var cpf = document.getElementById("inputCpf");
var celular = document.getElementById("inputCelular");
var email = document.getElementById("inputEmail");
var cidade = document.getElementById("inputCidade");
var turmaAluno = document.getElementById("turmaAluno");

var nomeCurso = document.getElementById("selectNomeCurso");
var turmaCurso = document.getElementById("selectTurmaCurso");

var nomeTurma = document.getElementById("selectNomeTurma");
var turnoTurma = document.getElementById("selectTurnoTurma");

var divInputTurma = document.getElementById("divInputTurma");

var btnForm = document.getElementById("btnForm");
var btnCadastrar = document.getElementById("btnCadastrar");
var alertCadastro = document.getElementById("alertCadastro");

//Consulta
var divConsultaAlunos = document.getElementById("divConsultaAlunos");
var divConsultaTurmas = document.getElementById("divConsultaTurmas");

var selectTipoConsulta = document.getElementById("selectTipoConsulta");
var selectConsultaAlunos = document.getElementById("selectConsultaAlunos");

var tabelaConsultaAlunos = document.getElementById("tabelaConsultaAlunos");
var corpoTabelaConsultaAlunos = document.getElementById("corpoTabelaConsultaAlunos");

var tabelaConsultaProfessores = document.getElementById("tabelaConsultaProfessores");
var corpoTabelaConsultaProfessores = document.getElementById("corpoTabelaConsultaProfessores");

var tabelaConsultaCursos = document.getElementById("tabelaConsultaCursos");
var corpoTabelaConsultaCursos = document.getElementById("corpoTabelaConsultaCursos");

var tabelaConsultaTurmas = document.getElementById("tabelaConsultaTurmas");
var corpoTabelaConsultaTurmas = document.getElementById("corpoTabelaConsultaTurmas");
var selectConsultaTurmas = document.getElementById("selectConsultaTurmas");

//Botões
var divBtnExibirProfessores = document.getElementById("divBtnExibirProfessores");
var divBtnExibirCursos = document.getElementById("divBtnExibirCursos");
var divBtnExibirGeral = document.getElementById("divBtnExibirGeral");

//Títulos
var tituloConsultaAlunos = document.getElementById("tituloConsultaAlunos");
var tituloConsultaProfessores = document.getElementById("tituloConsultaProfessores");
var tituloConsultaCursos = document.getElementById("tituloConsultaCursos");
var tituloConsultaTurmas = document.getElementById("tituloConsultaTurmas");

var contagemTabelaAlunos;
var contagemTabelaProfessores;
var contagemTabelaCursos;
var contagemTabelaTurmas;

var arrayAlunos = [];
var arrayProfessores = [];
var arrayCursos = [];
var arrayTurma = [];

function troca(parametro) {
    switch (parametro) {
        case "home":
            containerHome.style.display = "block";
            containerCadastros.style.display = "none";
            containerConsultas.style.display = "none";
            break;

        case "cadastros":
            containerHome.style.display = "none";
            containerCadastros.style.display = "block";
            containerConsultas.style.display = "none";
            break;

        case "consultas":
            containerHome.style.display = "none";
            containerCadastros.style.display = "none";
            containerConsultas.style.display = "block";
            break;
    }
}

function cadastrar() {
    switch (selectTipoCadastro.value) {
        case "alunos":
            var aluno = new Aluno(nome.value, idade.value, cpf.value, celular.value, email.value, cidade.value, turmaAluno.value);

            if (nome.value == "" ||
                idade.value == "" ||
                cpf.value == "" ||
                celular.value == "" ||
                email.value == "" ||
                cidade.value == "" ||
                turmaAluno.value == "") {
                alert("Todos os campos são obrigatórios!");
                return;
            } else {
                arrayAlunos.push(aluno);
                divCadAlunoProfessor.reset();
            }

            break;

        case "professores":
            var professor = new Professor(nome.value, idade.value, cpf.value, celular.value, email.value, cidade.value);

            if (nome.value == "" ||
                idade.value == "" ||
                cpf.value == "" ||
                celular.value == "" ||
                email.value == "" ||
                cidade.value == "") {
                alert("Todos os campos são obrigatórios!");
                return;
            } else {
                arrayProfessores.push(professor);
                divCadAlunoProfessor.reset();
            }

            break;

        case "cursos":
            var curso = new Curso(nomeCurso.value, turmaCurso.value);

            if (nomeCurso.value == "" || turmaCurso.value == "") {
                alert("Todos os campos são obrigatórios!");
                return;
            } else {
                arrayCursos.push(curso);
                divCadastroCurso.reset();
            }

            break;

        case "turmas":
            var turma = new Turma(nomeTurma.value, turnoTurma.value);

            if (nomeTurma.value == "" || turnoTurma.value == "") {
                alert("Todos os campos são obrigatórios!");
                return;
            } else {
                arrayTurma.push(turma);
                turmaCurso.innerHTML += turma.TurmaEmCursos();
                turmaAluno.innerHTML += turma.TurmaEmCursos();
                divCadastroTurma.reset();
            }

            break;
    }

    alertCadastro.style.display = "block";

    setTimeout(function () {
        alertCadastro.style.display = "none"
    }, 2000);
}

function limpar() {
    divCadAlunoProfessor.reset();
    divCadastroCurso.reset();
    divCadastroTurma.reset();
}

function selectCadastro() {
    switch (selectTipoCadastro.value) {
        case "alunos":
            tituloCadAlunos.style.display = "block";
            tituloCadProf.style.display = "none";
            tituloCadCursos.style.display = "none";
            tituloCadTurmas.style.display = "none";

            divInputTurma.style.display = "flex";
            divCadAlunoProfessor.style.display = "block";
            divCadastroCurso.style.display = "none";
            divCadastroTurma.style.display = "none";

            btnForm.style.display = "block";
            break;

        case "professores":
            tituloCadAlunos.style.display = "none";
            tituloCadProf.style.display = "block";
            tituloCadCursos.style.display = "none";
            tituloCadTurmas.style.display = "none";

            divInputTurma.style.display = "none";
            divCadAlunoProfessor.style.display = "block";
            divCadastroCurso.style.display = "none";
            divCadastroTurma.style.display = "none";

            btnForm.style.display = "block";
            break;

        case "cursos":
            tituloCadAlunos.style.display = "none";
            tituloCadProf.style.display = "none";
            tituloCadCursos.style.display = "block";
            tituloCadTurmas.style.display = "none";

            divInputTurma.style.display = "none";
            divCadAlunoProfessor.style.display = "none";
            divCadastroCurso.style.display = "block";
            divCadastroTurma.style.display = "none";

            btnForm.style.display = "block";
            break;

        case "turmas":
            tituloCadAlunos.style.display = "none";
            tituloCadProf.style.display = "none";
            tituloCadCursos.style.display = "none";
            tituloCadTurmas.style.display = "block";

            divInputTurma.style.display = "none";
            divCadAlunoProfessor.style.display = "none";
            divCadastroCurso.style.display = "none";
            divCadastroTurma.style.display = "block";

            btnForm.style.display = "block";
            break;
    }
}

function selectConsulta() {
    switch (selectTipoConsulta.value) {
        case "Alunos":
            divConsultaAlunos.style.display = "flex";
            divConsultaTurmas.style.display = "none";
            tabelaConsultaAlunos.style.display = "none";
            tabelaConsultaProfessores.style.display = "none";
            tabelaConsultaCursos.style.display = "none";
            tabelaConsultaTurmas.style.display = "none";

            divBtnExibirProfessores.style.display = "none";
            divBtnExibirCursos.style.display = "none";
            divBtnExibirGeral.style.display = "none";

            tituloConsultaAlunos.style.display = "none";
            tituloConsultaProfessores.style.display = "none";
            tituloConsultaCursos.style.display = "none";
            tituloConsultaTurmas.style.display = "none";

            break;

        case "Professores":
            divConsultaAlunos.style.display = "none";
            divConsultaTurmas.style.display = "none";
            tabelaConsultaAlunos.style.display = "none";
            tabelaConsultaProfessores.style.display = "none";
            tabelaConsultaCursos.style.display = "none";
            tabelaConsultaTurmas.style.display = "none";

            divBtnExibirProfessores.style.display = "block";
            divBtnExibirCursos.style.display = "none";
            divBtnExibirGeral.style.display = "none";

            tituloConsultaAlunos.style.display = "none";
            tituloConsultaProfessores.style.display = "none";
            tituloConsultaCursos.style.display = "none";
            tituloConsultaTurmas.style.display = "none";

            break;

        case "Cursos":
            divConsultaAlunos.style.display = "none";
            divConsultaTurmas.style.display = "none";
            tabelaConsultaAlunos.style.display = "none";
            tabelaConsultaProfessores.style.display = "none";
            tabelaConsultaCursos.style.display = "none";
            tabelaConsultaTurmas.style.display = "none";

            divBtnExibirProfessores.style.display = "none";
            divBtnExibirCursos.style.display = "block";
            divBtnExibirGeral.style.display = "none";

            tituloConsultaAlunos.style.display = "none";
            tituloConsultaProfessores.style.display = "none";
            tituloConsultaCursos.style.display = "none";
            tituloConsultaTurmas.style.display = "none";

            break;

        case "Turmas":
            divConsultaAlunos.style.display = "none";
            divConsultaTurmas.style.display = "flex";
            tabelaConsultaAlunos.style.display = "none";
            tabelaConsultaProfessores.style.display = "none";
            tabelaConsultaCursos.style.display = "none";
            tabelaConsultaTurmas.style.display = "none";

            divBtnExibirProfessores.style.display = "none";
            divBtnExibirCursos.style.display = "none";
            divBtnExibirGeral.style.display = "none";

            tituloConsultaAlunos.style.display = "none";
            tituloConsultaProfessores.style.display = "none";
            tituloConsultaCursos.style.display = "none";
            tituloConsultaTurmas.style.display = "none";

            break;

        case "Geral":
            divConsultaAlunos.style.display = "none";
            divConsultaTurmas.style.display = "none";
            tabelaConsultaAlunos.style.display = "none";
            tabelaConsultaProfessores.style.display = "none";
            tabelaConsultaCursos.style.display = "none";
            tabelaConsultaTurmas.style.display = "none";

            divBtnExibirProfessores.style.display = "none";
            divBtnExibirCursos.style.display = "none";
            divBtnExibirGeral.style.display = "block";

            tituloConsultaAlunos.style.display = "none";
            tituloConsultaProfessores.style.display = "none";
            tituloConsultaCursos.style.display = "none";
            tituloConsultaTurmas.style.display = "none";

            break;
    }
}

function exibir(parametro) {
    switch (parametro) {
        case "alunos":
            exibirAlunos();
            break;

        case "professores":
            exibirProfessores();
            break;

        case "cursos":
            exibirCursos();
            break;

        case "turmas":
            exibirTurmas();
            break;

        case "geral":
            tabelaConsultaAlunos.style.display = "block";
            tabelaConsultaProfessores.style.display = "block";
            tabelaConsultaCursos.style.display = "block";
            tabelaConsultaTurmas.style.display = "block";

            tituloConsultaAlunos.style.display = "block";
            tituloConsultaProfessores.style.display = "block";
            tituloConsultaCursos.style.display = "block";
            tituloConsultaTurmas.style.display = "block";

            exibirProfessores();
            exibirCursos();

            contagemTabelaAlunos = 1;
            let resultadoAlunos = "";
            for (let cont in arrayAlunos) {
                resultadoAlunos += arrayAlunos[cont].linhaTabela();
                contagemTabelaAlunos++;

            }
            corpoTabelaConsultaAlunos.innerHTML = resultadoAlunos;

            contagemTabelaTurmas = 1;
            let resultadoTurmas = "";
            for (let cont in arrayTurma) {
                resultadoTurmas += arrayTurma[cont].linhaTabela();
                contagemTabelaTurmas++;
            }
            corpoTabelaConsultaTurmas.innerHTML = resultadoTurmas;
            break;
    }
}

//Máscara celular=============================================
function mask(o, f) {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");

    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }

    return r;
}

//Máscara CPF=================================================
function mascara(i) {
    var v = i.value;

    if (isNaN(v[v.length - 1])) {
        i.value = v.substring(0, v.length - 1);
        return;
    }

    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
}