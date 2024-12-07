import { RoadmapNodes } from "../interface";

const roadmapNodes: RoadmapNodes[] = [
  {
    id: "1",
    type: "main",
    position: { x: 0, y: 0 },
    data: {
      title: "The Internet",
      description:
        "The Internet is a global network of interconnected computer networks that use the Internet Protocol Suite (TCP/IP) to communicate. It enables the exchange of data, information, and services across the world, connecting billions of devices and users. The Internet has revolutionized communication, commerce, education, and entertainment, becoming an integral part of modern society. It supports various applications and services, from web browsing and instant messaging to streaming media and online gaming. While offering unprecedented access to information and connectivity, the Internet also raises concerns about privacy, security, and digital divide issues. Visit the following resources to learn more:",
      subtopics: [
        {
          id: "1-1",
          title: "How Does the Internet Work?",
          description:
            "The Internet works through a global network of interconnected computers and servers, communicating via standardized protocols. Data is broken into packets and routed through various network nodes using the Internet Protocol (IP). These packets travel across different physical infrastructures, including fiber optic cables, satellites, and wireless networks. The Transmission Control Protocol (TCP) ensures reliable delivery and reassembly of packets at their destination. Domain Name System (DNS) servers translate human-readable website names into IP addresses. When you access a website, your device sends a request to the appropriate server, which responds with the requested data. This process, facilitated by routers, switches, and other networking equipment, enables the seamless exchange of information across vast distances, forming the backbone of our digital communications.",
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
            },
          ],
        },
        {
          id: "1-2",
          title: "What is HTTP?",
          description:
            "HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the World Wide Web. It’s an application-layer protocol that defines how messages are formatted and transmitted between web browsers and servers.",
          resources: [
            {
              title: "Everything you need to know about HTTP",
              url: "https://cs.fyi/guide/http-in-depth",
            },
            {
              title: "What is HTTP?",
              url: "https://www.cloudflare.com/en-gb/learning/ddos/glossary/hypertext-transfer-protocol-http/",
            },
            {
              title: "How HTTPS Works",
              url: "https://howhttps.works/",
            },
            {
              title: "HTTP/3 Is Now a Standard: Why Use It and How to Get Started",
              url: "https://thenewstack.io/http-3-is-now-a-standard-why-use-it-and-how-to-get-started/",
            },
          ],
        },
        {
          id: "1-3",
          title: "What is a Domain Name?",
          description: "A domain name is a human-readable address used to identify and access websites on the internet. It serves as a more memorable alternative to the numerical IP addresses that computers use to locate web servers.",
          resources: [
            {
              title: "What is a Domain Name? - MDN",
              url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
            },
            {
              title: "What is a domain name? | Domain name vs. URL",
              url: "https://www.cloudflare.com/en-gb/learning/dns/glossary/what-is-a-domain-name/"
            },
            {
              title: "What Is a Domain Name | Domain Names Explained",
              url: "https://www.youtube.com/watch?v=lMHzpBwPuG8&ab_channel=HostingerAcademy",
            },
          ],
        },
        {
          id: "1-4",
          title: "What is Hosting?",
          description: "Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. It involves storing website files on powerful computers called servers, which are connected to a high-speed network.",
          resources: [
            {
              title: "What is Web Hosting?",
              url: "https://www.namecheap.com/guru-guides/what-is-web-hosting/"
            },
            {
              title: "Different Types of Web Hosting Explained! | Shared Hosting vs. VPS Hosting vs. Dedicated Server",
              url: "https://www.youtube.com/watch?v=AXVZYzw8geg&ab_channel=CraylorMade"
            },
            {
              title: "Where to Host a Fullstack Project on a Budget",
              url: "https://www.youtube.com/watch?v=Kx_1NYYJS7Q&ab_channel=BenAwad"
            }
          ]
        },
        {
          id: "1-5",
          title: "Browsers and How They Work",
          description: "A web browser is a software application that enables a user to access and display web pages or other online content through its graphical user interface.",
          resources: [
            {
              title: "What is a Web Browser?",
              url: "https://www.ramotion.com/blog/what-is-web-browser/"
            },
            {
              title: "How Browsers Work",
              url: "https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work"
            },
            {
              title: "How Does a Browser Work?",
              url: "https://www.youtube.com/watch?v=5rLFYtXHo9s&ab_channel=HiteshChoudhary"
            }
          ]
        },
      ],
    },
  },
{
  id: "2",
  type: "main",
  position: { x: 250, y: 150 },
  data: {
    title: "HTML",
    description: "HTML (HyperText Markup Language) is used to structure web pages and web applications. It serves as the foundation for web development, allowing for styling with CSS and interactivity with JavaScript.",
    subtopics: [
      {
        id: "2-1",
        title: "HTML Basics",
        description: "HTML stands for HyperText Markup Language. It gives structure to web pages, which can then be styled using CSS and made interactive with JavaScript.",
        resources: [
          {
            title: "W3Schools: Learn HTML",
            url: "https://www.w3schools.com/html/html_intro.asp"
          },
          {
            title: "web.dev: Learn HTML",
            url: "https://web.dev/learn/html"
          },
          {
            title: "HTML Full Course - Build a Website Tutorial",
            url: "https://www.youtube.com/watch?v=kUMe1FH4CHE"
          }
        ]
      },
      {
        id: "2-2",
        title: "Semantic HTML",
        description: "Semantic HTML involves using elements that describe their meaning and purpose, improving accessibility, SEO, and code readability.",
        resources: [
          {
            title: "Guide to Writing Semantic HTML",
            url: "https://cs.fyi/guide/writing-semantic-html"
          },
          {
            title: "W3Schools: Semantic HTML",
            url: "https://www.w3schools.com/html/html5_semantic_elements.asp"
          },
          {
            title: "Semantic HTML - web.dev",
            url: "https://web.dev/learn/html/semantic-html/"
          },
          {
            title: "Why & When to Use Semantic HTML Elements over Div(s)",
            url: "https://www.youtube.com/watch?v=bOUhq46fd5g&ab_channel=ByteGrad"
          }
        ]
      },
      {
        id: "2-3",
        title: "Forms and Validations",
        description: "Client-side form validation ensures required fields are filled out correctly before data is submitted to the server.",
        resources: [
          {
            title: "MDN Web Docs: Client-side form validation",
            url: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
          },
          {
            title: "Learn Forms by web.dev",
            url: "https://web.dev/learn/forms/"
          },
          {
            title: "W3Schools: JavaScript Form Validation",
            url: "https://www.w3schools.com/js/js_validation.asp"
          }
        ]
      },
      {
        id: "2-4",
        title: "Accessibility",
        description: "Website accessibility ensures that web content is usable by everyone, including individuals with disabilities, by following perceivable, operable, understandable, and robust principles.",
        resources: [
          {
            title: "Accessibility for Developers by Google",
            url: "https://web.dev/accessibility"
          },
          {
            title: "Complete Playlist on Accessibility",
            url: "https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g"
          }
        ]
      },
      {
        id: "2-5",
        title: "Basics of SEO",
        description: "SEO basics include optimizing a website’s content, structure, and performance to improve visibility and ranking in search engine results.",
        resources: [
          {
            title: "Complete SEO Course for Beginners",
            url: "https://www.youtube.com/watch?v=xsVTqzratPs&ab_channel=Ahrefs"
          },
          {
            title: "SEO for 2024: The Complete Guide",
            url: "https://www.youtube.com/watch?v=8YDUP-RH_4g&ab_channel=NathanGotch"
          },
          {
            title: "Google Search documentation",
            url: "https://developers.google.com/search/docs"
          }
        ]
      }
    ]
  }
},
  {
    id: "3",
    type: "main",
    position: { x: -100, y: 250 },
    data: {
      title: "CSS",
      description: "CSS (Cascading Style Sheets) is a fundamental technology for styling web pages. It controls the visual presentation of HTML elements, including layout, colors, fonts, spacing, and responsive design.",
      subtopics: [
        {
          id: "3-1",
          title: "Learn the Basics",
          description: "Master fundamental CSS concepts including selectors, properties, values, specificity, the box model, and basic styling techniques.",
          resources: [
            {
              title: "CSS Fundamentals",
              url: "https://web.dev/learn/css/"
            },
            {
              title: "CSS Tutorial - Zero to Hero",
              url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc"
            },
            {
              title: "MDN CSS Basics",
              url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"
            },
            {
              title: "CSS Crash Course For Absolute Beginners",
              url: "https://www.youtube.com/watch?v=yfoY53QXEnI"
            }
          ]
        },
        {
          id: "3-2",
          title: "Making Layouts",
          description: "Learn different layout techniques including Flexbox, Grid, and positioning to create complex and responsive page structures.",
          resources: [
            {
              title: "A Complete Guide to Flexbox",
              url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
            },
            {
              title: "A Complete Guide to CSS Grid",
              url: "https://css-tricks.com/snippets/css/complete-guide-grid/"
            },
            {
              title: "Learn CSS Layout",
              url: "https://learnlayout.com/"
            },
            {
              title: "CSS Grid Tutorial",
              url: "https://www.youtube.com/watch?v=jV8B24rSN5o"
            }
          ]
        },
        {
          id: "3-3",
          title: "Responsive Design",
          description: "Master responsive web design techniques to create websites that work well across all device sizes and screen resolutions.",
          resources: [
            {
              title: "Responsive Web Design Fundamentals",
              url: "https://web.dev/learn/design/"
            },
            {
              title: "CSS Media Queries",
              url: "https://www.w3schools.com/css/css_rwd_mediaqueries.asp"
            },
            {
              title: "Modern Responsive Design",
              url: "https://www.youtube.com/watch?v=VQraviuwbzU"
            },
            {
              title: "Build a Responsive Website | HTML, CSS Grid, Flexbox",
              url: "https://www.youtube.com/watch?v=p0bGHP-PXD4"
            }
          ]
        }
      ]
    }
  },
  {
    id: "4",
    type: "main",
    position: { x: 500, y: 600 },
    data: {
      title: "JavaScript",
      description: "JavaScript is a versatile programming language that enables interactive and dynamic content on websites. It's essential for modern web development, allowing you to create responsive user interfaces and handle complex client-side operations.",
      subtopics: [
        {
          id: "4-1",
          title: "Learn the Basics",
          description: "Master JavaScript fundamentals including variables, data types, functions, loops, conditionals, and basic programming concepts.",
          resources: [
            {
              title: "JavaScript.info - The Modern JavaScript Tutorial",
              url: "https://javascript.info/"
            },
            {
              title: "MDN JavaScript Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
            },
            {
              title: "JavaScript Crash Course For Beginners",
              url: "https://www.youtube.com/watch?v=hdI2bqOjy3c"
            },
            {
              title: "Eloquent JavaScript - Free Book",
              url: "https://eloquentjavascript.net/"
            }
          ]
        },
        {
          id: "4-2",
          title: "Learn DOM Manipulation",
          description: "Understand how to interact with HTML elements dynamically using JavaScript through the Document Object Model (DOM).",
          resources: [
            {
              title: "DOM Manipulation Explained",
              url: "https://www.freecodecamp.org/news/javascript-dom-manipulation/"
            },
            {
              title: "JavaScript DOM Course",
              url: "https://www.youtube.com/watch?v=5fb2aPlgoys"
            },
            {
              title: "MDN DOM Introduction",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
            },
            {
              title: "JavaScript DOM Projects",
              url: "https://www.youtube.com/watch?v=3PHXvlpOkf4"
            }
          ]
        },
        {
          id: "4-3",
          title: "Fetch API/Ajax",
          description: "Learn how to make HTTP requests and handle responses using JavaScript's Fetch API and AJAX techniques.",
          resources: [
            {
              title: "Working with the Fetch API",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
            },
            {
              title: "JavaScript Fetch API Tutorial",
              url: "https://www.youtube.com/watch?v=drK6mdA9d_M"
            },
            {
              title: "AJAX Crash Course",
              url: "https://www.youtube.com/watch?v=82hnvUYY6QA"
            },
            {
              title: "Modern JavaScript: Fetch API Examples",
              url: "https://www.javascripttutorial.net/javascript-fetch-api/"
            }
          ]
        }
      ]
    }
  },
  {
    id: "5",
    type: "main",
    position: { x: 500, y: 800 },
    data: {
      title: "Version Control Systems",
      description: "Version control systems help track changes to code over time, enabling collaboration between developers and providing a history of code changes. Git is the most widely used version control system in modern software development.",
      subtopics: [
        {
          id: "5-1",
          title: "Git",
          description: "Git is a distributed version control system that tracks changes in source code during software development. It's designed for coordinating work among programmers, but it can be used to track changes in any set of files.",
          resources: [
            {
              title: "Git Handbook by GitHub",
              url: "https://guides.github.com/introduction/git-handbook/"
            },
            {
              title: "Learn Git Branching (Interactive)",
              url: "https://learngitbranching.js.org/"
            },
            {
              title: "Git and GitHub for Beginners - Crash Course",
              url: "https://www.youtube.com/watch?v=RGOj5yH7evk"
            },
            {
              title: "Git Documentation",
              url: "https://git-scm.com/doc"
            },
            {
              title: "Conventional Commits",
              url: "https://www.conventionalcommits.org/"
            },
            {
              title: "GitHub Flow",
              url: "https://docs.github.com/en/get-started/quickstart/github-flow"
            }
          ]
        }
      ]
    }
  },
  {
    id: "6",
    type: "main",
    position: { x: 500, y: 1000 },
    data: {
      title: "VCS Hosting Services",
      description: "Version Control System hosting services provide platforms to store, manage, and collaborate on code repositories. These platforms offer features like issue tracking, pull requests, code review tools, and project management capabilities.",
      subtopics: [
        {
          id: "6-1",
          title: "GitHub",
          description: "GitHub is the most popular platform for hosting Git repositories, offering powerful collaboration features, GitHub Actions for CI/CD, GitHub Pages for hosting, and a vast open-source community.",
          resources: [
            {
              title: "GitHub Documentation",
              url: "https://docs.github.com/en",
            },
            {
              title: "GitHub Skills",
              url: "https://skills.github.com/",
            },
            {
              title: "GitHub Features Tutorial",
              url: "https://www.youtube.com/watch?v=8Dd7KRpKeaE",
            },
            {
              title: "GitHub for Beginners",
              url: "https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners",
            }
          ],
        },
        {
          id: "6-2",
          title: "GitLab",
          description: "GitLab is a complete DevOps platform that enables professionals to perform all the tasks in a project—from project planning and source code management to monitoring and security.",
          resources: [
            {
              title: "GitLab Documentation",
              url: "https://docs.gitlab.com/",
            },
            {
              title: "GitLab Learning Path",
              url: "https://about.gitlab.com/learn/",
            },
            {
              title: "GitLab CI/CD Tutorial",
              url: "https://docs.gitlab.com/ee/ci/quick_start/",
            }
          ],
        },
        {
          id: "6-3",
          title: "Bitbucket",
          description: "Bitbucket is Atlassian's Git solution for professional teams, offering tight integration with other Atlassian products like Jira and Trello.",
          resources: [
            {
              title: "Bitbucket Documentation",
              url: "https://support.atlassian.com/bitbucket-cloud/",
            },
            {
              title: "Getting Started with Bitbucket",
              url: "https://bitbucket.org/product/guides/getting-started/overview",
            },
            {
              title: "Bitbucket Pipelines Guide",
              url: "https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/",
            }
          ],
        }
      ],
    },
  },
  {
    id: "7",
    type: "main",
    position: { x: 500, y: 1200 },
    data: {
      title: "Package Managers",
      description: "Package managers are essential tools in modern web development that automate the process of installing, updating, configuring, and managing dependencies in your projects.",
      subtopics: [
        {
          id: "7-1",
          title: "npm (Node Package Manager)",
          description: "npm is the default package manager for Node.js and the world's largest software registry. It's essential for managing project dependencies and running scripts.",
          resources: [
            {
              title: "npm Documentation",
              url: "https://docs.npmjs.com/",
            },
            {
              title: "npm CLI Commands",
              url: "https://docs.npmjs.com/cli/v8/commands",
            },
            {
              title: "npm Crash Course",
              url: "https://www.youtube.com/watch?v=jHDhaSSKmB0",
            },
            {
              title: "Package.json Guide",
              url: "https://nodejs.dev/learn/the-package-json-guide",
            }
          ],
        },
        {
          id: "7-2",
          title: "Yarn",
          description: "Yarn is a fast, reliable, and secure alternative to npm. It offers features like parallel installation, offline mode, and deterministic dependency resolution.",
          resources: [
            {
              title: "Yarn Documentation",
              url: "https://yarnpkg.com/getting-started",
            },
            {
              title: "Yarn CLI Commands",
              url: "https://classic.yarnpkg.com/en/docs/cli/",
            },
            {
              title: "Yarn vs npm",
              url: "https://www.section.io/engineering-education/npm-vs-yarn-which-one-to-choose/",
            }
          ],
        },
        {
          id: "7-3",
          title: "pnpm",
          description: "pnpm is a fast, disk space efficient package manager that creates a non-flat node_modules directory and shares dependencies across projects.",
          resources: [
            {
              title: "pnpm Documentation",
              url: "https://pnpm.io/motivation",
            },
            {
              title: "Why pnpm?",
              url: "https://medium.com/pnpm/why-should-we-use-pnpm-75ca4bfe7d93",
            },
            {
              title: "pnpm vs npm vs Yarn",
              url: "https://blog.logrocket.com/javascript-package-managers-compared/",
            }
          ],
        }
      ],
    },
  },
  {
    id: "8",
    type: "main",
    position: { x: 500, y: 1400 },
    data: {
      title: "Pick a Framework",
      description: "Modern web development often involves using a JavaScript framework. Choose one that best fits your project needs and learning goals. Each framework has its own strengths and use cases.",
      subtopics: [
        {
          id: "8-1",
          title: "React",
          description: "React is a popular JavaScript library for building user interfaces, particularly single-page applications. It's known for its virtual DOM, component-based architecture, and rich ecosystem.",
          resources: [
            {
              title: "React Documentation",
              url: "https://react.dev/",
            },
            {
              title: "React Roadmap",
              url: "https://roadmap.sh/react",
            },
            {
              title: "Full React Course 2024",
              url: "https://www.youtube.com/watch?v=RVFAyFWO4go",
            }
          ],
        },
        {
          id: "8-2",
          title: "Vue.js",
          description: "Vue.js is a progressive JavaScript framework known for its gentle learning curve and flexible, incrementally adoptable ecosystem.",
          resources: [
            {
              title: "Vue.js Documentation",
              url: "https://vuejs.org/guide/introduction.html",
            },
            {
              title: "Vue.js Course for Beginners",
              url: "https://www.youtube.com/watch?v=FXpIoQ_rT_c",
            },
            {
              title: "Vue.js Roadmap",
              url: "https://roadmap.sh/vue",
            }
          ],
        },
        {
          id: "8-3",
          title: "Angular",
          description: "Angular is a comprehensive TypeScript-based framework with powerful features for building large-scale enterprise applications.",
          resources: [
            {
              title: "Angular Documentation",
              url: "https://angular.io/docs",
            },
            {
              title: "Angular Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=3qBXWUpoPHo",
            },
            {
              title: "Angular Roadmap",
              url: "https://roadmap.sh/angular",
            }
          ],
        },
        {
          id: "8-4",
          title: "Svelte",
          description: "Svelte is a radical new approach to building user interfaces. It shifts much of the work that is typically done in the browser into a compile step at build time.",
          resources: [
            {
              title: "Svelte Documentation",
              url: "https://svelte.dev/docs",
            },
            {
              title: "Svelte Tutorial",
              url: "https://learn.svelte.dev/tutorial/welcome-to-svelte",
            },
            {
              title: "Svelte Crash Course",
              url: "https://www.youtube.com/watch?v=3TVy6GdtNuQ",
            }
          ],
        },
        {
          id: "8-5",
          title: "Solid JS",
          description: "SolidJS is a declarative JavaScript library for creating user interfaces that emphasizes performance and simplicity, using a reactive system without Virtual DOM.",
          resources: [
            {
              title: "SolidJS Documentation",
              url: "https://www.solidjs.com/docs/latest",
            },
            {
              title: "SolidJS Tutorial",
              url: "https://www.solidjs.com/tutorial/introduction_basics",
            },
            {
              title: "SolidJS Crash Course",
              url: "https://www.youtube.com/watch?v=Wu8RuhA6VFs",
            }
          ],
        },
        {
          id: "8-6",
          title: "Qwik",
          description: "Qwik is a new kind of web framework that can deliver instant loading web applications at any size or complexity. It achieves this through resumability of code execution.",
          resources: [
            {
              title: "Qwik Documentation",
              url: "https://qwik.builder.io/docs/",
            },
            {
              title: "Getting Started with Qwik",
              url: "https://qwik.builder.io/tutorial/welcome/overview/",
            },
            {
              title: "Qwik Crash Course",
              url: "https://www.youtube.com/watch?v=zLHYDY9dAbs",
            }
          ],
        }
      ],
    },
  },
  {
    id: "9",
    type: "main",
    position: { x: 500, y: 1600 },
    data: {
      title: "Writing CSS",
      description: "Modern web development offers various approaches to writing and managing CSS, from CSS preprocessors to utility-first frameworks. Each approach has its own benefits and use cases for styling web applications.",
      subtopics: [
        {
          id: "9-1",
          title: "Tailwind CSS",
          description: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. It promotes rapid development and maintainable CSS through composition of utility classes.",
          resources: [
            {
              title: "Tailwind CSS Documentation",
              url: "https://tailwindcss.com/docs",
            },
            {
              title: "Tailwind CSS Full Course",
              url: "https://www.youtube.com/watch?v=lCxcTsOHrjo",
            },
            {
              title: "Tailwind CSS Best Practices",
              url: "https://www.youtube.com/watch?v=xYt_KdQRk7o",
            },
            {
              title: "Tailwind CSS with React/Next.js",
              url: "https://tailwindcss.com/docs/guides/nextjs",
            }
          ],
        },
        {
          id: "9-2",
          title: "Sass/SCSS",
          description: "Sass is a CSS preprocessor that extends CSS with additional features like variables, nested rules, mixins, and functions, making stylesheets more maintainable and organized.",
          resources: [
            {
              title: "Sass Documentation",
              url: "https://sass-lang.com/documentation/",
            },
            {
              title: "Learn Sass In 20 Minutes",
              url: "https://www.youtube.com/watch?v=Zz6eOVaaelI",
            },
            {
              title: "Sass Guidelines",
              url: "https://sass-guidelin.es/",
            },
            {
              title: "Advanced SCSS Techniques",
              url: "https://www.youtube.com/watch?v=wYWf2m_yzBQ",
            }
          ],
        },
        {
          id: "9-3",
          title: "PostCSS",
          description: "PostCSS is a tool for transforming CSS with JavaScript plugins. It can add vendor prefixes, convert modern CSS features to support older browsers, lint CSS, and enable advanced features through its extensive plugin ecosystem.",
          resources: [
            {
              title: "PostCSS Documentation",
              url: "https://postcss.org/",
            },
            {
              title: "Why PostCSS?",
              url: "https://blog.logrocket.com/why-you-should-use-postcss/",
            },
            {
              title: "PostCSS Crash Course",
              url: "https://www.youtube.com/watch?v=ohJcZW60br0",
            },
            {
              title: "Popular PostCSS Plugins",
              url: "https://github.com/postcss/postcss/blob/main/docs/plugins.md",
            }
          ],
        }
      ],
    },
  },
  {
    id: "10",
    type: "main",
    position: { x: 500, y: 1800 },
    data: {
      title: "Linters and Formatters",
      description: "Linters and formatters are essential tools in modern development that help maintain code quality, catch potential errors, and ensure consistent code style across projects and teams.",
      subtopics: [
        {
          id: "10-1",
          title: "ESLint",
          description: "ESLint is a static code analysis tool that helps identify problematic patterns in JavaScript code. It enforces coding standards, catches common errors, and can automatically fix many issues.",
          resources: [
            {
              title: "ESLint Documentation",
              url: "https://eslint.org/docs/latest/",
            },
            {
              title: "Getting Started with ESLint",
              url: "https://eslint.org/docs/latest/use/getting-started",
            },
            {
              title: "ESLint Configuration Guide",
              url: "https://blog.logrocket.com/using-eslint-typescript/",
            },
            {
              title: "ESLint Setup Tutorial",
              url: "https://www.youtube.com/watch?v=ZXW6Jn6or1w",
            }
          ],
        },
        {
          id: "10-2",
          title: "Prettier",
          description: "Prettier is an opinionated code formatter that supports many languages and integrates with most editors. It enforces a consistent code style by parsing your code and reprinting it with its own rules.",
          resources: [
            {
              title: "Prettier Documentation",
              url: "https://prettier.io/docs/en/",
            },
            {
              title: "Why Prettier?",
              url: "https://prettier.io/docs/en/why-prettier.html",
            },
            {
              title: "Prettier with ESLint",
              url: "https://prettier.io/docs/en/integrating-with-linters.html",
            },
            {
              title: "VSCode Prettier Setup",
              url: "https://www.youtube.com/watch?v=_gPHtEfHz70",
            }
          ],
        }
      ],
    },
  },
  {
    id: "11",
    type: "main",
    position: { x: 500, y: 2000 },
    data: {
      title: "Module Bundlers",
      description: "Module bundlers are build tools that combine many JavaScript files and their dependencies into a single file that's production-ready. They help optimize loading times and manage complex dependency relationships.",
      subtopics: [
        {
          id: "11-1",
          title: "Vite",
          description: "Vite is a modern build tool that offers a faster and leaner development experience. It leverages native ES modules for instant server start and lightning-fast HMR (Hot Module Replacement).",
          resources: [
            {
              title: "Vite Documentation",
              url: "https://vitejs.dev/guide/",
            },
            {
              title: "Why Vite?",
              url: "https://vitejs.dev/guide/why.html",
            },
            {
              title: "Getting Started with Vite",
              url: "https://www.youtube.com/watch?v=LQQ3CR2JTX8",
            }
          ],
        },
        {
          id: "11-2",
          title: "esbuild",
          description: "esbuild is an extremely fast JavaScript bundler and minifier, written in Go, that's designed to significantly improve build performance.",
          resources: [
            {
              title: "esbuild Documentation",
              url: "https://esbuild.github.io/",
            },
            {
              title: "Why is esbuild fast?",
              url: "https://esbuild.github.io/faq/#why-is-esbuild-fast",
            },
            {
              title: "Getting Started with esbuild",
              url: "https://www.youtube.com/watch?v=9XS_RA6zyyU",
            }
          ],
        },
        {
          id: "11-3",
          title: "Webpack",
          description: "Webpack is a powerful and highly configurable module bundler that has been the industry standard for years. It offers extensive features and a large ecosystem of plugins.",
          resources: [
            {
              title: "Webpack Documentation",
              url: "https://webpack.js.org/concepts/",
            },
            {
              title: "Webpack 5 Crash Course",
              url: "https://www.youtube.com/watch?v=IZGNcSuwBZs",
            },
            {
              title: "Webpack Configuration Guide",
              url: "https://webpack.js.org/configuration/",
            }
          ],
        },
        {
          id: "11-4",
          title: "Rollup",
          description: "Rollup is a module bundler for JavaScript that specializes in creating efficient bundles using ES modules, particularly well-suited for libraries and frameworks.",
          resources: [
            {
              title: "Rollup Documentation",
              url: "https://rollupjs.org/guide/en/",
            },
            {
              title: "Rollup Tutorial",
              url: "https://www.youtube.com/watch?v=ICYLOZuFMz8",
            },
            {
              title: "Why Rollup?",
              url: "https://rollupjs.org/guide/en/#overview",
            }
          ],
        },
        {
          id: "11-5",
          title: "Parcel",
          description: "Parcel is a zero-configuration build tool that offers an easy-to-use, out-of-the-box experience for web application development.",
          resources: [
            {
              title: "Parcel Documentation",
              url: "https://parceljs.org/docs/",
            },
            {
              title: "Getting Started with Parcel",
              url: "https://parceljs.org/getting-started/webapp/",
            },
            {
              title: "Parcel vs Other Bundlers",
              url: "https://parceljs.org/features/comparison/",
            }
          ],
        }
      ],
    },
  },
  {
    id: "12",
    type: "main",
    position: { x: 500, y: 2200 },
    data: {
      title: "Testing",
      description: "Testing is crucial in modern web development to ensure application reliability and maintainability. Different types of testing tools serve various purposes, from unit testing to end-to-end testing.",
      subtopics: [
        {
          id: "12-1",
          title: "Vitest",
          description: "Vitest is a next-generation testing framework powered by Vite. It provides a fast, native ESM-based testing experience with out-of-the-box TypeScript support and Jest compatibility.",
          resources: [
            {
              title: "Vitest Documentation",
              url: "https://vitest.dev/guide/",
            },
            {
              title: "Why Vitest?",
              url: "https://vitest.dev/guide/why.html",
            },
            {
              title: "Getting Started with Vitest",
              url: "https://www.youtube.com/watch?v=oLSgbV32oAs",
            },
            {
              title: "Testing Vue with Vitest",
              url: "https://vueschool.io/articles/vuejs-tutorials/getting-started-with-vitest/",
            }
          ],
        },
        {
          id: "12-2",
          title: "Jest",
          description: "Jest is a popular JavaScript testing framework focused on simplicity. It works with projects using Babel, TypeScript, Node, React, Angular, Vue, and more.",
          resources: [
            {
              title: "Jest Documentation",
              url: "https://jestjs.io/docs/getting-started",
            },
            {
              title: "Jest Crash Course",
              url: "https://www.youtube.com/watch?v=7r4xVDI2vho",
            },
            {
              title: "Testing React with Jest",
              url: "https://jestjs.io/docs/tutorial-react",
            },
            {
              title: "Jest Best Practices",
              url: "https://github.com/goldbergyoni/javascript-testing-best-practices",
            }
          ],
        },
        {
          id: "12-3",
          title: "Playwright",
          description: "Playwright is a powerful testing framework for end-to-end testing. It enables reliable cross-browser testing with built-in auto-wait and web-first assertions.",
          resources: [
            {
              title: "Playwright Documentation",
              url: "https://playwright.dev/docs/intro",
            },
            {
              title: "Playwright Tutorial",
              url: "https://www.youtube.com/watch?v=_Jzr1_p8qhc",
            },
            {
              title: "Playwright Test Generator",
              url: "https://playwright.dev/docs/codegen",
            },
            {
              title: "Playwright Best Practices",
              url: "https://playwright.dev/docs/best-practices",
            }
          ],
        },
        {
          id: "12-4",
          title: "Cypress",
          description: "Cypress is a next-generation front-end testing tool built for the modern web. It enables fast, easy and reliable testing for anything that runs in a browser.",
          resources: [
            {
              title: "Cypress Documentation",
              url: "https://docs.cypress.io/",
            },
            {
              title: "Cypress in 100 Seconds",
              url: "https://www.youtube.com/watch?v=BQqzfHQkREo",
            },
            {
              title: "Cypress Best Practices",
              url: "https://docs.cypress.io/guides/references/best-practices",
            },
            {
              title: "Component Testing with Cypress",
              url: "https://docs.cypress.io/guides/component-testing/overview",
            }
          ],
        }
      ],
    },
  },
  {
    id: "13",
    type: "main",
    position: { x: 500, y: 2400 },
    data: {
      title: "Web Security Basics",
      description: "Understanding web security fundamentals is crucial for building secure web applications. This includes knowledge of common vulnerabilities, security protocols, and best practices for protecting user data.",
      subtopics: [
        {
          id: "13-1",
          title: "CORS (Cross-Origin Resource Sharing)",
          description: "CORS is a security mechanism that allows or restricts web applications running at one origin to request resources from a different origin. Understanding CORS is essential for secure client-server communication.",
          resources: [
            {
              title: "CORS Explained",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
            },
            {
              title: "CORS in 100 Seconds",
              url: "https://www.youtube.com/watch?v=4KHiSt0oLJ0",
            },
            {
              title: "CORS Guide",
              url: "https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/",
            }
          ],
        },
        {
          id: "13-2",
          title: "HTTPS",
          description: "HTTPS (Hypertext Transfer Protocol Secure) is the secure version of HTTP, encrypting all communication between browser and server. It's essential for protecting sensitive data and maintaining user privacy.",
          resources: [
            {
              title: "HTTPS Explained",
              url: "https://www.cloudflare.com/learning/ssl/what-is-https/",
            },
            {
              title: "How HTTPS Works",
              url: "https://howhttps.works/",
            },
            {
              title: "SSL/TLS and HTTPS",
              url: "https://www.youtube.com/watch?v=j9QmMEWmcfo",
            }
          ],
        },
        {
          id: "13-3",
          title: "Content Security Policy (CSP)",
          description: "CSP is an added layer of security that helps detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection attacks.",
          resources: [
            {
              title: "CSP MDN Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
            },
            {
              title: "Content Security Policy Reference",
              url: "https://content-security-policy.com/",
            },
            {
              title: "CSP Implementation Guide",
              url: "https://web.dev/csp/",
            }
          ],
        },
        {
          id: "13-4",
          title: "OWASP Security Risks",
          description: "The OWASP Top 10 is a standard awareness document representing the most critical security risks to web applications. Understanding these risks is crucial for building secure applications.",
          resources: [
            {
              title: "OWASP Top 10",
              url: "https://owasp.org/www-project-top-ten/",
            },
            {
              title: "Web Security Essentials",
              url: "https://www.youtube.com/watch?v=IgJWPZ2OKO4",
            },
            {
              title: "OWASP Security Guide",
              url: "https://cheatsheetseries.owasp.org/",
            },
            {
              title: "Web Security Academy",
              url: "https://portswigger.net/web-security",
            }
          ],
        }
      ],
    },
  },
  {
    id: "14",
    type: "main",
    position: { x: 500, y: 2600 },
    data: {
      title: "Web Components",
      description: "Web Components are a set of web platform APIs that allow you to create reusable, encapsulated HTML elements. They're built on web standards and work across modern browsers.",
      subtopics: [
        {
          id: "14-1",
          title: "HTML Templates",
          description: "HTML templates (<template> and <slot> elements) allow you to write markup templates that are not displayed in the rendered page but can be used to create custom elements dynamically.",
          resources: [
            {
              title: "Using HTML Templates",
              url: "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots",
            },
            {
              title: "HTML Template Element",
              url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template",
            },
            {
              title: "HTML Templates Tutorial",
              url: "https://www.youtube.com/watch?v=qV7jh7ctALg",
            }
          ],
        },
        {
          id: "14-2",
          title: "Custom Elements",
          description: "Custom Elements allow you to define your own custom HTML elements with encapsulated functionality. They provide a way to extend HTML with your own elements that behave like standard HTML elements.",
          resources: [
            {
              title: "Custom Elements Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements",
            },
            {
              title: "Custom Elements v1",
              url: "https://web.dev/custom-elements-v1/",
            },
            {
              title: "Building Custom Elements",
              url: "https://www.youtube.com/watch?v=otCpCn0l4Wo",
            },
            {
              title: "Custom Elements Everywhere",
              url: "https://custom-elements-everywhere.com/",
            }
          ],
        },
        {
          id: "14-3",
          title: "Shadow DOM",
          description: "Shadow DOM provides encapsulation for JavaScript, CSS, and templating in a Web Component. It allows a component to have its own hidden DOM tree that can't be accidentally accessed from the main document.",
          resources: [
            {
              title: "Shadow DOM Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",
            },
            {
              title: "Shadow DOM v1",
              url: "https://web.dev/shadowdom-v1/",
            },
            {
              title: "Shadow DOM Explained",
              url: "https://www.youtube.com/watch?v=ShadowDOMVideoID",
            },
            {
              title: "Shadow DOM Deep Dive",
              url: "https://blog.logrocket.com/understanding-shadow-dom-v1-fa9b81ebe3ac/",
            }
          ],
        }
      ],
    },
  },
  {
    id: "15",
    type: "main",
    position: { x: 500, y: 2800 },
    data: {
      title: "Type Checkers",
      description: "Type checkers help catch errors early in development by adding static typing to JavaScript. They improve code quality, maintainability, and developer experience through better tooling and documentation.",
      subtopics: [
        {
          id: "15-1",
          title: "TypeScript",
          description: "TypeScript is a strongly typed programming language that builds on JavaScript. It adds optional static types, classes, and modules to JavaScript, helping you write more robust and maintainable code.",
          resources: [
            {
              title: "TypeScript Documentation",
              url: "https://www.typescriptlang.org/docs/",
            },
            {
              title: "TypeScript Handbook",
              url: "https://www.typescriptlang.org/docs/handbook/intro.html",
            },
            {
              title: "TypeScript Full Course for Beginners",
              url: "https://www.youtube.com/watch?v=30LWjhZzg50",
            },
            {
              title: "TypeScript Deep Dive",
              url: "https://basarat.gitbook.io/typescript/",
            },
            {
              title: "TypeScript with React",
              url: "https://react-typescript-cheatsheet.netlify.app/",
            },
            {
              title: "Advanced TypeScript Concepts",
              url: "https://www.youtube.com/watch?v=F7O4gA0GXqI",
            }
          ],
        }
      ],
    },
  },
  {
    id: "16",
    type: "main",
    position: { x: 500, y: 3000 },
    data: {
      title: "Server-Side Rendering (SSR)",
      description: "Server-Side Rendering frameworks enable rendering web pages on the server before sending them to the client, improving initial load performance and SEO. These frameworks provide powerful features for building full-stack applications.",
      subtopics: [
        {
          id: "16-1",
          title: "Next.js",
          description: "Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations. It provides an excellent developer experience with features like file-system routing and API routes.",
          resources: [
            {
              title: "Next.js Documentation",
              url: "https://nextjs.org/docs",
            },
            {
              title: "Learn Next.js",
              url: "https://nextjs.org/learn",
            },
            {
              title: "Next.js Full Course 2024",
              url: "https://www.youtube.com/watch?v=ZVnjOPwW4ZA",
            },
            {
              title: "Next.js App Router Course",
              url: "https://www.youtube.com/watch?v=wm5gMKuwSYk",
            }
          ],
        },
        {
          id: "16-2",
          title: "Nuxt.js",
          description: "Nuxt.js is a Vue.js framework that adds server-side rendering, static site generation, and other enterprise-level features to Vue applications. It provides a structured way to build full-stack Vue applications.",
          resources: [
            {
              title: "Nuxt.js Documentation",
              url: "https://nuxt.com/docs",
            },
            {
              title: "Nuxt.js Fundamentals",
              url: "https://masteringnuxt.com/",
            },
            {
              title: "Learn Nuxt.js",
              url: "https://www.youtube.com/watch?v=fTPCKnZZ2dk",
            },
            {
              title: "Nuxt.js Best Practices",
              url: "https://www.youtube.com/watch?v=7IuH3HcR7Zo",
            }
          ],
        },
        {
          id: "16-3",
          title: "SvelteKit",
          description: "SvelteKit is the official application framework for Svelte, providing server-side rendering, routing, and other features needed for building full-stack web applications with Svelte.",
          resources: [
            {
              title: "SvelteKit Documentation",
              url: "https://kit.svelte.dev/docs/introduction",
            },
            {
              title: "SvelteKit Tutorial",
              url: "https://learn.svelte.dev/tutorial/welcome-to-svelte",
            },
            {
              title: "Build with SvelteKit",
              url: "https://www.youtube.com/watch?v=MoGkX4RvZ38",
            },
            {
              title: "SvelteKit Crash Course",
              url: "https://www.youtube.com/watch?v=9OlLxkaeVvw",
            }
          ],
        }
      ],
    },
  },
  {
    id: "17",
    type: "main",
    position: { x: 500, y: 3200 },
    data: {
      title: "GraphQL",
      description: "GraphQL is a query language for APIs and a runtime for executing those queries. It provides a more efficient, powerful and flexible alternative to REST, allowing clients to request exactly the data they need.",
      subtopics: [
        {
          id: "17-1",
          title: "Apollo Client",
          description: "Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It's designed to help you build UI components that fetch data via GraphQL.",
          resources: [
            {
              title: "Apollo Client Documentation",
              url: "https://www.apollographql.com/docs/react/",
            },
            {
              title: "Getting Started with Apollo Client",
              url: "https://www.apollographql.com/docs/react/get-started/",
            },
            {
              title: "Apollo Client Tutorial",
              url: "https://www.youtube.com/watch?v=YyUWW04HwKY",
            },
            {
              title: "Apollo Client with React",
              url: "https://www.youtube.com/watch?v=Dr2dDWzThK8",
            }
          ],
        },
        {
          id: "17-2",
          title: "Relay Modern",
          description: "Relay is a JavaScript framework for building data-driven React applications powered by GraphQL. It's designed to be declarative, collocated, and scalable, with strong focus on performance and developer productivity.",
          resources: [
            {
              title: "Relay Documentation",
              url: "https://relay.dev/docs/",
            },
            {
              title: "Introduction to Relay Modern",
              url: "https://relay.dev/docs/getting-started/introduction/",
            },
            {
              title: "Relay Modern Deep Dive",
              url: "https://www.youtube.com/watch?v=wXLf18DsV-I",
            },
            {
              title: "Building with Relay",
              url: "https://relay.dev/docs/tutorial/intro/",
            }
          ],
        }
      ],
    },
  },
  {
    id: "18",
    type: "main",
    position: { x: 500, y: 3400 },
    data: {
      title: "Progressive Web Apps (PWAs)",
      description: "Progressive Web Apps combine the best of web and native apps. They are web applications that can progressively enhance to deliver native app-like experiences to users, including offline functionality, push notifications, and device hardware access.",
      subtopics: [
        {
          id: "18-1",
          title: "Storage",
          description: "Web Storage APIs allow PWAs to store data locally, enabling offline functionality and improved performance. This includes technologies like IndexedDB, Cache API, and Web Storage.",
          resources: [
            {
              title: "Web Storage API Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API",
            },
            {
              title: "IndexedDB Tutorial",
              url: "https://web.dev/indexeddb/",
            },
            {
              title: "Cache API Guide",
              url: "https://web.dev/cache-api-quick-guide/",
            }
          ],
        },
        {
          id: "18-2",
          title: "Web Sockets",
          description: "WebSocket API enables real-time, bidirectional communication between web clients and servers, essential for building interactive features in PWAs.",
          resources: [
            {
              title: "WebSocket API Documentation",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",
            },
            {
              title: "WebSocket Tutorial",
              url: "https://www.youtube.com/watch?v=2Nt-ZrNP22A",
            },
            {
              title: "Real-time Apps with WebSockets",
              url: "https://web.dev/websockets-basics/",
            }
          ],
        },
        {
          id: "18-3",
          title: "Location",
          description: "Geolocation API allows PWAs to access the user's location, enabling location-based features and services.",
          resources: [
            {
              title: "Geolocation API Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API",
            },
            {
              title: "Using Geolocation",
              url: "https://web.dev/geolocation/",
            },
            {
              title: "Location-Based PWA Tutorial",
              url: "https://www.youtube.com/watch?v=KiR3qHxS5hY",
            }
          ],
        },
        {
          id: "18-4",
          title: "Notifications",
          description: "Push API and Notifications API enable PWAs to receive push messages and display system notifications, even when the app is not active.",
          resources: [
            {
              title: "Web Push Notifications",
              url: "https://web.dev/push-notifications-overview/",
            },
            {
              title: "Notifications API",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API",
            },
            {
              title: "Push API Guide",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Push_API",
            }
          ],
        },
        {
          id: "18-5",
          title: "Device Orientation",
          description: "Device Orientation API provides information about the physical orientation and motion of a device, enabling responsive and interactive features.",
          resources: [
            {
              title: "Device Orientation API",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Device_orientation_events",
            },
            {
              title: "Using Device Orientation",
              url: "https://web.dev/device-orientation/",
            },
            {
              title: "Orientation Sensors Guide",
              url: "https://developers.google.com/web/fundamentals/native-hardware/device-orientation",
            }
          ],
        },
        {
          id: "18-6",
          title: "Payment Integration",
          description: "Payment Request API standardizes the payment process in web applications, providing a consistent and secure way to handle payments.",
          resources: [
            {
              title: "Payment Request API",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API",
            },
            {
              title: "Web Payments Overview",
              url: "https://web.dev/payments/",
            },
            {
              title: "Implementing Web Payments",
              url: "https://developers.google.com/web/fundamentals/payments",
            }
          ],
        },
        {
          id: "18-7",
          title: "Credentials Management",
          description: "Credential Management API enables websites to interact with the browser's credential manager to seamlessly sign users in and out.",
          resources: [
            {
              title: "Credential Management API",
              url: "https://developer.mozilla.org/en-US/docs/Web/API/Credential_Management_API",
            },
            {
              title: "Web Authentication Guide",
              url: "https://web.dev/webauthn/",
            },
            {
              title: "Sign In Users More Easily",
              url: "https://developers.google.com/web/updates/2016/04/credential-management-api",
            }
          ],
        }
      ],
    },
  },
  {
    id: "19",
    type: "main",
    position: { x: 500, y: 3600 },
    data: {
      title: "Static Site Generators",
      description: "Static Site Generators (SSGs) create full static HTML websites based on raw data and templates. They provide better performance, security, and SEO compared to dynamic websites, while maintaining a modern development experience.",
      subtopics: [
        {
          id: "19-1",
          title: "Astro",
          description: "Astro is a modern static site generator that allows you to use your favorite JavaScript frameworks while shipping zero JavaScript by default. It's perfect for content-focused websites.",
          resources: [
            {
              title: "Astro Documentation",
              url: "https://docs.astro.build/",
            },
            {
              title: "Why Astro?",
              url: "https://docs.astro.build/en/concepts/why-astro/",
            },
            {
              title: "Getting Started with Astro",
              url: "https://www.youtube.com/watch?v=F2pw1C9eKXw",
            },
            {
              title: "Building with Astro",
              url: "https://www.youtube.com/watch?v=zrPVTf761OI",
            }
          ],
        },
        {
          id: "19-2",
          title: "VuePress",
          description: "VuePress is a Vue-powered static site generator optimized for technical documentation. It features a default theme designed for technical documentation and can be extended with Vue components.",
          resources: [
            {
              title: "VuePress Documentation",
              url: "https://vuepress.vuejs.org/guide/",
            },
            {
              title: "VuePress Tutorial",
              url: "https://www.youtube.com/watch?v=lIv1ItUzktc",
            },
            {
              title: "Creating a Blog with VuePress",
              url: "https://blog.logrocket.com/creating-blog-with-vuepress/",
            },
            {
              title: "VuePress Configuration Guide",
              url: "https://vuepress.vuejs.org/config/",
            }
          ],
        },
        {
          id: "19-3",
          title: "Eleventy (11ty)",
          description: "Eleventy is a simpler static site generator that's zero-config by default but can be complex when needed. It works with multiple template languages and has great performance.",
          resources: [
            {
              title: "Eleventy Documentation",
              url: "https://www.11ty.dev/docs/",
            },
            {
              title: "Learn Eleventy From Scratch",
              url: "https://piccalil.li/course/learn-eleventy-from-scratch/",
            },
            {
              title: "Getting Started with 11ty",
              url: "https://www.youtube.com/watch?v=p81J7G1qFAM",
            },
            {
              title: "11ty for Static Sites",
              url: "https://www.youtube.com/watch?v=TAWx9KFgwRA",
            }
          ],
        }
      ],
    },
  },
  {
    id: "20",
    type: "main",
    position: { x: 500, y: 3800 },
    data: {
      title: "Mobile App Development",
      description: "Modern frameworks enable web developers to create native and hybrid mobile applications using their existing JavaScript/TypeScript knowledge. These frameworks provide native performance while maintaining a single codebase for multiple platforms.",
      subtopics: [
        {
          id: "20-1",
          title: "React Native",
          description: "React Native is a popular framework for building native mobile applications using React. It allows you to create truly native apps and doesn't compromise on your users' experience.",
          resources: [
            {
              title: "React Native Documentation",
              url: "https://reactnative.dev/docs/getting-started",
            },
            {
              title: "React Native Course 2024",
              url: "https://www.youtube.com/watch?v=obH0Po_RdWk",
            },
            {
              title: "React Native Best Practices",
              url: "https://reactnative.dev/docs/performance",
            },
            {
              title: "React Native Architecture",
              url: "https://www.youtube.com/watch?v=UcqRXTriUVI",
            }
          ],
        },
        {
          id: "20-2",
          title: "Flutter",
          description: "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using the Dart programming language.",
          resources: [
            {
              title: "Flutter Documentation",
              url: "https://docs.flutter.dev/",
            },
            {
              title: "Flutter Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=VPvVD8t02U8",
            },
            {
              title: "Flutter Architecture Patterns",
              url: "https://medium.com/flutter-community/flutter-design-patterns-0-introduction-5e88cfff6792",
            },
            {
              title: "Flutter vs React Native",
              url: "https://www.youtube.com/watch?v=rpkKYQCioW0",
            }
          ],
        },
        {
          id: "20-3",
          title: "Ionic",
          description: "Ionic is an open-source framework that enables developers to build cross-platform mobile applications using web technologies (HTML, CSS, and JavaScript/TypeScript).",
          resources: [
            {
              title: "Ionic Documentation",
              url: "https://ionicframework.com/docs",
            },
            {
              title: "Getting Started with Ionic",
              url: "https://ionicframework.com/docs/intro/cli",
            },
            {
              title: "Ionic with React Tutorial",
              url: "https://www.youtube.com/watch?v=_03VKmdrxV8",
            },
            {
              title: "Ionic Framework Crash Course",
              url: "https://www.youtube.com/watch?v=AvbuIRg8_Jg",
            }
          ],
        }
      ],
    },
  },
  {
    id: "21",
    type: "main",
    position: { x: 500, y: 4000 },
    data: {
      title: "Desktop App Development",
      description: "Modern frameworks enable web developers to create native desktop applications using web technologies. These frameworks provide native performance and access to system APIs while leveraging web development skills.",
      subtopics: [
        {
          id: "21-1",
          title: "Electron",
          description: "Electron is a framework for building cross-platform desktop applications using JavaScript, HTML, and CSS. It combines Chromium and Node.js into a single runtime, enabling web developers to create native desktop experiences.",
          resources: [
            {
              title: "Electron Documentation",
              url: "https://www.electronjs.org/docs/latest/",
            },
            {
              title: "Getting Started with Electron",
              url: "https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app",
            },
            {
              title: "Electron Crash Course",
              url: "https://www.youtube.com/watch?v=ML743nrkMHw",
            },
            {
              title: "Electron Best Practices",
              url: "https://www.electronjs.org/docs/latest/tutorial/security",
            }
          ],
        },
        {
          id: "21-2",
          title: "Tauri",
          description: "Tauri is a toolkit for building smaller, faster, and more secure desktop applications with web technologies. It uses a Rust backend for better performance and security compared to Electron.",
          resources: [
            {
              title: "Tauri Documentation",
              url: "https://tauri.app/v1/guides/",
            },
            {
              title: "Why Tauri?",
              url: "https://tauri.app/v1/guides/getting-started/why-tauri",
            },
            {
              title: "Building with Tauri",
              url: "https://www.youtube.com/watch?v=kRoGYgAuZQE",
            },
            {
              title: "Tauri vs Electron",
              url: "https://www.youtube.com/watch?v=jfUPLuPL8YQ",
            }
          ],
        },
        {
          id: "21-3",
          title: "Flutter Desktop",
          description: "Flutter's desktop support allows you to build native desktop applications for Windows, macOS, and Linux using the same codebase. It provides native performance and a consistent look across platforms.",
          resources: [
            {
              title: "Flutter Desktop Documentation",
              url: "https://docs.flutter.dev/desktop",
            },
            {
              title: "Getting Started with Flutter Desktop",
              url: "https://docs.flutter.dev/platform-integration/desktop",
            },
            {
              title: "Flutter Desktop Development",
              url: "https://www.youtube.com/watch?v=R4LHxid_0SI",
            },
            {
              title: "Building Desktop Apps with Flutter",
              url: "https://medium.com/flutter/announcing-flutter-for-desktop-create-and-publish-beautiful-native-apps-for-windows-macos-and-linux-915f543a4d4e",
            }
          ],
        }
      ],
    },
  }
];

