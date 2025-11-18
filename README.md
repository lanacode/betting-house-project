# 🏆 BetSim - Simulador de Apostas Esportivas
Projeto Acadêmico de Front-End > Um simulador de casa de apostas (Betting House) focado em lógica de interface, manipulação do DOM e persistência de dados no navegador.

# 📖 Sobre o Projeto
O BetSim é uma aplicação web Single Page Application (SPA) simulada, desenvolvida para demonstrar competências avançadas em desenvolvimento Front-End. O projeto permite que usuários naveguem por diferentes esportes, criem contas, gerenciem um saldo virtual e realizem apostas com cálculos em tempo real.Diferente de sites estáticos simples, o BetSim possui um "banco de dados" local e um sistema de autenticação simulado, oferecendo uma experiência completa de uso.

# 🚀 Funcionalidades Principais
- Interface e UXRenderização Dinâmica: Os jogos não são estáticos no HTML. Eles são gerados via JavaScript a partir de um arquivo JSON centralizado.
- Modo Escuro/Claro: Alternância de tema com persistência da preferência do usuário.Responsividade: Layout adaptável para Desktop, Tablet e Mobile (Menu Hambúrguer).
- Roteamento Simulado: Navegação entre categorias (Futebol, Basquete, F1, etc.) carregando conteúdos específicos sem recarregar a página inteira.
- Motor de Apostas (Bilhete)Seleção Interativa: Ao clicar em uma Odd, o botão muda de cor e a aposta vai para o carrinho lateral.
- Cálculos Financeiros:Soma automática das Odds e Cálculo de Retorno Bruto.

# 🛠️ Arquitetura do Projeto
```
simulador-apostas/
│
├── index.html → página principal (menu de esportes)
├── futebol.html → seção de apostas em futebol
├── basquete.html → seção de apostas em basquete
├── tenis.html → seção de apostas em tênis
├── formula1.html → seção de apostas em Fórmula 1
├── esport.html → seção de apostas em e-sports
│
├── /css
│ ├── style.css → estilos gerais
│ ├── esportes.css → estilos dos cards e tabelas de jogos
│ ├── responsivo.css → ajustes para melhor responsividade
│
├── /js
│ ├── main.js → scripts globais (menu, navegação, dark mode)
│ ├── dados.js → JSON fictício com jogos e odds
│ ├── bilhete.js → simulação de apostas com odds e valores ficticios
│
└── /imagens → logo e imagem inicial
```

# 💻 Como Executar o Projeto
Como este é um projeto puramente Front-End, não é necessário instalar dependências .Clone o repositório (ou baixe os arquivos), abra a pasta do projeto e execute o arquivo index.html.

# 👩‍💻 Autores e Desenvolvedores:
- Ilana Nascimento: https://www.linkedin.com/in/ilananascimento
- Mateus Rios:
- João Marcelo:
- Caio Lins
- Luis Fernando: 
