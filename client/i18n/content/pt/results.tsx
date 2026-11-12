import type { ResultsCopy } from "../results";

const TRANSLATED = " (traduzido do francês)";

const copy: ResultsCopy = {
  hero: {
    eyebrow: "Provas e testemunhos",
    title: (
      <>
        O que dizem<br />
        as pessoas que <em>o usam</em><br />
        no dia a dia.
      </>
    ),
    lede: "Cuidadores familiares, auxiliares de cuidados, diretores de lares. Testemunhos reais e números medidos no terreno.",
    ctaOrder: "Encomendar COALA",
    ctaTestimonials: "Ler os testemunhos",
    imageAlt: "Cuidador com a peça de vestuário de transferência COALA durante uma transferência",
  },
  stats: [
    {
      value: "95%",
      label: "referem um impacto positivo na saúde e nas condições de trabalho",
      source: "Estudo ARACT 2026, 48 profissionais de cuidados",
    },
    {
      value: "65%",
      label: "dos pacientes são elegíveis para o COALA em transferências ou reposicionamento na cama",
      source: "Estudo Connect Link 2024, 95 pacientes",
    },
    {
      value: "0",
      label: "incidentes adversos registados desde novembro de 2024",
      source: "Acompanhamento de clientes Connect Link e estudo ARACT 2026",
    },
    {
      value: "665",
      label: "pacientes acompanhados com o COALA durante o estudo de impacto ARACT 2026",
      source: "Estudo ARACT 2026",
    },
  ],
  pullQuote: {
    text: "Disseram-me que era uma ajuda de conforto. Não é. É uma ajuda de segurança, tanto para a pessoa ajudada como para o cuidador. Medi a diferença.",
    name: "Dr. Arnaud V.",
    role: "Médico coordenador · Lar sem fins lucrativos · Hauts-de-France" + TRANSLATED,
  },
  testimonials: {
    eyebrow: "Testemunhos",
    title: (
      <>
        Experimentaram.<br />
        Eis o que <em>pensam</em>.
      </>
    ),
    badgePro: "Profissional de cuidados",
    badgeFamily: "Cuidador familiar",
    ratingLabel: (rating) => `${rating} de 5 estrelas`,
    items: [
      {
        quote: "Cuido do meu marido há quatro anos. Da primeira vez que usei o COALA numa transferência da cama para a cadeira, percebi que não precisava de me tornar fisioterapeuta. Precisava apenas de uma ferramenta pensada para o meu próprio corpo.",
        name: "Hélène M.",
        role: "Cuidadora familiar" + TRANSLATED,
        location: "Nantes",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Equipámos as nossas 12 auxiliares de cuidados com o COALA há oito meses. As baixas médicas diminuíram para metade. Foi a única coisa que mudámos nas nossas práticas nesse ano.",
        name: "Isabelle R.",
        role: "Responsável de serviço de apoio domiciliário (SAAD)" + TRANSLATED,
        location: "Lyon",
        type: "pro",
        rating: 5,
      },
      {
        quote: "A minha mãe é pesada e eu fazia as transferências sozinho. Não queria colocá-la num lar. O COALA deu-nos mais dois anos em casa do que esperávamos.",
        name: "Patrick D.",
        role: "Cuidador familiar, filho" + TRANSLATED,
        location: "Bordéus",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "A formação incluída é o que faz a diferença. Em 60 minutos, as minhas equipas compreenderam a técnica. Desde a implementação, não tivemos um único incidente em transferências.",
        name: "Dr. Arnaud V.",
        role: "Médico coordenador, lar" + TRANSLATED,
        location: "Hauts-de-France",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Sinceramente, estava cética. Uma peça de vestuário para isso? Mas, ao fim da primeira semana, já não me imagino a trabalhar sem ela. A pega é mesmo diferente.",
        name: "Sylvie T.",
        role: "Ajudante de apoio domiciliário, ADMR" + TRANSLATED,
        location: "Bretanha",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Integrámo-lo no nosso processo de acolhimento. Cada novo profissional recebe a sua peça de vestuário no primeiro dia. Para as nossas equipas de cuidados, é um verdadeiro equipamento de proteção individual.",
        name: "Claire B.",
        role: "Diretora, serviço de enfermagem ao domicílio" + TRANSLATED,
        location: "Estrasburgo",
        type: "pro",
        rating: 5,
      },
      {
        quote: "Mudou a minha relação com o meu pai. Antes, as transferências deixavam-me ansiosa, e a ele também. Agora fazemo-las com mais calma. Este pequeno pormenor mudou muita coisa.",
        name: "Amina K.",
        role: "Cuidadora familiar, filha" + TRANSLATED,
        location: "Paris",
        type: "aidant",
        rating: 5,
      },
      {
        quote: "Temos três unidades na Bretanha e 60 peças de vestuário em utilização. O feedback das equipas no terreno é unânime. A técnica é mais precisa e os acidentes de trabalho ligados à movimentação manual praticamente desapareceram.",
        name: "François L.",
        role: "Diretor de lar, grupo do setor mutualista" + TRANSLATED,
        location: "Bretanha",
        type: "pro",
        rating: 5,
      },
    ],
  },
  cases: {
    eyebrow: "Casos de estudo no terreno",
    title: (
      <>
        Resultados<br />
        <em>medidos</em>, não estimados.
      </>
    ),
    items: [
      {
        tag: "Prestador de cuidados · Enfermagem ao domicílio",
        title: "10 auxiliares de ação médica formados, zero baixas médicas em 18 meses",
        body: "Um grupo hospitalar do norte de França implementou o COALA no seu serviço de enfermagem ao domicílio (SSIAD) e no serviço de hospitalização domiciliária (HAD), após um teste de seis semanas no terreno com quatro profissionais de cuidados voluntários. Resultado: nenhuma baixa médica por problemas lombares após a implementação, contra três casos no mesmo período do ano anterior.",
        metrics: [
          { v: "0", l: "baixas médicas por LME e problemas lombares" },
          { v: "18 meses", l: "de acompanhamento do grupo" },
          { v: "10", l: "profissionais de cuidados equipados e formados" },
        ],
      },
      {
        tag: "Cuidador familiar · Domicílio",
        title: "Mais dois anos em casa para uma família perto de Bordéus",
        body: "Patrick D. cuidava sozinho da mãe, com 87 kg. As transferências diárias da cama para a cadeira estavam a tornar-se fisicamente impossíveis. Depois de começar a usar o COALA e de uma chamada com a terapeuta ocupacional da Connect Link, conseguiu continuar a cuidar dela em casa, sem a colocar num lar, durante mais 26 meses.",
        metrics: [
          { v: "+26", l: "meses em casa" },
          { v: "1", l: "cuidador sozinho" },
          { v: "87 kg", l: "pessoa ajudada" },
        ],
      },
    ],
  },
  trust: {
    label: "Utilizado por organizações que confiam no COALA",
    ariaLabel: "Parceiros e organizações que utilizam o COALA",
    awardsLabel: "Prémios e distinções",
    awardsAriaLabel: "Prémios e distinções",
    awards: [
      "Vencedor do Silver Eco Festival 2024",
      "Silver Surfer",
      "Innovation & Prévention (I&P)",
      "French Tech 2023",
      "Prémio Santexpo FHF 2026",
      "Prémio Janus, Institut Français du Design 2026",
      "Prémio Salon SAP 2024",
    ],
  },
  finalCta: {
    eyebrow: "Pronto para experimentar?",
    title: (
      <>
        14 dias para tirar<br />
        as suas próprias <em>conclusões</em>.
      </>
    ),
    lede: "Pode devolvê-lo no prazo de 14 dias, em qualquer país da União Europeia, se a peça não tiver sido usada. Demonstração por videochamada, em inglês, após a receção da encomenda.",
    ctaOrder: "Encomendar COALA · desde 129 €",
    ctaQuote: "Pedir orçamento",
  },
  crossLinks: [
    { eyebrow: "A peça em pormenor", title: "Página completa do produto" },
    { eyebrow: "Vai equipar uma equipa de cuidados?", title: "Orçamentos profissionais em 48 horas" },
    { eyebrow: "Tem dúvidas?", title: "FAQ completas" },
  ],
};

export default copy;
