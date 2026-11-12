import type { ContactCopy } from "../contact";
import { Link } from "@/i18n/Link";

const copy: ContactCopy = {
  eyebrow: "Entre em contacto",
  title: (
    <>
      Contacte-<em>nos</em>.
    </>
  ),
  lede: "Tem alguma pergunta sobre o COALA ou precisa de um orçamento? Escreva-nos e a nossa equipa responderá rapidamente. Depois de recebida a encomenda, podemos também organizar uma demonstração por videochamada, em inglês.",
  emailLabel: "E-mail",
  addressLabel: "Morada",
  success: "Obrigado, a sua mensagem foi enviada. Responderemos em breve.",
  honeypot: "Não preencher",
  errorsOne: "Há um campo a corrigir.",
  errorsMany: (n) => `Há ${n} campos a corrigir.`,
  labels: {
    nom: "Apelido",
    prenom: "Nome próprio",
    email: "E-mail",
    telephone: "Telefone",
    profil: "É",
    objet: "Assunto",
    message: "Mensagem",
  },
  profils: [
    { value: "Particulier", label: "Um particular" },
    { value: "Professionnel", label: "Um profissional" },
    { value: "Presse", label: "Imprensa" },
    { value: "Autre", label: "Outro" },
  ],
  messages: {
    nom: "Indique o seu apelido.",
    prenom: "Indique o seu nome próprio.",
    email: "Indique um endereço de e-mail válido.",
    profil: "Selecione o seu perfil.",
    objet: "Indique o assunto da sua mensagem.",
    message: "Escreva a sua mensagem.",
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
