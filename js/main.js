// Arquivo: js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. VERIFICAÇÃO DE LOGIN (Importante para esconder botão Entrar)
    // O usuario.js precisa ter sido carregado antes
    if (typeof UsuarioManager !== 'undefined') {
        UsuarioManager.atualizarInterfaceHeader();
    }

    // 2. Inicializa elementos visuais (Tema, Menu, Links)
    inicializarInterface();

    // 3. ROTEADOR: Decide o que mostrar na tela
    const url = window.location.pathname;

    if (url.includes('futebol.html')) {
        renderizarPaginaEspecifica('Futebol');
    } 
    else if (url.includes('basquete.html')) {
        renderizarPaginaEspecifica('Basquete');
    } 
    else if (url.includes('tenis.html')) {
        renderizarPaginaEspecifica('Tênis');
    } 
    else if (url.includes('formula1.html')) {
        renderizarPaginaEspecifica('Fórmula 1');
    } 
    else if (url.includes('esport.html')) {
        renderizarPaginaEspecifica('E-Sports');
    } 
    else {
        // Home (index.html)
        renderizarHomeVitrine();
    }
});

// --- FUNÇÃO 1: RENDERIZA A HOME (VITRINE) ---
function renderizarHomeVitrine() {
    const container = document.getElementById('lista-eventos');
    if (!container) return;
    
    container.innerHTML = ''; 

    const categorias = [
        { nome: 'Futebol', link: 'futebol.html' },
        { nome: 'Basquete', link: 'basquete.html' },
        { nome: 'Tênis', link: 'tenis.html' },
        { nome: 'Fórmula 1', link: 'formula1.html' },
        { nome: 'E-Sports', link: 'esport.html' }
    ];

    categorias.forEach(categoria => {
        const jogos = BANCO_DE_DADOS.jogos.filter(j => 
            j.esporte.toLowerCase() === categoria.nome.toLowerCase() && 
            j.destaque === true
        );

        if (jogos.length === 0) return;

        const sectionGroup = document.createElement('section');
        sectionGroup.className = 'sport-group';
        sectionGroup.innerHTML = `<h2>${categoria.nome.toUpperCase()}</h2>`;

        jogos.slice(0, 2).forEach(jogo => {
            sectionGroup.appendChild(criarCardHTML(jogo));
        });

        const linkMore = document.createElement('a');
        linkMore.href = categoria.link;
        linkMore.className = 'more-events-link';
        linkMore.innerText = `ver mais jogos de ${categoria.nome.toLowerCase()}`;
        sectionGroup.appendChild(linkMore);

        container.appendChild(sectionGroup);
    });

    // INTEGRACAO COM BILHETE: Recupera cores amarelas se já houver apostas
    if(typeof atualizarVisualBotoes === 'function') {
        atualizarVisualBotoes();
    }
}

// --- FUNÇÃO 2: RENDERIZA PÁGINA ESPECÍFICA ---
function renderizarPaginaEspecifica(esporteAlvo) {
    const container = document.getElementById('lista-eventos');
    if (!container) return;
    
    container.innerHTML = '';

    const jogosDoEsporte = BANCO_DE_DADOS.jogos.filter(j => 
        j.esporte.toLowerCase() === esporteAlvo.toLowerCase()
    );

    if (jogosDoEsporte.length === 0) {
        container.innerHTML = `<div class="loading-placeholder">Nenhum jogo de ${esporteAlvo} encontrado.</div>`;
        return;
    }

    const ligas = {};
    jogosDoEsporte.forEach(jogo => {
        if (!ligas[jogo.liga]) ligas[jogo.liga] = [];
        ligas[jogo.liga].push(jogo);
    });

    for (const [nomeLiga, jogosDaLiga] of Object.entries(ligas)) {
        const sectionGroup = document.createElement('section');
        sectionGroup.className = 'sport-group';
        sectionGroup.innerHTML = `<h2>${nomeLiga}</h2>`;

        jogosDaLiga.forEach(jogo => {
            sectionGroup.appendChild(criarCardHTML(jogo));
        });

        container.appendChild(sectionGroup);
    }

    // INTEGRACAO COM BILHETE
    if(typeof atualizarVisualBotoes === 'function') {
        atualizarVisualBotoes();
    }
}

