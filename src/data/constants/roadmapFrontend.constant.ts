const roadmapNodes = [
  {
    id: "1",
    type: "main",
    position: { x: 0, y: 200 },
    data: { 
      title: "Programming and Web Fundamentals",
      description: "Learn the basics of programming and web development."
    },
  },
  {
    id: "1-1",
    type: "subtopic",
    position: { x: -100, y: 400 },
    data: { 
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
      ] },
    parentNode: "1",
  },
  {
    id: "1-2",
    type: "subtopic",
    position: { x: 300, y: 400 },
    data: { 
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
      ] },
    parentNode: "1",
  },

  {
    id: "2",
    type: "main",
    position: { x: 100, y: 700 },
    data: { title: "Essential Front-End Technologies" },
  },
  {
    id: "2-1",
    type: "subtopic",
    position: { x: 0, y: 900 },
    data: { title: "HTML" },
    parentNode: "2",
  },
  {
    id: "2-2",
    type: "subtopic",
    position: { x: 200, y: 900 },
    data: { title: "CSS" },
    parentNode: "2",
  },
  {
    id: "2-3",
    type: "subtopic",
    position: { x: 400, y: 900 },
    data: { title: "JavaScript " },
    parentNode: "2",
  },

  {
    id: "3",
    type: "main",
    position: { x: 200, y: 1200 },
    data: { title: "Professional Development and Code Organization" },
  },
  {
    id: "3-1",
    type: "subtopic",
    position: { x: 50, y: 1400 },
    data: { title: "Git and GitHub" },
    parentNode: "3",
  },
  {
    id: "3-2",
    type: "subtopic",
    position: { x: 350, y: 1400 },
    data: { title: "Code Organization" },
    parentNode: "3",
  },

  {
    id: "4",
    type: "main",
    position: { x: 600, y: 200 },
    data: { title: "Advanced JavaScript Development" },
  },
  {
    id: "4-1",
    type: "subtopic",
    position: { x: 1100, y: 200 },
    data: { title: "Advanced DOM Manipulation" },
    parentNode: "4",
  },
  {
    id: "4-2",
    type: "subtopic",
    position: { x: 900, y: 400 },
    data: { title: "Working with APIs" },
    parentNode: "4",
  },
  {
    id: "4-3",
    type: "subtopic",
    position: { x: 1100, y: 600 },
    data: { title: "Promises and Async/Await" },
    parentNode: "4",
  },
  {
    id: "4-4",
    type: "subtopic",
    position: { x: 800, y: 600 },
    data: { title: "TypeScript " },
    parentNode: "4",
  },

  {
    id: "5",
    type: "main",
    position: { x: 900, y: 900 },
    data: { title: "Frameworks and Modern Tools" },
  },
  {
    id: "5-1",
    type: "subtopic",
    position: { x: 800, y: 1100 },
    data: { title: "React.js" },
    parentNode: "5",
  },
  {
    id: "5-2",
    type: "subtopic",
    position: { x: 900, y: 1300 },
    data: { title: "Vue.js" },
    parentNode: "5",
  },
  {
    id: "5-3",
    type: "subtopic",
    position: { x: 1000, y: 1500 },
    data: { title: "Angular" },
    parentNode: "5",
  },

  {
    id: "6",
    type: "main",
    position: { x: 1800, y: 200 },
    data: { title: "Responsive and Accessible Design" },
  },
  {
    id: "6-1",
    type: "subtopic",
    position: { x: 2000, y: 400 },
    data: { title: "Mobile-First Design" },
    parentNode: "6",
  },
  {
    id: "6-2",
    type: "subtopic",
    position: { x: 1900, y: 600 },
    data: { title: "Accessibility (a11y)" },
    parentNode: "6",
  },

  {
    id: "7",
    type: "main",
    position: { x: 1400, y: 800 },
    data: { title: "Building and Deploying Projects" },
  },
  {
    id: "7-1",
    type: "subtopic",
    position: { x: 1400, y: 1100 },
    data: { title: "Build Tools" },
    parentNode: "7",
  },
  {
    id: "7-2",
    type: "subtopic",
    position: { x: 1600, y: 1300 },
    data: { title: "Deploying Applications" },
    parentNode: "7",
  },

  {
    id: "8",
    type: "main",
    position: { x: 2500, y: 200 },
    data: { title: "Soft Skills and Market Preparation" },
  },
  {
    id: "8-1",
    type: "subtopic",
    position: { x: 2400, y: 400 },
    data: { title: "Working on Real Projects" },
    parentNode: "8",
  },
  {
    id: "8-2",
    type: "subtopic",
    position: { x: 2600, y: 600 },
    data: { title: "Interview Preparation" },
    parentNode: "8",
  },

  {
    id: "9",
    type: "main",
    position: { x: 2000, y: 900 },
    data: { title: "Mastery and Specialization" },
  },
  {
    id: "9-1",
    type: "subtopic",
    position: { x: 2200, y: 1100 },
    data: { title: "Advanced Technologies" },
    parentNode: "9",
  },
  {
    id: "9-2",
    type: "subtopic",
    position: { x: 2100, y: 1300 },
    data: { title: "Community Contributions" },
    parentNode: "9",
  },
  {
    id: "9-3",
    type: "subtopic",
    position: { x: 2000, y: 1500 },
    data: { title: "Specialization" },
    parentNode: "9",
  },
];

