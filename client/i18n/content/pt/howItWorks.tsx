import type { HowItWorksCopy } from "../howItWorks";

const copy: HowItWorksCopy = {
  breadcrumb: {
    ariaLabel: "Navegação estrutural",
    home: "Início",
    current: "Como funciona",
  },
  hero: {
    eyebrow: "Guia de utilização",
    title: (
      <>
        Vestir, ajudar,<br /><em>despir</em>.
      </>
    ),
    lede:
      "O COALA ativa-se em poucos segundos e desativa-se com a mesma rapidez. Entretanto, a pessoa ajudada participa: deixa de a levantar e passa a acompanhá-la. Este guia baseia-se no material de formação utilizado na implementação do COALA junto das equipas de cuidados.",
    ctaOrder: "Encomendar COALA",
    ctaProduct: "Ver a página do produto",
  },
  video: {
    eyebrow: "Demonstração em vídeo",
    title: (
      <>
        A técnica COALA<br />em <em>situação real</em>.
      </>
    ),
    iframeTitle: "Demonstração da peça de vestuário de transferência COALA (em francês)",
    note: "Vídeo em francês",
  },
  steps: {
    eyebrow: "Instruções",
    title: (
      <>
        Ativar e depois soltar<br />o <em>suporte</em>.
      </>
    ),
    lede:
      "Cinco passos para se preparar antes de ajudar alguém a deslocar-se. Cinco passos para voltar a ter uma peça de vestuário comum depois de concluída a transferência.",
    phase1Label: "Fase 1: Vestir",
    phase1: [
      { n: "01", title: "Vestir a peça", body: "O COALA veste-se como uma peça de vestuário de trabalho comum: o cinto lombar está aberto e preso à peça pelas tiras de velcro, e as alças de ombro estão soltas." },
      { n: "02", title: "Desapertar os dois botões de baixo", body: "Os dois botões inferiores dão acesso ao cinto lombar e aos tensores das alças de ombro." },
      { n: "03", title: "Apertar o cinto lombar", body: "Aperte o cinto e prenda-o com a tensão pretendida." },
      { n: "04", title: "Esticar as alças de ombro", body: "Puxe a correia inferior dos tensores de ombro até obter a tensão pretendida, na posição fechada." },
      { n: "05", title: "Fechar a peça", body: "Aperte os dois últimos botões. O suporte está ativo: está pronto para ajudar." },
    ],
    phase1Alt: "Peça de vestuário de transferência COALA aberta, com o cinto lombar e os tensores das alças de ombro visíveis",
    phase1Caption: "Cinto lombar e tensores das alças de ombro, suporte ativo.",
    phase2Label: "Fase 2: Despir",
    phase2: [
      { n: "01", title: "Desapertar os dois botões de baixo", body: "A ajuda física terminou: pode soltar o suporte." },
      { n: "02", title: "Soltar a tensão dos ombros", body: "Levante os tensores debaixo dos braços para afrouxar as alças de ombro." },
      { n: "03", title: "Desapertar o cinto lombar", body: "Abra o cinto para eliminar toda a tensão." },
      { n: "04", title: "Arrumar o cinto", body: "Prenda as duas extremidades do cinto no interior das duas frentes da peça." },
      { n: "05", title: "Apertar os dois botões de baixo", body: "O COALA volta a ser uma peça de vestuário comum, impercetível para quem o usa e para quem está à volta." },
    ],
    phase2Alt: "Peça de vestuário de transferência COALA com as pegas recolhidas, de novo uma peça comum",
    phase2Caption: "Suporte solto: o COALA volta a ser uma peça de vestuário comum.",
    warning:
      "Verificação ao vestir: certifique-se de que as duas partes do cinto passam pelas pegas, no interior da peça.",
  },
  situations: {
    eyebrow: "Quando utilizar",
    title: (
      <>
        Quando o COALA<br /><em>ajuda</em>.
      </>
    ),
    lede:
      "Identifique as situações de ajuda física em que o COALA reduz o esforço nos braços e nas costas e facilita a participação da pessoa ajudada.",
    imageAlt: "Profissional de cuidados com a peça de vestuário de transferência COALA a ajudar uma pessoa idosa a dirigir-se ao andarilho",
    items: [
      "Transferência de sentado para de pé",
      "Transferência da cadeira para a sanita",
      "Reposicionamento na cama e levante",
      "Marcha assistida",
      "Reposicionamento na cadeira",
      "Mudança de decúbito na cama",
    ],
    profilesTitle: "Para que pacientes é adequado?",
    profilesIntro:
      "O paciente consegue compreender instruções que lhe pedem colaboração? O seu estado físico permite utilizar o COALA? Avalie cada caso individualmente:",
    profiles: [
      "Capacidade de compreender indicações de colaboração",
      "Qualidade do apoio de carga",
      "Peso",
      "Mobilidade",
      "Equilíbrio",
      "Tónus muscular dos membros superiores",
    ],
    profilesNote:
      "Em caso de dúvida sobre a adequação do COALA à situação de um paciente, consulte a equipa de saúde que o acompanha.",
  },
  grips: {
    eyebrow: "Indicações de utilização",
    title: (
      <>
        Que pegas<br /><em>oferecer</em>.
      </>
    ),
    lede: "As pegas oferecidas determinam quanto esforço fica sobre os ombros e as costas do cuidador.",
    imageAlt: "Pormenor de uma zona de pega no ombro da peça de vestuário de transferência COALA",
    caption: "Zona de pega superior, no ombro.",
    items: [
      { title: "Pega cruzada", detail: "Ofereça uma pega inferior e a pega superior do lado oposto. A mão de cima pode ser colocada no sentido do movimento, para ajudar a orientar o olhar do paciente." },
      { title: "As duas pegas inferiores", detail: "Oferecer as duas pegas inferiores reduz ainda mais o esforço nos ombros e nas costas." },
      { title: "Nunca as duas pegas superiores", detail: "Não ofereça as duas pegas superiores ao mesmo tempo: isso sobrecarrega os ombros e as costas." },
      { title: "Não deixar as pegas à vista", detail: "Recolha as pegas entre utilizações: podem prender-se em algum sítio ou ser agarradas inesperadamente." },
      { title: "Soltar o suporte quando não está em uso", detail: "Afrouxe o cinto e as alças de ombro quando não estiver a prestar ajuda física, por exemplo ao ajudar nas refeições ou durante uma pausa." },
    ],
  },
  verbal: {
    eyebrow: "Orientação verbal",
    title: (
      <>
        As palavras que<br /><em>envolvem</em> o paciente.
      </>
    ),
    lede:
      "Oriente o paciente da forma mais clara possível para que se movam em conjunto. Não hesite em repetir e reformular: cada par cuidador-paciente encontra as suas próprias referências.",
    imageAlt: "Profissional de cuidados a orientar um paciente para as zonas de pega da peça de vestuário de transferência COALA",
    caption: "O contacto visual mantém-se durante toda a manobra.",
    evaluationLabel: "Avaliar a capacidade de colaboração",
    evaluation: ["«Consegue agarrar esta pega?»", "«Sente-se com força?»"],
    sequenceLabel: "Sequência de transferência",
    sequence: [
      "«Agarre estas pegas»",
      "«Feche bem as mãos»",
      "«Segure-se bem. Sente-se com força?»",
      "«Recue os pés o mais possível»",
      "«Incline-se para a frente»",
      "«Puxe as pegas para si e empurre com as pernas»",
    ],
  },
  posture: {
    eyebrow: "Postura do cuidador",
    title: (
      <>
        Colocar-se em posição de <em>força</em>,<br />sem levantar.
      </>
    ),
    lede:
      "O COALA sobrecarrega menos as articulações dos braços e das costas, desde que o cuidador se posicione corretamente.",
    items: [
      { title: "Costas direitas", detail: "Mantenha as costas direitas enquanto orienta o paciente a recuar os pés e a inclinar-se na sua direção." },
      { title: "Ancas e joelhos fletidos", detail: "Flita ligeiramente as ancas e os joelhos para acompanhar eficazmente o movimento do paciente." },
      { title: "Pés afastados", detail: "Afaste os pés para aumentar a estabilidade." },
      { title: "Avanços para a frente / para trás", detail: "Coloque um pé entre os pés do paciente e utilize movimentos de avanço para acompanhar a transferência." },
    ],
  },
  care: {
    eyebrow: "Manutenção",
    title: (
      <>
        Instruções de <em>lavagem</em>.
      </>
    ),
    items: [
      "Lavagem de algodão a 40 °C.",
      "Prenda o cinto fechado, passado pelas pegas, antes de colocar a peça na máquina.",
      "Escolha um ciclo de secagem delicado ou a baixa temperatura.",
    ],
    imageAlt: "Peça de vestuário de transferência COALA dobrada, pronta para lavar",
    caption: "Cinto preso e pegas recolhidas antes da lavagem na máquina.",
  },
  deployment: {
    eyebrow: "Implementação na sua organização",
    title: (
      <>
        As cinco chaves<br />do <em>sucesso</em>.
      </>
    ),
    factors: [
      "Propor o COALA a profissionais de cuidados voluntários",
      "Adotar os gestos de orientação corretos",
      "Orientar os pacientes para as pegas inferiores",
      "Soltar o suporte e recolher as pegas",
      "Desaprender o hábito de levantar",
    ],
    staffLabel: "Profissionais de cuidados (traduzido do francês)",
    staffQuotes: [
      "«Menos cansaço ao fim do dia»",
      "«Mais seguro, fico com as mãos livres»",
      "«Fácil de usar»",
      "«Habituamo-nos depressa»",
    ],
    patientLabel: "Pacientes (traduzido do francês)",
    patientQuotes: [
      "«Estamos frente a frente, olhos nos olhos»",
      "«Participação mais ativa»",
      "«Melhor pega»",
      "«Uma sensação de segurança»",
    ],
  },
  cta: {
    title: "Pronto para trabalhar com o COALA?",
    body: "Encomende diretamente ou peça um orçamento para a sua organização.",
    order: "Encomendar COALA",
    quote: "Pedir orçamento",
    cards: [
      { eyebrow: "A peça em pormenor", title: "Página completa do produto" },
      { eyebrow: "Quem o utiliza", title: "Testemunhos e resultados" },
      { eyebrow: "Perguntas", title: "FAQ completas" },
    ],
  },
};

export default copy;
