const roadmapNodes = [
  {
    id: "1",
    type: "main",
    position: { x: 0, y: 200 },
    data: { 
      title: "Internet",
      description: "The Internet is a global network of interconnected computer networks that use the Internet Protocol Suite (TCP/IP) to communicate. It enables the exchange of data, information, and services across the world, connecting billions of devices and users. The Internet has revolutionized communication, commerce, education, and entertainment, becoming an integral part of modern society. It supports various applications and services, from web browsing and instant messaging to streaming media and online gaming. While offering unprecedented access to information and connectivity, the Internet also raises concerns about privacy, security, and digital divide issues. Visit the following resources to learn more:",
      subtopics: [
        { 
          id: "1-1",
          title: "How Does the Internet Work?", 
          description: "The Internet works through a global network of interconnected computers and servers, communicating via standardized protocols. Data is broken into packets and routed through various network nodes using the Internet Protocol (IP). These packets travel across different physical infrastructures, including fiber optic cables, satellites, and wireless networks. The Transmission Control Protocol (TCP) ensures reliable delivery and reassembly of packets at their destination. Domain Name System (DNS) servers translate human-readable website names into IP addresses. When you access a website, your device sends a request to the appropriate server, which responds with the requested data. This process, facilitated by routers, switches, and other networking equipment, enables the seamless exchange of information across vast distances, forming the backbone of our digital communications.",
          resources: [
            {
              title: "How Does The Internet Work? - CS FYI",
              url: "https://cs.fyi/guide/how-does-internet-work",
            },
            {
              title: "How Does The Internet Work? - MDN",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work",
            },
            {
              title: "How The Internet Works in 5 Minutes",
              url: "https://www.youtube.com/watch?v=7_LPdttKXPc&ab_channel=Aaron",
            }
          ]
        },
        { 
          id: "1-2",
          title: "Web Concepts",
          description: "Understand how the web works, including HTTP, browsers, servers, and basic networking concepts.",
          resources: [
            {
              title: "MDN - How the Web works",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works",
            },
            {
              title: "Web.dev - How the Web Works",
              url: "https://web.dev/learn/",
            },
            {
              title: "Harvard's CS50 - Web Programming",
              url: "https://cs50.harvard.edu/web/2020/",
            }
          ]
        },
        {
          id: "1-3",
          title: "Development Tools",
          description: "Learn to use essential development tools like code editors, browser dev tools, and terminal basics.",
          resources: [
            {
              title: "VS Code Tutorial",
              url: "https://code.visualstudio.com/docs/introvideos/basics",
            },
            {
              title: "Chrome DevTools",
              url: "https://developer.chrome.com/docs/devtools/",
            },
            {
              title: "Command Line Crash Course",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line",
            }
          ]
        },
        {
          id: "1-4",
          title: "Internet & Web Security Basics",
          description: "Understand fundamental web security concepts, HTTPS, and basic data protection.",
          resources: [
            {
              title: "Web Security on MDN",
              url: "https://developer.mozilla.org/en-US/docs/Web/Security",
            },
            {
              title: "OWASP Web Security Testing Guide",
              url: "https://owasp.org/www-project-web-security-testing-guide/",
            },
            {
              title: "Google Web Fundamentals - Security",
              url: "https://developers.google.com/web/fundamentals/security/",
            }
          ]
        }
      ]
    },
  },
  {
    id: "2",
    type: "main",
    position: { x: 100, y: 700 },
    data: { 
      title: "Essential Front-End Technologies",
      description: "Master the core technologies that power the modern web.",
      subtopics: [
        { 
          id: "2-1", 
          title: "HTML",
          description: "Learn modern HTML5, semantic markup, and best practices for structuring web content.",
          resources: [
            {
              title: "MDN - HTML5 Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
            },
            {
              title: "HTML Best Practices",
              url: "https://www.w3schools.com/html/html5_syntax.asp",
            },
            {
              title: "Semantic HTML Guide",
              url: "https://www.semrush.com/blog/semantic-html5-guide/",
            }
          ]
        },
        { 
          id: "2-2", 
          title: "CSS",
          description: "Master CSS3, layouts, responsive design, and modern styling techniques.",
          resources: [
            {
              title: "MDN - CSS Learning Area",
              url: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
            },
            {
              title: "CSS Tricks",
              url: "https://css-tricks.com/",
            },
            {
              title: "Learn CSS Grid",
              url: "https://learncssgrid.com/",
            },
            {
              title: "Flexbox Froggy",
              url: "https://flexboxfroggy.com/",
            }
          ]
        },
        { 
          id: "2-3", 
          title: "JavaScript",
          description: "Learn modern JavaScript (ES6+), DOM manipulation, and asynchronous programming.",
          resources: [
            {
              title: "JavaScript.info",
              url: "https://javascript.info/",
            },
            {
              title: "Eloquent JavaScript",
              url: "https://eloquentjavascript.net/",
            },
            {
              title: "MDN - Modern JavaScript",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            },
            {
              title: "You Don't Know JS",
              url: "https://github.com/getify/You-Dont-Know-JS",
            }
          ]
        },
        {
          id: "2-4",
          title: "Browser APIs",
          description: "Understand and work with essential browser APIs like DOM, Fetch, Storage, and more.",
          resources: [
            {
              title: "MDN - Web APIs",
              url: "https://developer.mozilla.org/en-US/docs/Web/API",
            },
            {
              title: "Web Storage API Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
            },
            {
              title: "Fetch API Tutorial",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
            }
          ]
        }
      ]
    },
  },
  {
    id: "3",
    type: "main",
    position: { x: 200, y: 1200 },
    data: { 
      title: "Professional Development and Code Organization",
      description: "Learn professional development practices and code organization techniques.",
      subtopics: [
        { 
          id: "3-1", 
          title: "Git and GitHub",
          description: "Master version control with Git and collaboration through GitHub.",
          resources: [
            {
              title: "Git Handbook",
              url: "https://guides.github.com/introduction/git-handbook/",
            },
            {
              title: "Learn Git Branching",
              url: "https://learngitbranching.js.org/",
            },
            {
              title: "GitHub Learning Lab",
              url: "https://lab.github.com/",
            },
            {
              title: "Pro Git Book",
              url: "https://git-scm.com/book/en/v2",
            }
          ]
        },
        { 
          id: "3-2", 
          title: "Code Organization",
          description: "Learn best practices for organizing code, design patterns, and project structure.",
          resources: [
            {
              title: "Clean Code JavaScript",
              url: "https://github.com/ryanmcdermott/clean-code-javascript",
            },
            {
              title: "JavaScript Design Patterns",
              url: "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
            },
            {
              title: "SOLID Principles in JavaScript",
              url: "https://medium.com/@cramirez92/s-o-l-i-d-the-first-5-principles-of-object-oriented-design-with-javascript-790f6ac9b9fa",
            }
          ]
        },
        {
          id: "3-3",
          title: "Code Quality Tools",
          description: "Use linters, formatters, and other tools to maintain code quality.",
          resources: [
            {
              title: "ESLint Documentation",
              url: "https://eslint.org/docs/user-guide/getting-started",
            },
            {
              title: "Prettier Documentation",
              url: "https://prettier.io/docs/en/",
            },
            {
              title: "TypeScript Handbook",
              url: "https://www.typescriptlang.org/docs/handbook/intro.html",
            }
          ]
        },
        {
          id: "3-4",
          title: "Testing Fundamentals",
          description: "Learn the basics of testing, including unit tests and testing frameworks.",
          resources: [
            {
              title: "Jest Testing Framework",
              url: "https://jestjs.io/docs/getting-started",
            },
            {
              title: "Testing JavaScript with Kent C. Dodds",
              url: "https://testingjavascript.com/",
            },
            {
              title: "React Testing Library",
              url: "https://testing-library.com/docs/react-testing-library/intro/",
            }
          ]
        }
      ]
    },
  },
  {
    id: "4",
    type: "main",
    position: { x: 600, y: 200 },
    data: { 
      title: "Advanced JavaScript Development",
      subtopics: [
        { id: "4-1", title: "Advanced DOM Manipulation" },
        { id: "4-2", title: "Working with APIs" },
        { id: "4-3", title: "Promises and Async/Await" },
        { id: "4-4", title: "TypeScript" }
      ]
    },
  },
  {
    id: "5",
    type: "main",
    position: { x: 900, y: 900 },
    data: { 
      title: "Frameworks and Modern Tools",
      subtopics: [
        { id: "5-1", title: "React.js" },
        { id: "5-2", title: "Vue.js" },
        { id: "5-3", title: "Angular" }
      ]
    },
  },
  {
    id: "6",
    type: "main",
    position: { x: 1800, y: 200 },
    data: { 
      title: "Responsive and Accessible Design",
      subtopics: [
        { id: "6-1", title: "Mobile-First Design" },
        { id: "6-2", title: "Accessibility (a11y)" }
      ]
    },
  },
  {
    id: "7",
    type: "main",
    position: { x: 1400, y: 800 },
    data: { 
      title: "Building and Deploying Projects",
      subtopics: [
        { id: "7-1", title: "Build Tools" },
        { id: "7-2", title: "Deploying Applications" }
      ]
    },
  },
  {
    id: "8",
    type: "main",
    position: { x: 2500, y: 200 },
    data: { 
      title: "Soft Skills and Market Preparation",
      subtopics: [
        { id: "8-1", title: "Working on Real Projects" },
        { id: "8-2", title: "Interview Preparation" }
      ]
    },
  },
  {
    id: "9",
    type: "main",
    position: { x: 2000, y: 900 },
    data: { 
      title: "Mastery and Specialization",
      subtopics: [
        { id: "9-1", title: "Advanced Technologies" },
        { id: "9-2", title: "Community Contributions" },
        { id: "9-3", title: "Specialization" }
      ]
    },
  },
];

const roadmapEdges = [
    { id: "e1-2", source: "1", target: "2", type: "main" },
    { id: "e2-3", source: "2", target: "3", type: "main" },
    { id: "e3-4", source: "3", target: "4", type: "main" },
    { id: "e4-5", source: "4", target: "5", type: "main" },
    { id: "e5-6", source: "5", target: "6", type: "main" },
    { id: "e6-7", source: "6", target: "7", type: "main" },
    { id: "e7-8", source: "7", target: "8", type: "main" },
    { id: "e8-9", source: "8", target: "9", type: "main" }
];

export { roadmapNodes, roadmapEdges };