const roadmapEdges = [
    // Main path edges
    { id: "e1-2", source: "1", target: "2", type: "main" },
    { id: "e2-3", source: "2", target: "3", type: "main" },
    { id: "e3-4", source: "3", target: "4", type: "main" },
    { id: "e4-5", source: "4", target: "5", type: "main" },
    { id: "e5-6", source: "5", target: "6", type: "main" },
    { id: "e6-7", source: "6", target: "7", type: "main" },
    { id: "e7-8", source: "7", target: "8", type: "main" },
    { id: "e8-9", source: "8", target: "9", type: "main" },
  
    // Subtopic edges
    { id: "e1-1-1", source: "1", target: "1-1", type: "subtopic" },
    { id: "e1-1-2", source: "1-1", target: "1-2", type: "subtopic" },
  
    { id: "e2-1-1", source: "2", target: "2-1", type: "subtopic" },
    { id: "e2-1-2", source: "2-1", target: "2-2", type: "subtopic" },
    { id: "e2-2-3", source: "2-2", target: "2-3", type: "subtopic" },
  
    { id: "e3-1-1", source: "3", target: "3-1", type: "subtopic" },
    { id: "e3-1-2", source: "3-1", target: "3-2", type: "subtopic" },
  
    { id: "e4-1-1", source: "4", target: "4-1", type: "subtopic" },
    { id: "e4-1-2", source: "4-1", target: "4-2", type: "subtopic" },
    { id: "e4-2-3", source: "4-2", target: "4-3", type: "subtopic" },
    { id: "e4-3-4", source: "4-3", target: "4-4", type: "subtopic" },
  
    { id: "e5-1-1", source: "5", target: "5-1", type: "subtopic" },
    { id: "e5-1-2", source: "5-1", target: "5-2", type: "subtopic" },
    { id: "e5-2-3", source: "5-2", target: "5-3", type: "subtopic" },
  
    { id: "e6-1-1", source: "6", target: "6-1", type: "subtopic" },
    { id: "e6-1-2", source: "6-1", target: "6-2", type: "subtopic" },
  
    { id: "e7-1-1", source: "7", target: "7-1", type: "subtopic" },
    { id: "e7-1-2", source: "7-1", target: "7-2", type: "subtopic" },
  
    { id: "e8-1-1", source: "8", target: "8-1", type: "subtopic" },
    { id: "e8-1-2", source: "8-1", target: "8-2", type: "subtopic" },
  
    { id: "e9-1-1", source: "9", target: "9-1", type: "subtopic" },
    { id: "e9-1-2", source: "9-1", target: "9-2", type: "subtopic" },
    { id: "e9-2-3", source: "9-2", target: "9-3", type: "subtopic" },
  ];
  

export { roadmapNodes, roadmapEdges };