const roadmapEdges = [
  { id: "e1-2", source: "1", target: "2", type: "main" },
  { id: "e2-3", source: "2", target: "3", type: "main" },
  { id: "e3-4", source: "3", target: "4", type: "main" },
  { id: "e4-5", source: "4", target: "5", type: "main" },
  { id: "e5-6", source: "5", target: "6", type: "main" },
  { id: "e6-7", source: "6", target: "7", type: "main" },
  { id: "e7-8", source: "7", target: "8", type: "main" },
  { id: "e8-9", source: "8", target: "9", type: "main" },
  { id: "e9-10", source: "9", target: "10", type: "main" },
  { id: "e10-11", source: "10", target: "11", type: "main" },
  { id: "e11-12", source: "11", target: "12", type: "main" },
  { id: "e12-13", source: "12", target: "13", type: "main" },
  { id: "e13-14", source: "13", target: "14", type: "main" },
  { id: "e14-15", source: "14", target: "15", type: "main" },
  { id: "e15-16", source: "15", target: "16", type: "main" },
  { id: "e16-17", source: "16", target: "17", type: "main" },
  { id: "e17-18", source: "17", target: "18", type: "main" },
  { id: "e18-19", source: "18", target: "19", type: "main" },
  { id: "e19-20", source: "19", target: "20", type: "main" },
  { id: "e20-21", source: "20", target: "21", type: "main" },
];

export { roadmapNodes, roadmapEdges };