// --- FUNÇÃO AUXILIAR: CRIA O HTML DO CARD ---
function criarCardHTML(jogo) {
    const card = document.createElement('article');
    card.className = 'card-jogo';
    card.setAttribute('data-event-id', jogo.id);

    let nomeCasa = jogo.evento;
    let nomeFora = '';
    let isVersus = jogo.evento.includes(' x ');

    if (isVersus) {
        const p = jogo.evento.split(' x ');
        nomeCasa = p[0];
        nomeFora = p[1];
    }

    const mercado = jogo.mercados[0];
    let labelsHTML = '';
    let valuesHTML = '';

    mercado.opcoes.slice(0, 3).forEach(op => {
        let label = op.tipo;
        const k = op.selecao_key;
        
        if (['home','p1','t1','v_ver'].some(key => key === k)) label = '1';
        else if (k === 'draw') label = 'X';
        else if (['away','p2','t2','v_ham'].some(key => key === k)) label = '2';

        labelsHTML += `<li>${label}</li>`;
        
        // ID Único para o botão (usado pelo bilhete.js para pintar de amarelo)
        const btnId = `odd-${jogo.id}-${op.selecao_key}`;
        
        // AQUI ESTÁ A MÁGICA: Chama gerenciarAposta do bilhete.js
        valuesHTML += `
            <li class="odd-item" 
                id="${btnId}"
                onclick="gerenciarAposta(${jogo.id}, '${op.selecao_key}', ${op.odd}, '${op.tipo}')">
                ${op.odd.toFixed(2)}
            </li>
        `;
    });

    card.innerHTML = `
        <figure class="team-presentation" style="${!isVersus ? 'justify-content:center':''}">
            <figure class="team-item team-home">
                <div class="team-icon-placeholder">${jogo.icone}</div>
                <figcaption>${nomeCasa}</figcaption>
            </figure>
            ${isVersus ? `
            <p class="match-center-info">
                <span class="score-ficticio">vs</span>
                <small class="liga-tag">${jogo.hora}</small>
            </p>
            <figure class="team-item team-away">
                <div class="team-icon-placeholder">${jogo.icone}</div>
                <figcaption>${nomeFora}</figcaption>
            </figure>
            ` : `
            <p class="match-center-info" style="margin-left:15px">
                <small class="liga-tag">${jogo.hora}</small>
            </p>
            `}
        </figure>
        <section class="mercado-cotacoes">
            <ul class="odd-labels">${labelsHTML}</ul>
            <ul class="odd-values">${valuesHTML}</ul>
        </section>
    `;
    
    return card;
}

// --- FUNÇÃO AUXILIAR: GERENCIA A INTERFACE (TEMA, MENU, LINKS) ---
function inicializarInterface() {
    // 1. TEMA ESCURO
    const btnTema = document.getElementById('btn-tema');
    const body = document.body;
    const CHAVE_TEMA = 'betsim_tema';

    if (localStorage.getItem(CHAVE_TEMA) === 'escuro') {
        body.classList.add('dark-mode');
        if (btnTema) btnTema.textContent = '☀️';
    }

    if (btnTema) {
        btnTema.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem(CHAVE_TEMA, 'escuro');
                btnTema.textContent = '☀️';
                btnTema.setAttribute('aria-label', 'Alternar para Modo Claro');
            } else {
                localStorage.setItem(CHAVE_TEMA, 'claro');
                btnTema.textContent = '🌙';
                btnTema.setAttribute('aria-label', 'Alternar para Modo Escuro');
            }
        });
    }

    // 2. MENU MOBILE
    const btnMobile = document.getElementById('btn-mobile');
    const nav = document.getElementById('nav-principal');
    if (btnMobile && nav) {
        btnMobile.addEventListener('click', () => {
            const estaAtivo = nav.classList.toggle('ativa');
            btnMobile.classList.toggle('ativo');
            btnMobile.setAttribute('aria-expanded', estaAtivo);
        });
    }

    // 3. LINK ATIVO
    const links = document.querySelectorAll('.navegacao-principal a');
    const urlAtual = window.location.href;
    links.forEach(link => {
        link.classList.remove('ativo');
        if (link.href === urlAtual) {
            link.classList.add('ativo');
        }
    });
}

