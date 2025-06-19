🍁 Painel Interativo de Planejamento de Viagem ao Canadá
Este projeto é um painel interativo desenvolvido para ajudar Felipe e Miriam a planejar e acompanhar suas economias para uma viagem ao Canadá. Ele oferece uma visão clara dos custos estimados, metas de poupança e permite o registro e monitoramento do progresso financeiro de forma dinâmica e persistente.

✨ Funcionalidades
Seleção de Cenário: Alterna entre planos de viagem de 4 ou 8 semanas, atualizando todos os dados financeiros.

Resumo Financeiro: Exibe o custo total estimado da viagem, a meta de poupança (já descontando contribuições extras) e a poupança mensal projetada.

Acompanhamento Mensal Detalhado: Permite inserir os valores economizados mês a mês por Felipe e Miriam, com campos desabilitados para meses que já se passaram, garantindo a integridade dos dados históricos.

Progresso em Tempo Real: Um gráfico de pizza (doughnut chart) mostra visualmente o percentual da meta de poupança atingida com base nos valores inseridos.

Evolução da Poupança: Um gráfico de linha (line chart) ilustra a evolução da poupança acumulada ao longo dos meses, comparando-a com a meta projetada.

Detalhamento de Custos: Um gráfico de barras (bar chart) apresenta a distribuição dos custos por categoria para o cenário de viagem selecionado.

Contribuições Extras: Destaca contribuições financeiras importantes (como 13º salário e bônus) que impulsionam a poupança.

Persistência de Dados: Todos os dados inseridos (cenário e contribuições mensais) são salvos automaticamente no Firestore e carregados na próxima visita, garantindo que o progresso seja mantido.

🚀 Tecnologias Utilizadas
HTML5: Estrutura base do painel.

Tailwind CSS: Framework CSS para estilização e responsividade, garantindo uma interface moderna e adaptável a diferentes tamanhos de tela.

Chart.js: Biblioteca JavaScript para criação dos gráficos interativos (pizza, linha e barras).

JavaScript (Vanilla JS): Lógica principal para manipulação do DOM, interatividade dos botões, cálculos de poupança e integração com o banco de dados.

Firebase (Authentication & Firestore):

Firebase Authentication: Usado para autenticação anônima do usuário, permitindo a separação dos dados por usuário sem a necessidade de login explícito.

Firestore: Banco de dados NoSQL em nuvem utilizado para armazenar de forma persistente o cenário de viagem e as contribuições mensais de poupança, garantindo que o progresso seja salvo e carregado automaticamente.

🖥️ Como Usar o Painel
Acesse o Link: Abra o link do GitHub Pages no seu navegador.

Selecione o Cenário: Clique nos botões "4 Semanas" ou "8 Semanas" para visualizar os custos e metas de poupança para cada duração de viagem.

Insira a Poupança Mensal: Na seção "Detalhar Poupança Mensal de Felipe e Miriam", digite os valores que cada um economizou em seus respectivos meses. O campo "Valor Total Já Economizado" e os gráficos serão atualizados automaticamente.

Observe o Progresso: Monitore o progresso nos gráficos de "Acompanhamento da Poupança Total" e "Evolução da Poupança".

Explore os Custos: Veja o "Detalhamento dos Custos" para entender a distribuição das despesas no cenário escolhido.

Divirtam-se planejando a viagem de vocês!