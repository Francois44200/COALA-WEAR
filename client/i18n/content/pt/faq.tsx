import type { FaqPageCopy } from "../faq";

const copy: FaqPageCopy = {
  hero: {
    eyebrow: "Centro de ajuda",
    title: (
      <>
        Cada pergunta,<br />uma <em>resposta</em> clara.
      </>
    ),
    lede: "Pesquise por palavra-chave, navegue por tema ou escreva-nos diretamente se não encontrar o que procura.",
    cta: "Ver as categorias",
    meta: ["Cuidadores familiares", "Profissionais e organizações", "Atualizado mensalmente"],
  },
  search: {
    placeholder: (total) => `Pesquisar ${total} ${total === 1 ? "pergunta" : "perguntas"}…`,
    ariaLabel: "Pesquisar nas FAQ",
    clear: "Limpar pesquisa",
    results: (count) => `${count} ${count === 1 ? "resultado" : "resultados"}`,
    showAll: "mostrar tudo",
    summary: (categories, total) =>
      `${categories} ${categories === 1 ? "categoria" : "categorias"} · ${total} ${total === 1 ? "pergunta" : "perguntas"} no total`,
  },
  toc: {
    ariaLabel: "Categorias",
    label: "Categorias",
    helpTag: "Sem resposta?",
    helpLink: "Escreva à nossa equipa",
  },
  questionCount: (count) => `${count} ${count === 1 ? "pergunta" : "perguntas"}`,
  empty: {
    title: (query) => <>Nenhuma resposta para «{query}».</>,
    body: "Tente reformular a pesquisa ou escreva-nos diretamente.",
    cta: "Escreva-nos",
  },
  crossLinks: [
    { eyebrow: "Ainda não encontrou?", title: "Escreva à equipa COALA" },
    { eyebrow: "Vai equipar uma equipa de cuidados?", title: "Orçamentos profissionais em 48 horas" },
    { eyebrow: "O produto em pormenor", title: "Ver todos os detalhes do produto" },
  ],
};

export default copy;
