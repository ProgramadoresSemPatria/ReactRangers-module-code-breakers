import { RoadmapTopic } from "../interfaces";

const FRONTEND_ROADMAP: RoadmapTopic = {
  id: 1,
  name: "Front-End Developer Roadmap",
  description: "Trilha para se tornar um Desenvolvedor Front-End Sênior",
  level: "beginner",
  subtopics: [
    {
      id: 1,
      name: "HTML",
      level: "beginner",
      description: "Fundamentos da estrutura das páginas web.",
      resources: ["https://developer.mozilla.org/en-US/docs/Web/HTML"],
    },
    {
      id: 2,
      name: "CSS",
      level: "beginner",
      description: "Estilos e layout para a web.",
      subtopics: [
        {
          id: 1,
          name: "Flexbox",
          level: "beginner",
          description: "Layout flexível para componentes.",
        },
        {
          id: 2,
          name: "Grid",
          level: "intermediate",
          description: "Sistema de grid para layouts avançados.",
        },
        {
          id: 3,
          name: "Bootstrap",
          level: "intermediate",
          resources: ["https://getbootstrap.com/"],
        },
        {
          id: 4,
          name: "Tailwind CSS",
          level: "intermediate",
          resources: ["https://tailwindcss.com/"],
        },
      ],
    },
    {
      id: 3,
      name: "JavaScript",
      level: "beginner",
      description: "Linguagem de programação para a web.",
      subtopics: [
        {
          id: 1,
          name: "ES6+",
          level: "intermediate",
          description: "Sintaxe e recursos modernos do JavaScript.",
        },
        {
          id: 2,
          name: "AJAX",
          level: "intermediate",
          description: "Técnica para comunicações assíncronas com o servidor.",
        },
        {
          id: 3,
          name: "jQuery",
          level: "beginner",
          resources: ["https://jquery.com/"],
        },
      ],
    },
    {
      id: 4,
      name: "Tools",
      description: "Ferramentas para desenvolvimento front-end",
      level: "intermediate",
      subtopics: [
        {
          id: 1,
          name: "Node.js",
          level: "intermediate",
          description: "Ambiente de execução para JavaScript no backend.",
          resources: ["https://nodejs.org/"],
        },
        {
          id: 2,
          name: "Gulp",
          level: "intermediate",
          description: "Automação de tarefas para front-end.",
        },
        {
          id: 3,
          name: "Webpack",
          level: "intermediate",
          description: "Empacotador de módulos para JavaScript.",
        },
      ],
    },
    {
      id: 5,
      name: "Frameworks e Libraries",
      level: "advanced",
      description:
        "Frameworks e bibliotecas populares para desenvolvimento de aplicações.",
      subtopics: [
        {
          id: 1,
          name: "React",
          level: "advanced",
          resources: ["https://react.dev/"],
        },
        {
          id: 2,
          name: "Vue",
          level: "advanced",
          resources: ["https://vuejs.org/"],
        },
        {
          id: 3,
          name: "Next.js",
          level: "advanced",
          resources: ["https://nextjs.org/"],
        },
        {
          id: 4,
          name: "Angular",
          level: "advanced",
          resources: ["https://angular.io/"],
        },
      ],
    },
    {
      id: 6,
      name: "Testing",
      level: "advanced",
      description: "Testes e garantia de qualidade para aplicações.",
      subtopics: [
        {
          id: 1,
          name: "Unit Testing",
          level: "advanced",
          description: "Testes unitários de componentes e funções.",
        },
        {
          id: 2,
          name: "Integration Testing",
          level: "advanced",
          description: "Testes de integração para sistemas maiores.",
        },
        {
          id: 3,
          name: "End-to-End Testing",
          level: "advanced",
          description: "Testes completos do fluxo da aplicação.",
        },
      ],
    },
  ],
};

export default FRONTEND_ROADMAP;
