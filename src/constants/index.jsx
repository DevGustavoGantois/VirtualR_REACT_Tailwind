import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Preços", href: "#" },
  { label: "Depoimentos", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Soluções",
    image: user1,
    text: "Estou extremamente satisfeito com os serviços prestados. A equipe foi ágil, profissional e entregou resultados além das minhas expectativas.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Tecnologias",
    image: user2,
    text: "Não poderia estar mais feliz com o resultado do nosso projeto. A criatividade e as habilidades de resolução de problemas da equipe foram fundamentais para dar vida à nossa visão",
  },
  {
    user: "David Johnson",
    company: "Quantum Inovações",
    image: user3,
    text: "Trabalhar com esta empresa foi um prazer. Sua atenção aos detalhes e compromisso com a excelência são louváveis. Eu os recomendo fortemente para quem procura um serviço de primeira linha.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dinâmicas",
    image: user4,
    text: "Trabalhar com a equipe da XYZ Company foi uma virada de jogo para nosso projeto. A sua atenção aos detalhes e soluções inovadoras ajudaram-nos a atingir os nossos objetivos mais rapidamente do que pensávamos ser possível. Agradecemos sua experiência e profissionalismo!",
  },
  {
    user: "Michael Wilson",
    company: "Criações Visionárias",
    image: user5,
    text: "Estou impressionado com o nível de profissionalismo e dedicação demonstrado pela equipa. Eles foram capazes de superar nossas expectativas e entregar excelentes resultados.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Sistemas",
    image: user6,
    text: "A equipe fez de tudo para garantir que nosso projeto fosse um sucesso. Sua experiência e dedicação são incomparáveis. Estou ansioso para trabalhar com eles novamente no futuro.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interface de arrastar e soltar",
    description:
      "Projete e organize facilmente seus ambientes de RV com uma interface fácil de arrastar e soltar.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilidade multiplataforma",
    description:
      "Crie aplicativos de VR que funcionam perfeitamente em diversas plataformas, incluindo dispositivos móveis, desktop e headsets de VR.",
  },
  {
    icon: <ShieldHalf />,
    text: "Modelos integrados",
    description:
      "Inicie seus projetos de VR com uma variedade de modelos integrados para diferentes tipos de aplicativos e ambientes.",
  },
  {
    icon: <BatteryCharging />,
    text: "Pré-visualização em tempo real",
    description:
      "Visualize seu aplicativo de VR em tempo real conforme você faz alterações, permitindo iterações e ajustes rápidos",
  },
  {
    icon: <PlugZap />,
    text: "Ferramentas de colaboração",
    description:
      "Trabalhe junto com sua equipe em tempo real em projetos de VR, permitindo colaboração perfeita e compartilhamento de ideias.",
  },
  {
    icon: <GlobeLock />,
    text: "Painel analítico",
    description:
      "Obtenha informações valiosas sobre as interações e o comportamento do usuário em seus aplicativos de VR com um painel analítico integrado.",
  },
];

export const checklistItems = [
  {
    title: "Mesclagem de código facilitada",
    description:
      "Acompanhe o desempenho dos seus aplicativos de VR e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Revise o código sem se preocupar",
    description:
      "Acompanhe o desempenho dos seus aplicativos de VR e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Assistência de IA para reduzir tempo",
    description:
      "Acompanhe o desempenho dos seus aplicativos de VR e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Compartilhe trabalho em minutos",
    description:
      "Acompanhe o desempenho dos seus aplicativos de VR e obtenha insights sobre o comportamento do usuário.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "R$0",
    features: [
      "Compartilhamento de quadro privado",
      "Armazenamento de 5 GB",
      "Análise da Web",
      "Modo privado",
    ],
  },
  {
    title: "Pro",
    price: "R$50",
    features: [
      "Compartilhamento de quadro privado",
      "Armazenamento de 10 GB",
      "Análise da Web (Avançado)",
      "Modo privado",
    ],
  },
  {
    title: "Enterprise",
    price: "R$200",
    features: [
      "Compartilhamento de quadro privado",
      "Armazenamento ilimitado",
      "Rede de alto desempenho",
      "Modo privado",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Começando" },
  { href: "#", text: "Documentação" },
  { href: "#", text: "Tutoriais" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Fóruns da Comunidade" },
];

export const platformLinks = [
  { href: "#", text: "Características" },
  { href: "#", text: "Dispositivos suportados" },
  { href: "#", text: "Requisitos de sistema" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Notas de versão" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encontros" },
  { href: "#", text: "Conferências" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Trabalhos" },
];