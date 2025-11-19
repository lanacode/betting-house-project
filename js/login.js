// Troca de Abas: Entrar / Cadastrar 

const abaEntrar = document.getElementById("aba-entrar");
const abaCadastrar = document.getElementById("aba-cadastrar");

const formEntrar = document.getElementById("form-entrar");
const formCadastrar = document.getElementById("form-cadastrar");

// Trocar para "Entrar"
abaEntrar.addEventListener("click", () => {
    abaEntrar.classList.add("active");
    abaCadastrar.classList.remove("active");

    formEntrar.classList.add("active");
    formEntrar.classList.remove("hidden");

    formCadastrar.classList.add("hidden");
    formCadastrar.classList.remove("active");
});

// Trocar para "Cadastrar"
abaCadastrar.addEventListener("click", () => {
    abaCadastrar.classList.add("active");
    abaEntrar.classList.remove("active");

    formCadastrar.classList.add("active");
    formCadastrar.classList.remove("hidden");

    formEntrar.classList.add("hidden");
    formEntrar.classList.remove("active");
});


//VALIDAÇÕES

// Função simples de validação de email
function emailValido(email) {
    return /\S+@\S+\.\S+/.test(email);
}


// Formulário de Entrar
formEntrar.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email-entrar").value;
    const senha = document.getElementById("senha-entrar").value;
    const erroEmail = document.getElementById("erro-email-entrar");

    erroEmail.textContent = "";

    if (!emailValido(email)) {
        erroEmail.textContent = "Digite um email válido!";
        return;
    }

    if (senha.length < 4) {
        alert("Senha muito curta!");
        return;
    }

    // Login
    alert("Login realizado!");
    window.location.href = "index.html";
});


// === Formulário de Cadastro ===
formCadastrar.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome-cadastrar").value;
    const email = document.getElementById("email-cadastrar").value;
    const senha = document.getElementById("senha-cadastrar").value;
    const confirma = document.getElementById("confirma-senha-cadastrar").value;

    const erroEmail = document.getElementById("erro-email-cadastrar");
    const erroSenha = document.getElementById("erro-senha-cadastrar");
    const erroConfirmacao = document.getElementById("erro-confirma-senha");

    // Limpar erros
    erroEmail.textContent = "";
    erroSenha.textContent = "";
    erroConfirmacao.textContent = "";

    let valido = true;

    if (nome.length < 3) {
        alert("Seu nome precisa ter pelo menos 3 letras!");
        valido = false;
    }

    if (!emailValido(email)) {
        erroEmail.textContent = "Digite um email válido!";
        valido = false;
    }

    if (senha.length < 6) {
        erroSenha.textContent = "Senha deve ter no mínimo 6 caracteres!";
        valido = false;
    }

    if (senha !== confirma) {
        erroConfirmacao.textContent = "As senhas não coincidem!";
        valido = false;
    }

    if (!valido) return;

    // Cadastro
    alert("Conta criada com sucesso!");
    
    // Volta automaticamente para aba "Entrar"
    abaEntrar.click();
});

// Esqueceu a senha
const linkEsqueceu = document.querySelector(".esqueceu-senha");

linkEsqueceu.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Opção indisponível.\nEntre em contato com o suporte.");
});


