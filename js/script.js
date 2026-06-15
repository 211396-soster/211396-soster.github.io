
let tamanhoFonte = 16;


function alternarTema() {
    document.body.classList.toggle("dark");
}


function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}


function diminuirFonte() {
    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

function showError(input, message) {
    let el = input.nextElementSibling;
    if (!el || !el.classList || !el.classList.contains('error')) {
        el = document.createElement('small');
        el.className = 'error';
        el.style.color = 'red';
        el.style.display = 'block';
        el.style.marginTop = '4px';
        input.parentNode.insertBefore(el, input.nextSibling);
    }
    el.textContent = message;
}

function clearErrors(form) {
    form.querySelectorAll('.error').forEach(e => e.remove());
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateContactForm(e) {
    e.preventDefault();
    const form = e.target;
    clearErrors(form);
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();
    let firstInvalid = null;
    if (nome.length < 2) {
        showError(form.nome, 'Informe seu nome (mínimo 2 caracteres)');
        firstInvalid = firstInvalid || form.nome;
    }
    if (!validateEmail(email)) {
        showError(form.email, 'Informe um e-mail válido');
        firstInvalid = firstInvalid || form.email;
    }
    if (mensagem.length < 10) {
        showError(form.mensagem, 'A mensagem deve ter ao menos 10 caracteres');
        firstInvalid = firstInvalid || form.mensagem;
    }
    if (firstInvalid) {
        firstInvalid.focus();
        return false;
    }
    form.submit();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formContato');
    if (form) form.addEventListener('submit', validateContactForm);
});



