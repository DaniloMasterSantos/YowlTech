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
  { titulo: "Top 5 Jogos de Apocalipse Zumbi Imperdíveis", resumo: "O último vai te surpreender, com toda certeza!", categoria: "games", data: "2026-10-30", imagem: "imagens/the_last_of_us1.png", url: "conteudo/top_5_jogos_de_apocalipse_zumbi.html", destaque: true, tags: ["zumbi", "top", "apocalipse"] },
  { titulo: "5 apps de IA para organizar sua rotina", resumo: "Opções gratuitas e pagas de alta qualidade.", categoria: "tech", data: "2026-10-30", imagem: "imagens/IA.jpg", url: "conteudo/5_apps_de_IA_para_organizar_sua_rotina.html", destaque: false, tags: ["ia", "inteligência artificial", "produtividade", "apps"] },
  { titulo: "Monte um PC gamer custando menos", resumo: "Configurações para três faixas de orçamento.", categoria: "hardware", data: "2026-10-30", imagem: "imagens/pc_gamer.jpg", url: "conteudo/monte_um_pc_gamer_custando_menos.html", destaque: true, tags: ["pc gamer", "computador", "montagem", "custo-benefício"] },
  { titulo: "Clássicos que merecem um remake", resumo: "Dez jogos que a gente gostaria de rever com gráficos novos.", categoria: "games", data: "2026-10-30", imagem: "imagens/classicos.jpg", url: "conteudo/classicos_que_merecem_um_remake.html", destaque: true, tags: ["remake", "retrô", "clássicos"] },
  { titulo: "Celular intermediário: o que olhar antes de comprar", resumo: "Tela, memória, câmera ...", categoria: "tech", data: "2026-10-30", imagem: "imagens/celular2.jpg", url: "conteudo/celular_intermediario_o_que_olhar_antes_de_comprar.html", destaque: false, tags: ["celular", "smartphone", "guia de compra"] },
  { titulo: "Headsets gamers: qual escolher em 2026?", resumo: "Comparativo de som, microfone e conforto.", categoria: "hardware", data: "2026-10-30", imagem: "imagens/headsetgamer.jpg", url: "conteudo/headset_gamer_2026.html", destaque: false, tags: ["headset", "fone", "áudio", "periféricos"] },
  { titulo: "Lançamentos de Novembro de 2026", resumo: "Nossa seleção do que vale a pena jogar no próximo mês.", categoria: "games", data: "2026-10-30", imagem: "imagens/lancamentos_novembro.png", url: "conteudo/lancamentos_novembro_2026.html", destaque: true, tags: ["lançamentos", "novidades", "calendário"] },
  { titulo: "Qual placa de vídeo comprar em 2027?", resumo: "Comparamos desempenho, consumo e preço em jogos atuais.", categoria: "hardware", data: "2026-10-30", imagem: "imagens/placa_video.jpg", url: "conteudo/qual_placa_video_2027.html", destaque: false, tags: ["placa de vídeo", "gpu", "desempenho"] },
  { titulo: "Como deixar o Wi-Fi de casa mais rápido", resumo: "Pare de passar raiva com a internet", categoria: "tech", data: "2026-09-30", imagem: "imagens/wifi.jpg", url: "conteudo/como_deixar_wifi_rapido.html", destaque: false, tags: ["wifi", "internet", "roteador", "dicas"] },
  { titulo: "SSD ou HD: dá para ficar só com um?", resumo: "Entenda as diferenças e escolha sem desperdiçar dinheiro.", categoria: "hardware", data: "2026-10-30", imagem: "imagens/hd.jpg", url: "conteudo/ssd_ou_hd.html", destaque: false, tags: ["ssd", "hd", "armazenamento"] }
];
