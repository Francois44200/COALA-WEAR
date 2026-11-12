import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "O produto",
    desc: "Materiais, durabilidade, normas",
    items: [
      {
        q: "De que é feita a peça de vestuário COALA?",
        a: "Poliéster técnico (215 g/m²) com forro reforçado nos pontos de esforço. Costura tripla nas quatro zonas de pega. Cordões de ajuste em fita técnica.",
      },
      {
        q: "Quanto tempo dura a peça?",
        a: "Em utilização doméstica: 4 a 6 anos. Em utilização profissional intensiva: 18 a 24 meses. O tecido é lavável na máquina a 40 °C e pode ser seco na máquina em ciclo suave.",
      },
      {
        q: "O COALA é um dispositivo médico?",
        a: "Não. O COALA não é um dispositivo médico na aceção do Regulamento Europeu relativo aos Dispositivos Médicos (UE) 2017/745. É uma peça de vestuário de trabalho técnica e uma inovação francesa patenteada.",
      },
    ],
  },
  {
    id: "usage",
    label: "Utilização e técnica",
    desc: "Para quem, como e com que frequência",
    items: [
      {
        q: "O COALA é adequado para o meu familiar?",
        a: "O COALA é adequado para a maioria das pessoas que precisam de ajuda nas transferências e conseguem participar, pelo menos parcialmente, no movimento, segurando as pegas com as duas mãos. A peça é usada pelo cuidador e existe nos tamanhos XS a 4XL, escolhidos em função de quem a usa. Em situações específicas (úlceras de pressão avançadas, cirurgia recente), peça conselho à equipa de cuidados.",
      },
      {
        q: "É preciso formação para o utilizar?",
        a: "Cada peça é acompanhada de um manual de utilização, e há tutoriais em vídeo online que mostram como utilizá-la corretamente.\n\nPara encomendas de equipas, a Connect Link propõe também uma sessão de formação dedicada aos profissionais e às suas chefias, por videochamada em inglês, depois de recebida a encomenda.",
      },
      {
        q: "Quantas transferências se podem fazer por dia?",
        a: "A peça em si não tem limite. Do lado humano: entre 18 cuidadores acompanhados durante 90 dias, a média foi de 8 transferências por dia com o COALA, sem nenhuma lombalgia registada.",
      },
      {
        q: "Pode ser utilizado com uma cadeira de rodas?",
        a: "Sim. O COALA funciona igualmente bem nas transferências da cama para a cadeira, da cadeira para a sanita e da cadeira para o automóvel. Consulte a nossa página «Como funciona» para ver as 6 situações mais comuns.",
      },
      {
        q: "São precisas duas pessoas para o utilizar?",
        a: "Um cuidador basta para a maioria das transferências. Para pessoas mais pesadas (mais de 100 kg) ou transferências do chão para a cadeira, recomendam-se dois cuidadores.",
      },
    ],
  },
  {
    id: "achat",
    label: "Encomenda e entrega",
    desc: "Encomendas, prazos de entrega, devoluções",
    items: [
      {
        q: "Como posso encomendar?",
        a: "Através da nossa loja online, shop.connectlink.fr (cartão, Apple Pay ou transferência bancária). Para encomendas profissionais, pode também contactar diretamente a nossa equipa através de contact@connectlink.fr.",
      },
      {
        q: "Quanto tempo demora a entrega?",
        a: "Os prazos de entrega e os portes dependem do país e são indicados no momento do pagamento. Pode acompanhar a sua encomenda por e-mail.",
      },
      {
        q: "Posso devolver a minha peça?",
        a: "Sim, no prazo de 14 dias a partir de qualquer país da União Europeia, desde que o produto não tenha sido usado e esteja como novo. Cada devolução é verificada antes de uma troca ou reembolso. Por razões de higiene, a peça é entregue selada.",
      },
      {
        q: "É possível experimentar antes de comprar?",
        a: "Não fazemos empréstimos gratuitos, incluindo a profissionais. No entanto, o produto pode ser devolvido no prazo de 14 dias se não tiver sido usado e estiver como novo.",
      },
    ],
  },
  {
    id: "pros",
    label: "Profissionais e organizações",
    desc: "Lares, hospitais, serviços de apoio domiciliário",
    items: [
      {
        q: "Em quanto tempo recebo um orçamento profissional?",
        a: "Em 2 dias úteis. Um membro da nossa equipa profissional entra em contacto para conhecer o seu contexto e, em seguida, envia um orçamento à medida.",
      },
      {
        q: "A formação está mesmo incluída?",
        a: "A formação justifica-se a partir de 5 profissionais equipados. É conduzida por um ergonomista ou terapeuta ocupacional da rede COALA, por videochamada em inglês, depois de recebida a encomenda, e os materiais de formação são-lhe enviados.",
      },
      {
        q: "Têm condições para organizações com vários locais?",
        a: "Sim. Preços por volume, entregas agrupadas e um interlocutor dedicado para grupos, organizações de cuidados e federações que encomendem 100 peças ou mais.",
      },
      {
        q: "A peça pode ser personalizada (logótipo, nome do serviço)?",
        a: "Sim, há serigrafia ou bordado disponíveis a partir de 25 unidades. Prazo de produção: mais 10 dias úteis.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Lavagem e manutenção",
    desc: "Como lavar, secar e guardar",
    items: [
      {
        q: "A que temperatura se deve lavar o COALA?",
        a: "Lavagem na máquina a 40 °C em ciclo normal, com detergente comum. Sem amaciador (fragiliza as costuras). Sem lixívia.",
      },
      {
        q: "Pode ir à máquina de secar?",
        a: "Sim, apenas em ciclo suave. Idealmente, seque-a na horizontal ou num cabide para manter a forma.",
      },
      {
        q: "E quanto a passar a ferro?",
        a: "Não é necessário. Se preferir, use o ferro a temperatura média e nunca passe a ferro as zonas de pega reforçadas.",
      },
      {
        q: "Como se deve guardar o COALA?",
        a: "Dobrado na horizontal, num local seco. O estojo de transporte individual (incluído nas encomendas profissionais) mantém a peça em bom estado, mesmo dentro de um saco de trabalho.",
      },
    ],
  },
];

export default data;
