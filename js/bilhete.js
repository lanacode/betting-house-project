// Arquivo: js/bilhete.js

// 1. RECUPERAÇÃO: Ao iniciar, busca o bilhete salvo no navegador. 
// Se não tiver nada, inicia com array vazio [].
let BILHETE = JSON.parse(localStorage.getItem('betsim_bilhete')) || [];

document.addEventListener('DOMContentLoaded', () => {
    configurarBilhete();
    // 2. RENDERIZAÇÃO IMEDIATA: Assim que mudar de página, desenha o bilhete que estava salvo
    atualizarInterfaceBilhete();
});

function configurarBilhete() {
    const inputValor = document.getElementById('valor-aposta');
    const btnLimpar = document.getElementById('btn-limpar-bilhete');
    const btnApostar = document.getElementById('btn-apostar');

    if (inputValor) {
        inputValor.addEventListener('input', calcularGanhos);
    }
    
    if (btnLimpar) {
        btnLimpar.addEventListener('click', () => {
            BILHETE = [];
            salvarBilhete(); // Limpa a memória
            atualizarInterfaceBilhete();
        });
    }

    if(btnApostar) {
        btnApostar.addEventListener('click', (e) => {
            e.preventDefault();
            
            const usuario = JSON.parse(localStorage.getItem('betsim_usuario'));
            if (!usuario) {
                alert("Faça login para apostar!");
                window.location.href = 'login.html';
                return;
            }

            const valorTotal = parseFloat(document.getElementById('valor-aposta').value);
            if (valorTotal > usuario.saldo) {
                alert("Saldo insuficiente!");
                return;
            }

            // Deduz saldo e salva
            usuario.saldo -= valorTotal;
            if (typeof UsuarioManager !== 'undefined') {
                UsuarioManager.atualizarSessao(usuario); 
            } else {
                localStorage.setItem('betsim_usuario', JSON.stringify(usuario));
            }

            alert(`Aposta realizada! Boa sorte.`);

            BILHETE = [];
            salvarBilhete(); // Limpa a memória após apostar
            atualizarInterfaceBilhete();
            
            // Recarrega para atualizar saldo visualmente
            window.location.reload();
        });
    }
}

// --- FUNÇÃO DE SALVAMENTO ---
// Essa é a chave para persistir entre páginas
function salvarBilhete() {
    localStorage.setItem('betsim_bilhete', JSON.stringify(BILHETE));
}

function gerenciarAposta(idJogo, key, odd, nomeSelecao) {
    const index = BILHETE.findIndex(item => item.idJogo === idJogo && item.key === key);

    if (index !== -1) {
        // Remove se já existe
        BILHETE.splice(index, 1);
    } else {
        // Remove conflitos (ex: apostar em Casa e Fora no mesmo jogo)
        const conflito = BILHETE.findIndex(item => item.idJogo === idJogo);
        if(conflito !== -1) {
            BILHETE.splice(conflito, 1);
        }

        // Busca dados do jogo para exibir bonito no bilhete
        const jogoInfo = BANCO_DE_DADOS.jogos.find(j => j.id === idJogo);
        if(!jogoInfo) return;

        BILHETE.push({
            idJogo: idJogo,
            key: key,
            odd: odd,
            evento: jogoInfo.evento, // Ex: Flamengo x Palmeiras
            selecao: nomeSelecao     // Ex: Flamengo
        });
    }

    salvarBilhete(); // SALVA A CADA CLIQUE
    atualizarInterfaceBilhete();
}

function atualizarInterfaceBilhete() {
    const containerLista = document.getElementById('lista-selecoes');
    const btnApostar = document.getElementById('btn-apostar');
    
    if(containerLista) {
        containerLista.innerHTML = '';

        if (BILHETE.length === 0) {
            containerLista.innerHTML = '<p class="empty-message">Clique nas Odds para adicionar.</p>';
            if(btnApostar) btnApostar.disabled = true;
        } else {
            if(btnApostar) btnApostar.disabled = false;

            BILHETE.forEach(item => {
                const div = document.createElement('div');
                div.className = 'item-bilhete';
                // Layout solicitado: Jogo - Seleção
                div.innerHTML = `
                    <button class="btn-remover-item" onclick="gerenciarAposta(${item.idJogo}, '${item.key}', 0, '')">×</button>
                    <h4 style="margin:0; font-size:0.85rem;">${item.evento}</h4>
                    <div style="display:flex; justify-content:space-between; margin-top:4px;">
                        <span style="color:var(--color-text-secondary);">${item.selecao}</span>
                        <strong style="color:var(--color-primary);">Odd: ${item.odd.toFixed(2)}</strong>
                    </div>
                `;
                containerLista.appendChild(div);
            });
        }
    }

    // Atualiza visual dos botões (Amarelo)
    atualizarVisualBotoes();
    // Recalcula totais
    calcularGanhos();
}

// Função global usada pelo main.js ao carregar a página
function atualizarVisualBotoes() {
    // 1. Limpa tudo primeiro
    document.querySelectorAll('.odd-item').forEach(btn => btn.classList.remove('selecionado'));

    // 2. Pinta apenas os que estão no bilhete carregado
    BILHETE.forEach(item => {
        const btnId = `odd-${item.idJogo}-${item.key}`;
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.classList.add('selecionado');
        }
    });
}

function calcularGanhos() {
    const inputValor = document.getElementById('valor-aposta');
    if(!inputValor) return;

    let valorAposta = parseFloat(inputValor.value);
    if (isNaN(valorAposta) || valorAposta < 1) valorAposta = 1.00;

    // Soma das odds
    const oddTotal = BILHETE.reduce((acc, item) => acc + item.odd, 0);
    
    const bruto = valorAposta * oddTotal;
    const taxa = bruto * 0.05;
    const liquido = bruto - taxa;

    // Atualiza HTML
    const setText = (id, val) => {
        const el = document.getElementById(id);
        if(el) el.innerText = val;
    };

    setText('total-cotacoes', oddTotal.toFixed(2));
    setText('retorno-bruto-potencial', `R$ ${bruto.toFixed(2)}`);
    setText('valor-encargo-servico', `R$ ${taxa.toFixed(2)}`);
    setText('retorno-liquido-potencial', `R$ ${liquido.toFixed(2)}`);
}