const nome = document.getElementById('idNome');
const telefone = document.getElementById('idTelefone');
const email = document.getElementById('idEmail');
const frm = document.querySelector('form');
const resp = document.querySelector('pre');

frm.addEventListener("submit", e => {
    e.preventDefault();
    if(!validarNome(nome.value)) {
        alert("Nome com mais de 100 caracteres.");
        nome.focus();
    }
    if (!validarEmail(email.value)) { 
        alert("Email inválido");
        email.focus(); 
    }
    if(!validarTelefone(telefone.value)) {
        alert("Telefone inválido");
        telefone.focus();
    }
    if(validarNome && validarEmail && validarTelefone){
        resp.innerHTML =`Dados Enviados
                    Nome: ${nome.value}
                    Telefone: ${telefone.value}
                    Email: ${email.value}`
    }
});

function validarNome(nome){
    const regex = /^.{0,99}$/;
    return regex.test(nome);
}

function validarTelefone(telefone){
    const regex = /^\d{2}\s\d{4}-\d{4}$/;
    return regex.test(telefone);
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}