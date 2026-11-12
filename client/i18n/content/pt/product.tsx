import type { ProductCopy } from "../product";

const copy: ProductCopy = {
  buy: {
    viewLabels: [
      "Peça de vestuário de transferência COALA, vista de frente, com as quatro zonas de pega abertas",
      "Peça de vestuário de transferência COALA, vista de três quartos, com as quatro zonas de pega abertas",
      "Peça de vestuário de transferência COALA com as pegas recolhidas, vista de frente",
      "Estrutura de exoesqueleto interna da peça de vestuário de transferência COALA",
      "Peça de vestuário de transferência COALA usada por um profissional de cuidados, com as zonas de pega abertas",
      "COALA usado com as pegas recolhidas, com o aspeto de uma roupa de trabalho comum",
      "Pormenor de uma zona de pega no ombro",
      "Profissional de cuidados a amparar um paciente com a peça de vestuário de transferência COALA",
    ],
    refPrefix: "COALA · ref.ª CL-B137-BLANC-",
    thumbsAria: "Vistas do produto",
    eyebrow: "Vestuário de transferência",
    title: (
      <>
        A peça de vestuário de transferência <em>COALA</em>
      </>
    ),
    lede:
      "Uma peça de vestuário têxtil concebida para as transferências. Quatro zonas de pega reforçadas e uma estrutura de exoesqueleto que protege o cuidador. O COALA não se vê nem se sente, mas protege sempre que é preciso.",
    price: "desde 129 €",
    priceMeta: "IVA incluído",
    sizeLabel: "Tamanho",
    sizeGuide: "Guia de tamanhos ↗",
    sizeAria: "Escolher um tamanho",
    colourLabel: "Cor · Branco",
    colourNote: "De momento, o COALA está disponível apenas em branco.",
    ctaOrder: "Encomendar COALA",
    ctaQuote: "Pedir orçamento",
    reassuranceAria: "Os nossos compromissos",
    reassurance: [
      "Devolução gratuita em 14 dias em toda a UE",
      "Inovação francesa patenteada",
      "Lavável na máquina a 40 °C",
    ],
  },

  features: {
    eyebrow: "Concebido por cuidadores, para cuidadores",
    title: (
      <>
        Quatro escolhas técnicas,
        <br />
        um único <em>objetivo</em>.
      </>
    ),
    items: [
      {
        tag: "01 · Ação a quatro mãos",
        title: "Um movimento partilhado: a pessoa segura-se",
        body: "O COALA é usado pelo cuidador e a pessoa ajudada segura as pegas. O cuidador guia a manobra com o peso do corpo em vez de levantar, e o movimento torna-se um esforço partilhado. Quatro zonas de pega, com pegas posicionadas nos ombros, nos flancos e nas ancas.",
        label: "As quatro zonas de pega reforçadas da peça de vestuário de transferência COALA",
      },
      {
        tag: "02 · Roupa de trabalho",
        title: "Apenas mais 200 g, sem tempo de preparação",
        body: "O COALA veste-se como uma roupa de trabalho comum, em poucos segundos. Durante a mobilização, acaba o esforço nos ombros e na zona lombar, sem fixações mecânicas nem formações demoradas. Pronto a usar de imediato, em qualquer lugar.",
        label: "Peça de vestuário de transferência COALA com as pegas recolhidas, com o aspeto de uma roupa de trabalho comum",
      },
      {
        tag: "03 · Apoio que se desativa",
        title: "Solto em 5 segundos",
        body: "Terminadas as transferências, o cuidador solta as zonas de apoio e recolhe as pegas de imediato. Uma vez solto, não exerce qualquer compressão: o COALA é impercetível para quem o usa e invisível para os outros.",
        label: "Arnês interno da peça de vestuário de transferência COALA, solto em cinco segundos",
      },
      {
        tag: "04 · Assistência completa",
        title: "Ajuda o cuidador sem substituir o contacto humano",
        body: "O COALA apoia o movimento do cuidador sem alterar a forma como presta os cuidados. Tecido técnico de poliéster 215 g/m², lavável a 40 °C, tamanhos do XS ao 4XL.",
        label: "Profissional de cuidados com o COALA a acompanhar uma pessoa idosa até ao seu andarilho",
      },
    ],
  },

  range: {
    eyebrow: "A gama",
    title: (
      <>
        Três modelos, um mesmo <em>movimento</em>.
      </>
    ),
    lede:
      "O arnês e o tecido variam consoante a intensidade de utilização. Todos os modelos existem nos tamanhos XS a 4XL (34 a 64 em tamanhos franceses), são laváveis na máquina a 40 °C e compatíveis com a recomendação R.47 da HAS.",
    badge: "O mais procurado",
    imgAlt: (name) => `Peça de vestuário de transferência ${name} em utilização`,
    vat: "IVA incluído",
    harnessLabel: "Arnês",
    fabricLabel: "Tecido",
    supportLabel: "Acompanhamento",
    cta: "Encomendar COALA",
    models: [
      { audience: "Cuidadores familiares", harness: "1 mm", fabric: "50% algodão · 50% poliéster", support: "Manual de utilização incluído" },
      { audience: "Profissionais de cuidados e cuidadores regulares", harness: "1 mm, forrado a algodão", fabric: "50% algodão · 50% poliéster", support: "Manual de utilização incluído" },
      { audience: "Profissionais de cuidados", harness: "2 mm, forrado a CoolTex®", fabric: "Tecido técnico CoolTex®", support: "Formação e acompanhamento" },
    ],
    noteBefore: "O arnês pesa cerca de 200 g e fica operacional em cerca de dez segundos. Para equipar uma organização, ",
    noteLink: "peça um orçamento",
    noteAfter: " em vez de fazer uma encomenda individual.",
  },

  go: {
    badge: "Brevemente",
    subtitle: (
      <>
        O colete que protege a sua saúde para melhor proteger os <em>outros</em>.
      </>
    ),
    priceValue: "Preço sob consulta",
    priceCta: "Pedir preço",
    lede:
      "Desenvolvido com e para as equipas de ambulância, o COALA Go integra o sistema COALA num colete de alta visibilidade: um arnês interno e pegas exteriores que reduzem a carga sobre as costas e limitam o risco de lesões.",
    photoAlt: "Tripulante de ambulância com o colete COALA Go",
    benefits: [
      { title: "Reduz o esforço nas costas", detail: "O sistema COALA transfere as forças dos ombros para a bacia e a zona lombar." },
      { title: "Limita o risco de LME", detail: "Pegas exteriores para uma pega mais firme e menos tensão." },
      { title: "Apoio e segurança", detail: "Um sistema integrado, discreto e sempre disponível debaixo do colete." },
      { title: "Conforto no dia a dia", detail: "Corte ergonómico, zonas respiráveis e forro em malha que acompanham os movimentos." },
    ],
    specs: [
      { label: "Sistema COALA", value: "Arnês interno dissimulado · pegas retráteis" },
      { label: "Visibilidade", value: "Bandas retrorrefletoras · 360°" },
      { label: "Bolsos", value: "Bolsos de peito com fecho · bolsos inferiores grandes com fecho" },
      { label: "Materiais", value: "100% poliéster resistente e hidrorrepelente · forro em malha respirável" },
      { label: "Cor", value: "Azul-marinho" },
      { label: "Tamanhos", value: "XS a 4XL · corte unissexo direito" },
      { label: "Manutenção", value: "Lavável na máquina a 60 °C" },
    ],
    usagesTitle: "Para cada intervenção",
    usages: [
      "Mobilização de pacientes",
      "Transporte em maca",
      "Levantamentos e transferências",
      "Urgências no domicílio",
      "Situações de emergência",
    ],
    note:
      "O COALA Go ainda não está disponível para compra online. Contacte-nos para ser informado da sua disponibilidade e receber uma proposta adaptada ao seu serviço.",
  },

  compare: {
    eyebrow: "Porque não uma máquina ou uma farda de trabalho comum?",
    title: (
      <>
        As transferências merecem
        <br />
        uma <em>ferramenta própria</em>.
      </>
    ),
    lede:
      "Comparámos o COALA com as duas práticas mais comuns no terreno. Eis como se comportam na utilização real.",
    coalaSub: "Vestuário de transferência",
    machineBrand: "Elevador de transferência",
    machineSub: "Ajuda técnica de elevação mecânica",
    classicBrand: "Farda de trabalho comum",
    classicSub: "Médica ou de tecido",
    rows: [
      {
        label: "Movimento de transferência",
        coala: "A pessoa ajudada participa ativamente, enquanto o cuidador guia a transferência com o peso do corpo, costas direitas e abdominais contraídos, sem esforço nos ombros nem nos braços.",
        machine: "Flexão das costas e dos braços ao colocar as cintas.\nSem gesto de mobilização.",
        classic: "Transferência manual sem ajuda.\nCarga suportada com as costas fletidas e os braços a puxar.",
      },
      {
        label: "Preservação da dignidade",
        coala: "A pessoa ajudada participa ativamente, o que beneficia a saúde do cuidador.\nUma relação mais equilibrada entre o cuidador e a pessoa cuidada.\nO contacto visual mantém-se.",
        machine: "A máquina faz todo o trabalho durante a transferência.\nSem contacto humano.\nA dependência de uma máquina pode ser difícil de aceitar.",
        classic: "Contacto humano que põe em risco o profissional de cuidados.\nSem contacto visual.",
      },
      {
        label: "Esforço nas costas, ombros e braços",
        coala: "Acabam a flexão das costas e o esforço ativo dos braços.\nCostas direitas, abdominais contraídos e mãos livres.",
        machine: "Sem movimentos de força.\nColocação e remoção das cintas, manobra da máquina.",
        classic: "Gestos de mobilização, esforços e tensões que provocam lombalgias e LME dos ombros e dos braços.",
      },
      {
        label: "Duração da transferência",
        coala: "35 segundos para levantar uma pessoa e sentá-la numa cadeira",
        machine: "3 minutos e 40 segundos para levantar uma pessoa e sentá-la numa cadeira",
        classic: "25 segundos para levantar uma pessoa e sentá-la numa cadeira",
      },
      {
        label: "Conceção",
        coala: "Inovação francesa patenteada",
        machine: "Concebido e fabricado à escala mundial",
        classic: "Fabricado à escala mundial",
      },
      {
        label: "Custo em 3 anos (5 cuidadores)",
        coala: "~1650 € · pagamento único",
        machine: "~10 000 €",
        classic: "~640 € · consumíveis",
      },
    ],
  },

  specs: {
    eyebrow: "Características técnicas",
    title: "Tudo o que é preciso, nada a mais.",
    items: [
      { label: "Composição", value: "Poliéster técnico 215 g/m² · forro reforçado" },
      { label: "Tamanhos disponíveis", value: "XS · S · M · L · XL · XXL · 3XL · 4XL (34 a 64 em tamanhos franceses)" },
      { label: "Cor", value: "Branco" },
      { label: "Lavagem", value: "Lavagem na máquina a 40 °C · secagem na máquina em ciclo delicado" },
      { label: "Conceção", value: "Inovação francesa patenteada · Connect Link" },
    ],
    download: "Descarregar a ficha técnica (PDF)",
    guideEyebrow: "Guia de tamanhos",
    guideTitle: "Escolher o tamanho certo.",
    guideIntro: (
      <>
        O COALA é usado <em>pelo cuidador ou profissional de cuidados</em>: meça, por isso, a pessoa
        que vai usar a peça. Se estiver entre dois tamanhos, escolha o maior.
      </>
    ),
    toggleAria: "Tabela de tamanhos",
    women: "Mulher",
    men: "Homem",
    tableAria: (morpho) => `Tabela de tamanhos COALA: ${morpho}`,
    colSize: "Tamanho",
    colConfection: "Tamanho francês",
    colChest: "Peito",
    colWaist: "Cintura",
    point: "Grau",
    note: "Medidas corporais, em centímetros.",
  },

  quote: {
    text: "Cuido do meu marido há quatro anos. Da primeira vez que usei o COALA para o passar da cama para o cadeirão, percebi que não precisava de me tornar fisioterapeuta. Precisava apenas de uma ferramenta pensada para o meu próprio corpo.",
    name: "Hélène, 67 anos",
    role: "Cuidadora familiar · Nantes (traduzido do francês)",
  },

  faq: {
    eyebrow: "Perguntas sobre a peça de vestuário",
    title: (
      <>
        As perguntas
        <br />
        que nos fazem
        <br />
        <em>mais vezes</em>.
      </>
    ),
    cta: "Ver todas as perguntas",
    items: [
      {
        q: "O COALA é adequado para o meu familiar?",
        a: "O COALA é usado pelo cuidador e serve para ajudar qualquer pessoa que precise de assistência nas transferências e consiga segurar as pegas, seja totalmente ou parcialmente autónoma. A peça existe nos tamanhos XS a 4XL, escolhidos para o cuidador. Em situações específicas (úlceras de pressão avançadas, cirurgia recente), peça conselho à equipa de cuidados.",
      },
      {
        q: "Quanto tempo dura uma peça?",
        a: "Em utilização doméstica (1 a 2 transferências por dia): 4 a 6 anos. Em utilização profissional (10 a 15 transferências por dia): 18 a 24 meses. O tecido é lavável na máquina a 40 °C e pode ser seco na máquina em ciclo delicado.",
      },
      {
        q: "É possível experimentar antes de comprar?",
        a: "Não fazemos empréstimos gratuitos, incluindo a profissionais. O produto pode ser devolvido no prazo de 14 dias se não tiver sido usado e estiver em estado novo, sujeito a verificação na devolução. Depois de recebida a encomenda, podemos fazer uma demonstração por videochamada, em inglês.",
      },
      {
        q: "Como se lava a peça?",
        a: "Lavagem na máquina a 40 °C com detergente comum e secagem na máquina em ciclo delicado. Não utilizar amaciador (fragiliza as costuras). Não utilizar lixívia.",
      },
    ],
  },

  cross: [
    { eyebrow: "Próximo passo", title: "Como funciona na prática?" },
    { eyebrow: "Vai equipar uma equipa de cuidados?", title: "Pedir orçamento" },
    { eyebrow: "Do terreno", title: "Ler os testemunhos" },
  ],
};

export default copy;
