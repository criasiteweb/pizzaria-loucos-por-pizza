/* =========================================================
   Loucos por Pizza — Cardápio (dados)
   Criasiteweb

   Cardápio tirado das fotos do folheto da própria Loucos por Pizza
   (folheto da pizza grande e folheto da pizza broto de 4 pedaços).

   ONDE MEXER EM CADA COISA:
   - preço de um sabor: procure o nome dele na lista CARDAPIO, no fim do arquivo.
     "broto" é a pizza de 4 pedaços, "grande" é a pizza grande.
   - borda: lista BORDAS_SALGADA / BORDAS_DOCE, logo abaixo.
   - sabor novo: copie uma linha inteira de um sabor parecido e troque
     o id, o nome, a descrição e os dois preços.
   ========================================================= */

/* ---------- tamanho ----------
   O folheto tem dois tamanhos: broto de 4 pedaços e grande.
   [CONFIRMAR com o dono: quantos pedaços tem a grande e se a broto pode ser meio a meio] */
const TAMANHOS = [
  { id: "broto",  n: "Broto",  d: "4 pedaços", sabores: 1 },
  { id: "grande", n: "Grande", d: "",          sabores: 2 }
];

/* ---------- borda ----------
   Folheto: borda de requeijão grátis, catupiry original R$ 12,00, cheddar R$ 10,00. */
const BORDA_GRATIS = { n: "Borda de requeijão (grátis)", p: 0 };
const BORDA_SEM    = { n: "Sem borda recheada", p: 0 };
const BORDAS_RECHEADAS_DOCES = [];
const BORDAS_SALGADA = [
  BORDA_GRATIS,
  { n: "Borda de catupiry original", p: 12.00 },
  { n: "Borda de cheddar",           p: 10.00 },
  BORDA_SEM
];
/* [CONFIRMAR com o dono: a pizza doce também leva borda de requeijão grátis?] */
const BORDAS_DOCE = [
  BORDA_SEM
];

/* ---------- acréscimos da pizza ----------
   O folheto não traz acréscimo avulso. [PEDIR ao dono se existe] */
const ADD_PIZZA = [];
const ADD_LANCHE = [];

/* Meio a meio: cobra o sabor mais caro, sem taxa. [CONFIRMAR com o dono] */
const TAXA_MEIO_A_MEIO_BROTO = 0;

/* ---- grupos do cardápio ---- */
const GRUPOS = [
  { id: "salgadas",     rotulo: "Salgadas",     titulo: "Pizzas salgadas",     nota: "Toque num sabor para escolher o tamanho e, na grande, fazer meio a meio. Borda de requeijão grátis." },
  { id: "tradicionais", rotulo: "Tradicionais", titulo: "Pizzas tradicionais", nota: "As pizzas de sempre da casa. Borda de requeijão grátis." },
  { id: "especiais",    rotulo: "Especiais",    titulo: "Pizzas especiais",    nota: "Feitas com catupiry original." },
  { id: "doces",        rotulo: "Doces",        titulo: "Pizzas doces",        nota: "Para fechar a noite. Meio a meio vale com outro doce ou com uma salgada." }
];

/* Nome do item no pedido e na comanda. */
const PREFIXO_NO_PEDIDO = {};
function nomeNoPedido(i) {
  const pre = i && PREFIXO_NO_PEDIDO[i.g];
  return pre ? `${pre} · ${i.n}` : (i ? i.n : "");
}

/* Ingredientes para montar a pizza "Você Faz" (até 6 à escolha).
   Tirados dos ingredientes que aparecem no folheto. */
const INGREDIENTES_FREGUES = [
  "Alho frito", "Atum", "Bacon", "Batata palha", "Brócolis", "Calabresa fatiada",
  "Calabresa moída", "Catupiry", "Cebola", "Champignon", "Cheddar", "Coração de frango",
  "Ervilha", "Frango desfiado", "Lombo", "Manjericão", "Milho", "Mussarela",
  "Ovos", "Palmito", "Parmesão", "Pimenta", "Presunto", "Provolone",
  "Requeijão", "Tomate", "Vinagrete"
];

