/* ============================================================
   LISTA DE ARTIGOS DA YOWLTECH
   Esta lista alimenta a página inicial (carrossel e "Últimos artigos")
   e a página de busca. Para publicar um artigo novo, copie um bloco
   { ... }, cole no topo e preencha:
     titulo, resumo, categoria (games | tech | hardware),
     data (AAAA-MM-DD), imagem (caminho da foto de capa), url (link do artigo),
     tags (palavras extras para a busca) e destaque (true = aparece no carrossel).
   As páginas dos artigos ficam na pasta "conteudo". Por isso, o url de cada
   artigo é o caminho a partir da pasta principal: url: "conteudo/nome-da-pagina.html".
   Enquanto o artigo não tiver página, deixe url: "#".
   Foto de capa: coloque o arquivo na pasta "imagens" e use o tamanho 800x450
   (proporção 16:9) em .jpg, .png ou .webp.
   ============================================================ */
const ARTIGOS = [
  { titulo: "Review: o RPG indie que surpreendeu", resumo: "Vale o preço? Contamos tudo depois de 30 horas de jogo.", categoria: "games", data: "2026-10-18", imagem: "imagens/rpg-indie.svg", url: "#", destaque: true, tags: ["rpg", "indie", "review"] },
  { titulo: "5 apps de IA para organizar sua rotina", resumo: "Opções gratuitas e pagas, testadas na prática.", categoria: "tech", data: "2026-10-16", imagem: "imagens/apps-ia-rotina.svg", url: "#", destaque: false, tags: ["ia", "inteligência artificial", "produtividade", "apps"] },
  { titulo: "Monte um PC gamer custando menos", resumo: "Configurações para três faixas de orçamento.", categoria: "hardware", data: "2026-10-14", imagem: "imagens/pc-gamer-barato.svg", url: "#", destaque: true, tags: ["pc gamer", "computador", "montagem", "custo-benefício"] },
  { titulo: "Clássicos que merecem um remake", resumo: "Dez jogos que a gente gostaria de rever com gráficos novos.", categoria: "games", data: "2026-10-11", imagem: "imagens/remakes.svg", url: "#", destaque: false, tags: ["remake", "retrô", "clássicos"] },
  { titulo: "Celular intermediário: o que olhar antes de comprar", resumo: "Tela, bateria e câmera: onde vale gastar mais.", categoria: "tech", data: "2026-10-09", imagem: "imagens/celular-intermediario.svg", url: "#", destaque: false, tags: ["celular", "smartphone", "guia de compra"] },
  { titulo: "Headsets gamers: qual escolher?", resumo: "Comparativo de som, microfone e conforto.", categoria: "hardware", data: "2026-10-07", imagem: "imagens/headsets.svg", url: "#", destaque: false, tags: ["headset", "fone", "áudio", "periféricos"] },
  { titulo: "Os lançamentos que vão dominar o fim do ano", resumo: "Nossa seleção do que vale a pena jogar nos próximos meses.", categoria: "games", data: "2026-10-05", imagem: "imagens/lancamentos.svg", url: "#", destaque: false, tags: ["lançamentos", "novidades", "calendário"] },
  { titulo: "Qual placa de vídeo compensa comprar agora?", resumo: "Comparamos desempenho, consumo e preço em jogos atuais.", categoria: "hardware", data: "2026-10-02", imagem: "imagens/placa-de-video.svg", url: "#", destaque: false, tags: ["placa de vídeo", "gpu", "desempenho"] },
  { titulo: "IA no dia a dia: ferramentas que realmente ajudam", resumo: "Testamos assistentes e apps para estudo, trabalho e criação.", categoria: "tech", data: "2026-09-28", imagem: "imagens/ia-dia-a-dia.svg", url: "#", destaque: true, tags: ["ia", "assistentes", "estudo"] },
  { titulo: "Como deixar o Wi-Fi de casa mais rápido", resumo: "Ajustes simples no roteador e na posição dos aparelhos.", categoria: "tech", data: "2026-09-24", imagem: "imagens/wifi-rapido.svg", url: "#", destaque: false, tags: ["wifi", "internet", "roteador", "dicas"] },
  { titulo: "Jogos cooperativos para jogar com os amigos", resumo: "Seleção para PC e consoles, de leves a desafiadores.", categoria: "games", data: "2026-09-20", imagem: "imagens/jogos-coop.svg", url: "#", destaque: false, tags: ["coop", "multiplayer", "amigos"] },
  { titulo: "SSD ou HD: dá para ficar só com um?", resumo: "Entenda as diferenças e escolha sem desperdiçar dinheiro.", categoria: "hardware", data: "2026-10-30", imagem: "imagens/hd.jpg", url: "conteudo/ssd_ou_hd.html", destaque: false, tags: ["ssd", "hd", "armazenamento"] }
];
