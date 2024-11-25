const roadmapNodes = [
  {
    id: "1",
    type: "main",
    position: { x: 0, y: 200 },
    data: { 
      title: "Programming and Web Fundamentals",
      description: "Learn the basics of programming and web development.",
      subtopics: [
        { 
          id: "1-1",
          title: "Programming Basics", 
          description: "Learn the basics of programming.", 
          resources: [
            {
              title: "Scratch",
              url: "https://scratch.mit.edu/",  
            },
            {
              title: "Code.org",
              url: "https://code.org/",
            },
          ]
        },
        { 
          id: "1-2",
          title: "Web Concepts",
          description: "Learn the basics of web development.",
          resources: [
            {
              title: "Mozilla Developer Network",
              url: "https://developer.mozilla.org/",
            },
            {
              title: "W3Schools",
              url: "https://www.w3schools.com/",
            },
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
      subtopics: [
        { id: "2-1", title: "HTML" },
        { id: "2-2", title: "CSS" },
        { id: "2-3", title: "JavaScript" }
      ]
    },
  },
  {
    id: "3",
    type: "main",
    position: { x: 200, y: 1200 },
    data: { 
      title: "Professional Development and Code Organization",
      subtopics: [
        { id: "3-1", title: "Git and GitHub" },
        { id: "3-2", title: "Code Organization" }
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
