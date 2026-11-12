import type { QuoteCopy } from "../quote";
import { Link } from "@/i18n/Link";

const copy: QuoteCopy = {
  eyebrow: "Profissionais e organizações",
  title: (
    <>
      Pedir orçamento<br />para as suas <em>equipas</em>.
    </>
  ),
  lede: "Preencha o formulário e a nossa equipa enviará um orçamento personalizado no prazo de 48 horas úteis.",
  success: "Obrigado, o seu pedido de orçamento foi enviado. Responderemos no prazo de 48 horas úteis.",
  honeypot: "Não preencher",
  errorsOne: "Há um campo a corrigir.",
  errorsMany: (n) => `Há ${n} campos a corrigir.`,
  labels: {
    societe: "Nome da organização",
    contact: "Nome do contacto",
    email: "E-mail",
    adresse: "Morada da organização",
    quantite: "Quantidade pretendida",
    date: "Data de entrega pretendida",
    infos: "Informações adicionais",
  },
  messages: {
    societe: "Indique o nome da sua organização.",
    contact: "Indique o nome do contacto.",
    email: "Indique um endereço de e-mail válido.",
    adresse: "Indique a morada da sua organização.",
    quantite: "Indique uma quantidade igual ou superior a 1.",
    date: "Indique uma data de entrega futura.",
    rgpd: "Aceite a utilização dos seus dados para que possamos responder-lhe.",
  },
  consent: (
    <>
      Aceito que os meus dados sejam utilizados para responder ao meu pedido. Consulte a{" "}
      <Link page="privacy">política de privacidade</Link>.
    </>
  ),
  sendError: "O envio falhou. Tente novamente ou envie-nos um e-mail para",
  sending: "A enviar…",
  send: "Enviar",
  required: "* Campos obrigatórios",
};

export default copy;
