import type { FamilyCopy } from "../family";

const copy: FamilyCopy = {
  hero: {
    eyebrow: "Percurso do cuidador · Pensado para cuidadores familiares",
    title: (
      <>
        Cuido de um familiar.<br /><em>O COALA ajuda-me.</em>
      </>
    ),
    lede: "Todos os dias ajuda o seu familiar a deslocar-se de um sítio para outro. O COALA acompanha cada transferência para aliviar o esforço nas costas, tornar o movimento mais seguro e preservar a dignidade de quem é ajudado.",
    ctaOrder: "Encomendar COALA",
    ctaAdvice: "Falar connosco antes de comprar",
    ctaHow: "Ver como funciona",
    trust: ["Devolução em 14 dias", "Apoio ao cliente feito por pessoas reais", "Tutoriais em vídeo incluídos"],
    imageAlt: "Cuidador familiar com a peça de vestuário de transferência COALA durante uma transferência",
    cardTop: {
      eyebrow: "Protege as suas costas",
      claim: "Acabou-se dobrar as costas para levantar",
      desc: "já não carrega a pessoa, acompanha-a",
    },
    cardBottom: { eyebrow: "No dia a dia", pills: ["Cama", "Cadeira", "Casa de banho"] },
  },
  benefits: {
    eyebrow: "Porquê o COALA?",
    title: (
      <>
        Uma solução pensada<br />para os <em>cuidadores familiares</em>.
      </>
    ),
    items: [
      { title: "Torna o movimento mais seguro", desc: "Pegas reforçadas, pontos de apoio bem distribuídos, antiderrapante." },
      { title: "Respeita a pessoa", desc: "Tecido macio, utilização digna e o seu familiar permanece vestido durante toda a transferência." },
      { title: "Protege as suas costas", desc: "Acabou-se dobrar as costas para levantar e forçar os ombros e os braços." },
      { title: "Favorece a autonomia", desc: "O seu familiar pode participar ativamente no movimento." },
    ],
  },
  steps: {
    eyebrow: "Como funciona?",
    title: (
      <>
        Três passos simples<br />para uma transferência <em>segura</em>.
      </>
    ),
    items: [
      { title: "Vestir", desc: "Veste o COALA como uma peça de vestuário de trabalho comum. Fica vestido em poucos segundos." },
      { title: "Segurar as zonas de pega", desc: "O seu familiar segura as pegas reforçadas (ombros, cintura, ancas). O cuidador mantém-se baixo, com as costas direitas." },
      { title: "Transferir", desc: "Acompanhe o movimento sem forçar. Cama, cadeira, saída da casa de banho: o movimento é fluido." },
    ],
    noteEyebrow: "O que o COALA muda",
    changes: [
      ["Costas", "Acabou-se dobrar as costas para levantar."],
      ["Braços", "Acabou-se forçar os ombros e os braços."],
      ["Juntos", "O seu familiar participa: já não o carrega, acompanha-o."],
    ],
    guideLink: "Ver o guia de utilização em 7 passos",
  },
  product: {
    eyebrow: "O produto",
    title: (
      <>
        Uma peça simples,<br /><em>resistente</em> e lavável.
      </>
    ),
    specsTitle: "Características",
    specs: [
      "Poliéster técnico, 215 g/m²",
      "4 zonas de pega reforçadas",
      "Tamanhos do XS ao 4XL",
      "Lavável a 40 °C · secagem suave",
      "Inovação francesa patenteada",
    ],
    commitmentsTitle: "Os nossos compromissos",
    commitments: [
      "Devolução em 14 dias de produtos não usados",
      "Apoio ao cliente feito por pessoas reais",
      "Tutoriais em vídeo incluídos",
    ],
  },
  faq: {
    eyebrow: "Perguntas dos cuidadores",
    title: (
      <>
        O que as <em>famílias</em><br />nos perguntam.
      </>
    ),
    cta: "Ver todas as perguntas",
    items: [
      {
        q: "O COALA é adequado para o meu familiar?",
        a: "O COALA é adequado para a maioria das pessoas que precisam de ajuda nas transferências e que conseguem participar, pelo menos parcialmente, no movimento, segurando as pegas com as duas mãos. A peça é usada pelo cuidador e está disponível nos tamanhos XS a 4XL. Em situações específicas (úlceras de pressão avançadas, cirurgia recente), peça a opinião da equipa de saúde.",
      },
      {
        q: "Quanto tempo dura a peça de vestuário?",
        a: "Em utilização doméstica (1 a 2 transferências por dia): 4 a 6 anos. Em utilização profissional (10 a 15 transferências por dia): 18 a 24 meses. O tecido pode ser lavado na máquina a 40 °C e seco na máquina num ciclo suave.",
      },
      {
        q: "Posso experimentar antes de comprar?",
        a: "Não fazemos empréstimos gratuitos. O produto pode ser devolvido no prazo de 14 dias se não tiver sido usado e estiver como novo, sujeito a verificação na receção.",
      },
    ],
  },
  finalCta: {
    eyebrow: "Pronto para começar com o COALA?",
    title: (
      <>
        Apoie o seu familiar,<br /><em>proteja as suas costas</em>.
      </>
    ),
    sub: "Devoluções aceites no prazo de 14 dias se o produto não tiver sido usado · Precisa de conselho? contact@connectlink.fr",
    ctaOrder: "Encomendar COALA",
    ctaWrite: "Escreva-nos",
  },
  crossLinks: [
    { eyebrow: "O produto", title: "Características técnicas do COALA" },
    { eyebrow: "Guia", title: "Guia de utilização em 7 passos" },
    { eyebrow: "Perguntas", title: "FAQ completas" },
  ],
};

export default copy;
