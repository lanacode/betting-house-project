
// BANCO DE DADOS DE EXEMPLO, COM DADOS FICTíCIO
localStorage.setItem("usuarioLogado", JSON.stringify({
    nome: "Mateus Rios",
    email: "mateus@gmail.com",
    avatar: "img/fotoPerfil.png",
    saldo: 500
}));


// =========================================
// TROCA DE ABAS DO MENU
// =========================================

const botoesMenu = document.querySelectorAll(".item-menu");
const abas = document.querySelectorAll(".dashboard-tab");

botoesMenu.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.id === "btn-sair") {
            localStorage.removeItem("usuarioLogado");
            window.location.href = "login.html";
            return;
        }

        botoesMenu.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const tabAlvo = btn.getAttribute("data-tab");

        abas.forEach(aba => {
            if (aba.id === `aba-${tabAlvo}`) {
                aba.classList.add("active");
                aba.classList.remove("hidden");
            } else {
                aba.classList.remove("active");
                aba.classList.add("hidden");
            }
        });
    });
});


// =========================================
// FORMULÁRIO DE CONFIGURAÇÕES
// =========================================

document.getElementById("form-configuracoes").addEventListener("submit", (e) => {
    e.preventDefault();

    const novoNome = document.getElementById("config-nome").value;

    if (novoNome.trim().length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }

    atualizarNomePerfil(novoNome);

    alert("Alterações salvas!");
});

// =========================================
// SIMULAÇÃO DE CARTEIRA
// =========================================

function atualizarSaldo(valor) {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuario) return;

    usuario.saldo += valor;
    if (usuario.saldo < 0) usuario.saldo = 0;

    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    document.getElementById("saldo-atual").textContent = `R$ ${usuario.saldo.toFixed(2)}`;
}

document.getElementById("btn-depositar").addEventListener("click", () => {
    const valor = Number(document.getElementById("valor-transacao").value);

    if (valor < 10) {
        alert("Valor mínimo para depósito é R$ 10,00");
        return;
    }

    atualizarSaldo(valor);
    alert(`Depósito de R$ ${valor.toFixed(2)} realizado!`);
});

document.getElementById("btn-sacar").addEventListener("click", () => {
    const valor = Number(document.getElementById("valor-transacao").value);

    if (valor < 10) {
        alert("Valor mínimo para saque é R$ 10,00");
        return;
    }

    atualizarSaldo(-valor);
    alert(`Saque de R$ ${valor.toFixed(2)} realizado! (Simulação)`);
});

// =========================================
// DADOS DO USUÁRIO (simulação usando localStorage)
// =========================================

function carregarUsuario() {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado")) || {
        nome: "Nome do Usuário",
        email: "usuario@exemplo.com",
        avatar: "img/avatar-placeholder.png",
        saldo: 500
    };

    document.getElementById("nome-usuario-perfil").textContent = usuario.nome;
    document.getElementById("email-perfil").textContent = usuario.email;
    document.getElementById("avatar-usuario").src = usuario.avatar;
    document.getElementById("saldo-atual").textContent = `R$ ${usuario.saldo.toFixed(2)}`;
}

function atualizarNomePerfil(novoNome) {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (!usuario) return;

    usuario.nome = novoNome;
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

    document.getElementById("nome-usuario-perfil").textContent = novoNome;
}

window.addEventListener("DOMContentLoaded", carregarUsuario);