const CARDAPIO = [
  /* ===================== PIZZAS SALGADAS ===================== */
  { id:"s1",  g:"salgadas", n:"Aurora",              d:"Mussarela e lombo.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s28" },
  { id:"s2",  g:"salgadas", n:"Alemã",               d:"Mussarela, bacon e cebola.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s17" },
  { id:"s3",  g:"salgadas", n:"Alho e Óleo",         d:"Mussarela e alho frito.", pz:true, t:{broto:27.00, grande:47.00}, add:"pizza", f:"salgada-s59" },
  { id:"s4",  g:"salgadas", n:"Americana",           d:"Mussarela, presunto e ovos.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s16" },
  { id:"s5",  g:"salgadas", n:"A Moda do Pizzaiolo", d:"Atum, milho, palmito, mussarela e bacon.", pz:true, t:{broto:34.00, grande:54.00}, add:"pizza", f:"salgada-s63" },
  { id:"s6",  g:"salgadas", n:"A Moda da Casa",      d:"Calabresa, champignon, bacon e mussarela.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s64" },
  { id:"s7",  g:"salgadas", n:"Atum",                d:"Atum e cebola.", pz:true, t:{broto:31.00, grande:51.00}, add:"pizza", f:"salgada-s55" },
  { id:"s8",  g:"salgadas", n:"Bacon",               d:"Mussarela e bacon.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s64" },
  { id:"s9",  g:"salgadas", n:"Baiana",              d:"Calabresa moída, pimenta e cebola.", pz:true, t:{broto:26.00, grande:46.00}, add:"pizza", f:"salgada-s17" },
  { id:"s10", g:"salgadas", n:"Baiacatu",            d:"Calabresa moída, pimenta e requeijão.", pz:true, t:{broto:26.00, grande:46.00}, add:"pizza", f:"salgada-s63" },
  { id:"s11", g:"salgadas", n:"Brasileira",          d:"Mussarela, atum, ervilha e cebola.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s55" },
  { id:"s12", g:"salgadas", n:"Baronesa",            d:"Mussarela, milho, parmesão e bacon.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s28" },
  { id:"s13", g:"salgadas", n:"Bauru",               d:"Presunto, mussarela e tomate.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s55" },
  { id:"s14", g:"salgadas", n:"Cubana",              d:"Calabresa, bacon e parmesão.", pz:true, t:{broto:29.00, grande:49.00}, add:"pizza", f:"salgada-s64" },
  { id:"s15", g:"salgadas", n:"Carbonara",           d:"Calabresa fatiada, ervilha, champignon e mussarela.", pz:true, t:{broto:31.00, grande:51.00}, add:"pizza", f:"salgada-s63" },
  { id:"s16", g:"salgadas", n:"Calabresa",           d:"Calabresa fatiada e cebola.", pz:true, t:{broto:26.00, grande:46.00}, add:"pizza", f:"salgada-s17" },
  { id:"s17", g:"salgadas", n:"Caipira",             d:"Frango, milho, bacon e requeijão.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s12" },
  { id:"s18", g:"salgadas", n:"Crocante de Frango",  d:"Frango desfiado, mussarela e batata palha.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s46" },
  { id:"s19", g:"salgadas", n:"Cheddar",             d:"Mussarela e cheddar.", pz:true, t:{broto:28.00, grande:48.00}, add:"pizza", f:"salgada-s12" },
  { id:"s20", g:"salgadas", n:"Calacatu",            d:"Calabresa fatiada, requeijão, mussarela e cebola.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s63" },
  { id:"s21", g:"salgadas", n:"Da Louca",            d:"Mussarela, presunto, ervilha, bacon e provolone.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s16" },
  { id:"s22", g:"salgadas", n:"Do Louco",            d:"Atum, calabresa fatiada, palmito, ovos, ervilha, mussarela e bacon.", pz:true, t:{broto:36.00, grande:56.00}, add:"pizza", f:"salgada-s64" },
  { id:"s23", g:"salgadas", n:"Do Gueto",            d:"Calabresa moída, ovos, requeijão e pimenta.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s17" },
  { id:"s24", g:"salgadas", n:"Dois Queijos",        d:"Mussarela e requeijão.", pz:true, t:{broto:26.00, grande:46.00}, add:"pizza", f:"salgada-s16" },
  { id:"s25", g:"salgadas", n:"Espanhola",           d:"Atum, milho, cebola, requeijão, mussarela e bacon.", pz:true, t:{broto:36.00, grande:56.00}, add:"pizza", f:"salgada-s28" },
  { id:"s26", g:"salgadas", n:"Executiva",           d:"Frango, palmito, milho e requeijão.", pz:true, t:{broto:34.00, grande:54.00}, add:"pizza", f:"salgada-s12" },
  { id:"s27", g:"salgadas", n:"Frango Requeijão",    d:"Frango desfiado e requeijão.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s12" },
  { id:"s28", g:"salgadas", n:"Frango Mussarela",    d:"Frango desfiado e mussarela.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s28" },
  { id:"s29", g:"salgadas", n:"Francesa",            d:"Mussarela, presunto, ovos e requeijão.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s16" },
  { id:"s30", g:"salgadas", n:"Florença",            d:"Mussarela, presunto, bacon e calabresa.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s64" },
  { id:"s31", g:"salgadas", n:"Italiana",            d:"Calabresa, presunto, bacon e requeijão.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s63" },
  { id:"s32", g:"salgadas", n:"Jardineira",          d:"Frango desfiado, mussarela, tomate e manjericão.", pz:true, t:{broto:34.00, grande:54.00}, add:"pizza", f:"salgada-s48" },
  { id:"s33", g:"salgadas", n:"Lombo",               d:"Lombo e cebola.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s17" },
  { id:"s34", g:"salgadas", n:"Magnífica",           d:"Presunto, frango, cheddar, bacon e mussarela.", pz:true, t:{broto:36.00, grande:56.00}, add:"pizza", f:"salgada-s12" },
  { id:"s35", g:"salgadas", n:"Marguerita",          d:"Mussarela, manjericão e tomate.", pz:true, t:{broto:27.00, grande:47.00}, add:"pizza", f:"salgada-s45" },
  { id:"s36", g:"salgadas", n:"Mussarela",           d:"Mussarela e azeitonas.", pz:true, t:{broto:26.00, grande:46.00}, add:"pizza", f:"salgada-s59" },
  { id:"s37", g:"salgadas", n:"Milho",               d:"Mussarela e milho.", pz:true, t:{broto:26.00, grande:46.00}, add:"pizza", f:"salgada-s28" },
  { id:"s38", g:"salgadas", n:"Mineira",             d:"Calabresa, palmito, cebola e requeijão.", pz:true, t:{broto:31.00, grande:51.00}, add:"pizza", f:"salgada-s63" },
  { id:"s39", g:"salgadas", n:"Namorada",            d:"Mussarela, palmito e requeijão.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s16" },
  { id:"s40", g:"salgadas", n:"Napolitana",          d:"Mussarela, parmesão ralado, tomate e manjericão.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s48" },

  /* ===================== PIZZAS TRADICIONAIS ===================== */
  { id:"t1",  g:"tradicionais", n:"Paulista",            d:"Lombinho, mussarela, requeijão e tomate.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s55" },
  { id:"t2",  g:"tradicionais", n:"Palmito",             d:"Palmito e mussarela.", pz:true, t:{broto:34.00, grande:54.00}, add:"pizza", f:"salgada-s16" },
  { id:"t3",  g:"tradicionais", n:"Primavera",           d:"Palmito, mussarela e tomate.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s45" },
  { id:"t4",  g:"tradicionais", n:"Peruana",             d:"Atum, mussarela e bacon.", pz:true, t:{broto:34.00, grande:54.00}, add:"pizza", f:"salgada-s64" },
  { id:"t5",  g:"tradicionais", n:"Parisiense",          d:"Lombo canadense, bacon, mussarela e champignon.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s63" },
  { id:"t6",  g:"tradicionais", n:"Portuguesa",          d:"Presunto, ervilha, cebola, ovo e mussarela.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s17" },
  { id:"t7",  g:"tradicionais", n:"Portuguesa Especial", d:"Mussarela, presunto, palmito, ervilha, ovos e cebola.", pz:true, t:{broto:35.00, grande:55.00}, add:"pizza", f:"salgada-s17" },
  { id:"t8",  g:"tradicionais", n:"Provolone",           d:"Provolone e mussarela.", pz:true, t:{broto:34.00, grande:54.00}, add:"pizza", f:"salgada-s59" },
  { id:"t9",  g:"tradicionais", n:"Praiana",             d:"Atum, ovos fatiados, cebola e parmesão.", pz:true, t:{broto:35.00, grande:55.00}, add:"pizza", f:"salgada-s55" },
  /* Só no folheto da grande: [CONFIRMAR preço no broto] */
  { id:"t10", g:"tradicionais", n:"4 Queijos",           d:"Mussarela, parmesão, requeijão e provolone. [CONFIRMAR os queijos com o dono]", pz:true, t:{grande:52.00}, add:"pizza", f:"salgada-s59" },
  { id:"t11", g:"tradicionais", n:"4 Estações",          d:"Um quarto de frango com requeijão, um quarto de calabresa, um quarto de frango com mussarela e um quarto de mussarela.", pz:true, t:{grande:55.00}, add:"pizza", f:"salgada-s48" },
  { id:"t12", g:"tradicionais", n:"Siciliana",           d:"Champignon, bacon, tomate e mussarela.", pz:true, t:{grande:54.00}, add:"pizza", f:"salgada-s64" },
  /* Só no folheto do broto: [CONFIRMAR preço na grande] */
  { id:"t13", g:"tradicionais", n:"Palmito Especial",    d:"Palmito, mussarela e catupiry.", pz:true, t:{broto:34.00}, add:"pizza", f:"salgada-s16" },
  { id:"t14", g:"tradicionais", n:"Saborosa",            d:"Calabresa moída, milho, ovos, bacon, pimenta, ervilha e tomate.", pz:true, t:{broto:36.00, grande:56.00}, add:"pizza", f:"salgada-s17" },
  { id:"t15", g:"tradicionais", n:"Sereníssima",         d:"Mussarela, calabresa moída, ervilha, frango e bacon.", pz:true, t:{broto:36.00, grande:56.00}, add:"pizza", f:"salgada-s63" },
  { id:"t16", g:"tradicionais", n:"Toscana",             d:"Calabresa fatiada, mussarela e cebola.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s63" },
  { id:"t17", g:"tradicionais", n:"3 Queijos",           d:"Mussarela, requeijão e parmesão.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s59" },
  { id:"t18", g:"tradicionais", n:"Troiana",             d:"Mussarela, lombo, bacon e requeijão.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s16" },
  { id:"t19", g:"tradicionais", n:"Vegetariana",         d:"Brócolis, palmito, milho e requeijão.", pz:true, t:{broto:34.00, grande:54.00}, add:"pizza", f:"salgada-s28" },
  { id:"t20", g:"tradicionais", n:"Você Faz",            d:"Até 6 ingredientes à sua escolha.", pz:true, t:{broto:45.00, grande:65.00}, add:"pizza", escolherIngredientes:6, f:"salgada-s64" },
  { id:"t21", g:"tradicionais", n:"Verona",              d:"Mussarela, milho, tomate e manjericão.", pz:true, t:{broto:30.00, grande:50.00}, add:"pizza", f:"salgada-s45" },
  { id:"t22", g:"tradicionais", n:"X-Tudo",              d:"Mussarela, presunto, milho, calabresa, bacon, palmito, cheddar e tomate.", pz:true, t:{broto:40.00, grande:60.00}, add:"pizza", f:"salgada-s12" },
  { id:"t23", g:"tradicionais", n:"Brócolis",            d:"Brócolis refogado, alho frito, mussarela e bacon.", pz:true, t:{broto:32.00, grande:52.00}, add:"pizza", f:"salgada-s28" },
  { id:"t24", g:"tradicionais", n:"Batata",              d:"Calabresa, batata, cheddar, mussarela e bacon.", pz:true, t:{broto:40.00, grande:60.00}, add:"pizza", f:"salgada-s46" },
  { id:"t25", g:"tradicionais", n:"Doritos",             d:"Mussarela, cheddar, Doritos e bordas de cheddar.", pz:true, t:{broto:40.00, grande:60.00}, add:"pizza", f:"salgada-s12" },
  { id:"t26", g:"tradicionais", n:"Strogonoff",          d:"Frango desfiado, molho de creme de leite, ketchup e mostarda.", pz:true, t:{broto:34.00, grande:54.00}, add:"pizza", f:"salgada-s22" },

  /* ===================== PIZZAS ESPECIAIS (catupiry original) ===================== */
  { id:"e1", g:"especiais", n:"Atum Especial",       d:"Atum, catupiry e parmesão.", pz:true, t:{broto:41.00, grande:61.00}, add:"pizza", f:"salgada-s55" },
  { id:"e2", g:"especiais", n:"Costela",             d:"Costela, vinagrete, catupiry e mussarela.", pz:true, t:{broto:44.00, grande:64.00}, add:"pizza", f:"salgada-s22" },
  { id:"e3", g:"especiais", n:"Frango Especial",     d:"Frango desfiado, champignon, tomate, bacon, mussarela e catupiry.", pz:true, t:{broto:44.00, grande:64.00}, add:"pizza", f:"salgada-s12" },
  { id:"e4", g:"especiais", n:"Lombo Especial",      d:"Lombo, mussarela e catupiry.", pz:true, t:{broto:40.00, grande:60.00}, add:"pizza", f:"salgada-s16" },
  { id:"e5", g:"especiais", n:"Milho Especial",      d:"Mussarela, milho e catupiry.", pz:true, t:{broto:40.00, grande:60.00}, add:"pizza", f:"salgada-s28" },
  /* Só no folheto da grande: [CONFIRMAR preço no broto] */
  { id:"e6", g:"especiais", n:"Frango com Catupiry", d:"Frango desfiado e catupiry.", pz:true, t:{grande:60.00}, add:"pizza", f:"salgada-s12" },

  /* ===================== PIZZAS DOCES ===================== */
  { id:"d1", g:"doces", n:"Banana",         d:"Banana, leite condensado e canela.", pz:true, t:{broto:30.00, grande:50.00}, f:"doce-d3" },
  { id:"d2", g:"doces", n:"Brigadeiro",     d:"Granulado e chocolate ao leite.", pz:true, t:{broto:28.00, grande:48.00}, f:"doce-d7" },
  { id:"d3", g:"doces", n:"Chocolate",      d:"Chocolate ao leite e creme de leite.", pz:true, t:{broto:28.00, grande:48.00}, f:"doce-d10" },
  { id:"d4", g:"doces", n:"Prestígio",      d:"Chocolate e coco ralado.", pz:true, t:{broto:28.00, grande:48.00}, f:"doce-d25" },
  { id:"d5", g:"doces", n:"Romeu e Julieta",d:"Mussarela e goiabada.", pz:true, t:{broto:28.00, grande:48.00}, f:"doce-d27" },
  { id:"d6", g:"doces", n:"Sonho de Valsa", d:"Chocolate, coco ralado, bombom Sonho de Valsa e creme de leite.", pz:true, t:{broto:35.00, grande:55.00}, f:"doce-d29" },
  { id:"d7", g:"doces", n:"Doce de Leite",  d:"Doce de leite, granulado ou coco ralado.", pz:true, t:{broto:30.00, grande:50.00}, f:"doce-d26" },
];

/* ---- cupons ---- (nenhum no folheto) */
const CUPONS = [];

/* ---- fidelidade ---- */
const FIDELIDADE = { ativa: false, meta: 10, premio: "Uma pizza broto grátis" };

/* ---- taxas de entrega por bairro ---- [PEDIR a tabela ao dono] */
const TAXAS_ENTREGA_BAIRRO = {};
