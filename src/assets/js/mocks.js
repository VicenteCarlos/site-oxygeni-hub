const Itens = [
  {
    title: "Oxygeni na Estrada",
    img: "https://cdn.discordapp.com/attachments/650830975433179140/968703655039631410/naEstrada.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    alt: "naEstradaLogo",
  },
  {
    title: "Oxygeni Talk",
    img: "https://cdn.discordapp.com/attachments/691321430586949762/966144251635306507/11.jpg",
    text: "Diversos tipos de encontros semanais que estimulam networking e troca de conhecimento entre profissionais.",
    alt: "talkLogo",
  },
  {
    title: "Oxygeni Lab",
    img: "https://cdn.discordapp.com/attachments/691321430586949762/966144251371085875/13.jpg",
    text: "Laboratório de desenvolvimento tecnológico voltado para inteligência artificial, big data e no/low-code.",
    alt: "labsLogo",
  },
];

const Li = [
  { text: "Home", route: "" },
  { text: "Sobre Nós", route: "aboutus" },
  { text: "Faça parte", route: "bepartofit" },
  { text: "Eventos" },
  { text: "Oportunidades", route: "opportunities" },
];

const Components = {
  squad_inovacao: [
    {
      name: "Laura",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/968963795626106950/InShot_20220427_165500470.jpg",
    },
    {
      name: "Ziellen",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/968963286085292092/InShot_20220427_165300538.jpg",
    },
    {
      name: "Andreia",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/968963617384968222/InShot_20220427_165420307.jpg",
    },
    {
      name: "Rhanna",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/968962979079004210/InShot_20220427_165031179.jpg",
    },
    {
      name: "Claudinéia",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/968964153173762098/InShot_20220427_165626831.jpg",
    },
    {
      name: "Elizabeth",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/968963974701936720/InShot_20220427_165546214.jpg",
    },
  ],
  embaixadores: [
    {
      name: "Elda",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/970079114910400582/elda.png",
      job: "Coord. CEUMA",
    },
    {
      name: "Elton",
      img: "",
      job: "Coord. CEUPI",
    },
  ],
  agentes: [
    {
      name: "Elves",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/970059851902357535/elves.png",
    },
    {
      name: "Ilgner",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/970059852149833818/ilgner.png",
    },
    {
      name: "Vitória",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/970059853949202503/vitoria.png",
    },
    {
      name: "Daniel",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/970059851633950781/daniel.png",
    },
    {
      name: "Rafael",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/970059852485374032/rafael.png",
    },
    {
      name: "Vicente",
      img: "https://cdn.discordapp.com/attachments/651404729766772763/970059853332611082/vicente.png",
    },
  ],
  apoio: [
    {
      title: "CONEX",
      imag: "https://cdn.discordapp.com/attachments/691321430586949762/966142908933759036/conexLogo.png",
      text: "Ambiente Digital de negócios entre Startups, Empresas, Mentores, Talentos e Programas de capacitações.",
      alt: "conexLogo",
    },
  ],
};

const li = {
  "/": "Home",
  "/aboutus": "Sobre Nós",
  "/bepartofit": "Faça Parte",
  "#": "Eventos",
  "/opportunities": "Oportunidades",
};

const configModal = [
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    img_v1:
      "https://cdn.discordapp.com/attachments/584885695341002772/975526625041059931/jsLogo.png",
    img_v2:
      "https://media4.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=ecf05e47g928228v56njootqkbrl7afxxqeug12emvdy3vbe&rid=giphy.gif&ct=s",
    colors: ["#E8B928", "#6b5514"],
  },
  {
    title: "Angular",
    description:
      "Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações. Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu. ",
      img_v2: "https://media4.giphy.com/media/XEDIHHp3i8bVoEdxd7/giphy.gif?cid=ecf05e47g6atnwn7aivxgdtiyj6lwwrpxqm6rab4x4zmwiu6&rid=giphy.gif&ct=s",
    colors: ["#f73434", "#3b0107"],
  },
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    img: "https://media4.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=ecf05e47g928228v56njootqkbrl7afxxqeug12emvdy3vbe&rid=giphy.gif&ct=s",
    colors: ["#E8B928"],
  },
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    img: "https://media4.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=ecf05e47g928228v56njootqkbrl7afxxqeug12emvdy3vbe&rid=giphy.gif&ct=s",
    colors: ["#E8B928"],
  },
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    img: "https://media4.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=ecf05e47g928228v56njootqkbrl7afxxqeug12emvdy3vbe&rid=giphy.gif&ct=s",
    colors: ["#E8B928"],
  },
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    img: "https://media4.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=ecf05e47g928228v56njootqkbrl7afxxqeug12emvdy3vbe&rid=giphy.gif&ct=s",
    colors: ["#E8B928"],
  },
  {
    title: "JavaScript",
    description:
      "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
    img: "https://media4.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif?cid=ecf05e47g928228v56njootqkbrl7afxxqeug12emvdy3vbe&rid=giphy.gif&ct=s",
    colors: ["#E8B928"],
  },
];

export { li, Components, Li, Itens, configModal };
