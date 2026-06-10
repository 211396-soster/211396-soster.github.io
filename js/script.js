// Tamanho inicial da fonte
let tamanhoFonte = 16;

// Modo Noturno
function alternarTema() {
    document.body.classList.toggle("dark");
}

// Aumentar fonte
function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

// Diminuir fonte
function diminuirFonte() {
    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

// Validação do formulário de contato

const formulario = document.getElementById("formContato");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;

        if (
            nome.trim() === "" ||
            email.trim() === "" ||
            mensagem.trim() === ""
        ) {
            alert("Preencha todos os campos do formulário.");

            event.preventDefault();
        }

    });

}