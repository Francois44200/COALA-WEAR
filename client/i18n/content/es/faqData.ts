import type { FaqCategory } from "@/data/faq";

const data: FaqCategory[] = [
  {
    id: "produit",
    label: "El producto",
    desc: "Materiales, durabilidad, normativa",
    items: [
      {
        q: "¿De qué está hecha la prenda COALA?",
        a: "De poliéster técnico (215 g/m²) con un forro reforzado en los puntos de tensión. Triple costura en las cuatro zonas de agarre. Cordones de ajuste de cincha técnica.",
      },
      {
        q: "¿Cuánto dura la prenda?",
        a: "En uso doméstico: de 4 a 6 años. En uso profesional intensivo: de 18 a 24 meses. El tejido se puede lavar a máquina a 40 °C y secar en secadora en ciclo suave.",
      },
      {
        q: "¿COALA es un producto sanitario?",
        a: "No. COALA no es un producto sanitario en el sentido del Reglamento europeo de productos sanitarios (UE) 2017/745. Es una prenda de trabajo técnica y una innovación francesa patentada.",
      },
    ],
  },
  {
    id: "usage",
    label: "Uso y técnica",
    desc: "Para quién, cómo y con qué frecuencia",
    items: [
      {
        q: "¿COALA es adecuada para mi ser querido?",
        a: "COALA es adecuada para la mayoría de las personas que necesitan ayuda en las transferencias y pueden participar, al menos en parte, en el movimiento, sujetando los agarres con ambas manos. La prenda la lleva el cuidador y está disponible en tallas de la XS a la 4XL, que se eligen según quien la lleva. En casos específicos (úlceras por presión avanzadas, cirugía reciente), pide consejo al equipo sanitario.",
      },
      {
        q: "¿Necesito formación para usarla?",
        a: "Cada prenda incluye instrucciones de uso, y los tutoriales en vídeo en línea te enseñan a utilizarla correctamente.\n\nPara los pedidos de equipos, Connect Link ofrece además una sesión de formación específica para los profesionales y sus responsables, por videollamada en inglés una vez recibido el pedido.",
      },
      {
        q: "¿Cuántas transferencias se pueden hacer al día?",
        a: "La prenda en sí no tiene límite. En cuanto a las personas: entre 18 cuidadores seguidos durante 90 días, la media fue de 8 transferencias al día con COALA, sin que se notificara ningún dolor lumbar.",
      },
      {
        q: "¿Se puede usar con una silla de ruedas?",
        a: "Sí. COALA funciona igual de bien en las transferencias de la cama a la silla, de la silla al inodoro y de la silla al coche. Consulta nuestra página «Cómo funciona» para ver las 6 situaciones más habituales.",
      },
      {
        q: "¿Hacen falta dos personas para usarla?",
        a: "Un solo cuidador basta para la mayoría de las transferencias. Para personas de más peso (más de 100 kg) o transferencias del suelo a la silla, se recomiendan dos cuidadores.",
      },
    ],
  },
  {
    id: "achat",
    label: "Pedidos y entrega",
    desc: "Pedidos, plazos de entrega, devoluciones",
    items: [
      {
        q: "¿Cómo hago un pedido?",
        a: "A través de nuestra tienda en línea, shop.connectlink.fr (tarjeta, Apple Pay o transferencia bancaria). Para pedidos profesionales, también puedes contactar directamente con nuestro equipo en contact@connectlink.fr.",
      },
      {
        q: "¿Cuánto tarda la entrega?",
        a: "Los plazos de entrega y los gastos de envío dependen de tu país y se muestran al finalizar la compra. Puedes seguir tu paquete por correo electrónico.",
      },
      {
        q: "¿Puedo devolver mi prenda?",
        a: "Sí, en un plazo de 14 días desde cualquier país de la Unión Europea, siempre que el producto no se haya usado y esté como nuevo. Todas las devoluciones se revisan antes de cualquier cambio o reembolso. Por motivos de higiene, la prenda se entrega precintada.",
      },
      {
        q: "¿Puedo probarla antes de comprarla?",
        a: "No ofrecemos préstamos gratuitos, tampoco a profesionales. No obstante, el producto se puede devolver en un plazo de 14 días si no se ha usado y sigue como nuevo.",
      },
    ],
  },
  {
    id: "pros",
    label: "Profesionales y organizaciones",
    desc: "Residencias, hospitales, servicios de atención domiciliaria",
    items: [
      {
        q: "¿En cuánto tiempo recibiré un presupuesto profesional?",
        a: "En un plazo de 2 días laborables. Un miembro de nuestro equipo profesional te llamará para conocer tu entorno y después te enviará un presupuesto a medida.",
      },
      {
        q: "¿La formación está realmente incluida?",
        a: "La formación resulta útil a partir de 5 profesionales equipados. La imparte un ergónomo o un terapeuta ocupacional de la red COALA, por videollamada en inglés una vez recibido el pedido, y te enviamos el material formativo.",
      },
      {
        q: "¿Ofrecéis condiciones para organizaciones con varios centros?",
        a: "Sí. Precios por volumen, entregas agrupadas y un interlocutor específico para grupos, organizaciones de cuidados y federaciones que pidan 100 prendas o más.",
      },
      {
        q: "¿Se puede personalizar la prenda (logotipo, nombre del servicio)?",
        a: "Sí, con serigrafía o bordado a partir de 25 unidades. Plazo de fabricación: 10 días laborables adicionales.",
      },
    ],
  },
  {
    id: "lavage",
    label: "Lavado y cuidados",
    desc: "Cómo lavarla, secarla y guardarla",
    items: [
      {
        q: "¿A qué temperatura se lava COALA?",
        a: "Lavado a máquina a 40 °C en ciclo normal con detergente normal. Sin suavizante (debilita las costuras). Sin lejía.",
      },
      {
        q: "¿Se puede meter en la secadora?",
        a: "Sí, solo en ciclo suave. Lo ideal es secarla en plano o en una percha para que mantenga su forma.",
      },
      {
        q: "¿Y el planchado?",
        a: "No es necesario. Si prefieres plancharla, usa una temperatura media y no planches nunca las zonas de agarre reforzadas.",
      },
      {
        q: "¿Cómo se guarda COALA?",
        a: "Doblada en plano, en un lugar seco. La funda de transporte individual (incluida en los pedidos profesionales) mantiene la prenda en buen estado, incluso dentro de una bolsa de trabajo.",
      },
    ],
  },
];

export default data;
