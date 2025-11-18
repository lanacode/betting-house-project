let BILHETE = JSON.parse(localStorage.getItem('betsim_bilhete')) || [];

document.addEventListener('DOMContentLoaded', () => {
    configurarBilhete();
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
            salvarBilhete(); 
            atualizarInterfaceBilhete();
        });
    }

    if(btnApostar) {
        btnApostar.addEventListener('click', (e) => {
            e.preventDefault();
            
            const usuario = JSON.parse(localStorage.getItem('betsim_usuario'));
            if (!usuario) {
                alert("Faça login para apostar!");
                alert("A Função que você precisa, está em desenvolvimento. Aguarde!");
                return;
            }

            BILHETE = [];
            salvarBilhete(); 
            atualizarInterfaceBilhete();
            
            window.location.reload();
        });
    }
}

function salvarBilhete() {
    localStorage.setItem('betsim_bilhete', JSON.stringify(BILHETE));
}

function gerenciarAposta(idJogo, key, odd, nomeSelecao) {
    const index = BILHETE.findIndex(item => item.idJogo === idJogo && item.key === key);

    if (index !== -1) {
        BILHETE.splice(index, 1);
    } else {
        const conflito = BILHETE.findIndex(item => item.idJogo === idJogo);
        if(conflito !== -1) {
            BILHETE.splice(conflito, 1);
        }

        const jogoInfo = BANCO_DE_DADOS.jogos.find(j => j.id === idJogo);
        if(!jogoInfo) return;

        BILHETE.push({
            idJogo: idJogo,
            key: key,
            odd: odd,
            evento: jogoInfo.evento, 
            selecao: nomeSelecao     
        });
    }

    salvarBilhete(); 
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

    atualizarVisualBotoes();
    calcularGanhos();
}

function atualizarVisualBotoes() {
    document.querySelectorAll('.odd-item').forEach(btn => btn.classList.remove('selecionado'));

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

    const oddTotal = BILHETE.reduce((acc, item) => acc + item.odd, 0);
    
    const bruto = valorAposta * oddTotal;
    const taxa = bruto * 0.05;
    const liquido = bruto - taxa;

    const setText = (id, val) => {
        const el = document.getElementById(id);
        if(el) el.innerText = val;
    };

    setText('total-cotacoes', oddTotal.toFixed(2));
    setText('retorno-bruto-potencial', `R$ ${bruto.toFixed(2)}`);
    setText('valor-encargo-servico', `R$ ${taxa.toFixed(2)}`);
    setText('retorno-liquido-potencial', `R$ ${liquido.toFixed(2)}`);
}