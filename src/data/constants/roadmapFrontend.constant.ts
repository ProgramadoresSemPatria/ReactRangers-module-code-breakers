const roadmapNodes = [
  {
    id: "1",
    type: "block",
    position: { x: -200, y: 0 },
    data: { title: "Programming and Web Fundamentals" },
  },
  {
    id: "1-1",
    type: "subtopic",
    position: { x: 0, y: 0 },
    data: { title: "Programming Basics" },
    parentNode: "1",
  },
  {
    id: "1-2",
    type: "subtopic",
    position: { x: 200, y: 0 },
    data: { title: "Web Concepts" },
    parentNode: "1",
  },

  {
    id: "2",
    type: "block",
    position: { x: 100, y: 200 },
    data: { title: "Essential Front-End Technologies" },
  },
  {
    id: "2-1",
    type: "subtopic",
    position: { x: -100, y: 200 },
    data: { title: "HTML" },
    parentNode: "2",
  },
  {
    id: "2-2",
    type: "subtopic",
    position: { x: -100, y: 300 },
    data: { title: "CSS" },
    parentNode: "2",
  },
  {
    id: "2-3",
    type: "subtopic",
    position: { x: -100, y: 400 },
    data: { title: "JavaScript" },
    parentNode: "2",
  },

  {
    id: "3",
    type: "block",
    position: { x: 0, y: 500 },
    data: { title: "Professional Development and Code Organization" },
  },
  {
    id: "3-1",
    type: "subtopic",
    position: { x: 0, y: 650 },
    data: { title: "Git and GitHub" },
    parentNode: "3",
  },
  {
    id: "3-2",
    type: "subtopic",
    position: { x: 200, y: 650 },
    data: { title: "Code Organization" },
    parentNode: "3",
  },

  {
    id: "4",
    type: "block",
    position: { x: 500, y: 250 },
    data: { title: "Advanced JavaScript Development" },
  },
  {
    id: "4-1",
    type: "subtopic",
    position: { x: 500, y: 450 },
    data: { title: "Advanced DOM Manipulation" },
    parentNode: "4",
  },
  {
    id: "4-2",
    type: "subtopic",
    position: { x: 700, y: 465 },
    data: { title: "Working with APIs" },
    parentNode: "4",
  },
  {
    id: "4-3",
    type: "subtopic",
    position: { x: 700, y: 350 },
    data: { title: "Promises and Async/Await" },
    parentNode: "4",
  },
  {
    id: "4-4",
    type: "subtopic",
    position: { x: 700, y: 250 },
    data: { title: "TypeScript Basics" },
    parentNode: "4",
  },

  {
    id: "5",
    type: "block",
    position: { x: 900, y: 0 },
    data: { title: "Frameworks and Modern Tools" },
  },
  {
    id: "5-1",
    type: "subtopic",
    position: { x: 1100, y: 0 },
    data: { title: "React.js" },
    parentNode: "5",
  },
  {
    id: "5-2",
    type: "subtopic",
    position: { x: 1100, y: 100 },
    data: { title: "Vue.js" },
    parentNode: "5",
  },
  {
    id: "5-3",
    type: "subtopic",
    position: { x: 1100, y: 200 },
    data: { title: "Angular" },
    parentNode: "5",
  },

  {
    id: "6",
    type: "block",
    position: { x: 900, y: 650 },
    data: { title: "Responsive and Accessible Design" },
  },
  {
    id: "6-1",
    type: "subtopic",
    position: { x: 1100, y: 650 },
    data: { title: "Mobile-First Design" },
    parentNode: "6",
  },
  {
    id: "6-2",
    type: "subtopic",
    position: { x: 1300, y: 650 },
    data: { title: "Accessibility (a11y)" },
    parentNode: "6",
  },

  {
    id: "7",
    type: "block",
    position: { x: 1500, y: 300 },
    data: { title: "Building and Deploying Projects" },
  },
  {
    id: "7-1",
    type: "subtopic",
    position: { x: 1500, y: 400 },
    data: { title: "Build Tools" },
    parentNode: "7",
  },
  {
    id: "7-2",
    type: "subtopic",
    position: { x: 1500, y: 500 },
    data: { title: "Deploying Applications" },
    parentNode: "7",
  },

  {
    id: "8",
    type: "block",
    position: { x: 1800, y: 100 },
    data: { title: "Soft Skills and Market Preparation" },
  },
  {
    id: "8-1",
    type: "subtopic",
    position: { x: 1800, y: 250 },
    data: { title: "Working on Real Projects" },
    parentNode: "8",
  },
  {
    id: "8-2",
    type: "subtopic",
    position: { x: 1800, y: 350 },
    data: { title: "Interview Preparation" },
    parentNode: "8",
  },

  {
    id: "9",
    type: "block",
    position: { x: 1900, y: 700 },
    data: { title: "Mastery and Specialization" },
  },
  {
    id: "9-1",
    type: "subtopic",
    position: { x: 2000, y: 600 },
    data: { title: "Advanced Technologies" },
    parentNode: "9",
  },
  {
    id: "9-2",
    type: "subtopic",
    position: { x: 2100, y: 500 },
    data: { title: "Community Contributions" },
    parentNode: "9",
  },
  {
    id: "9-3",
    type: "subtopic",
    position: { x: 2200, y: 400 },
    data: { title: "Specialization" },
    parentNode: "9",
  },
];

const roadmapEdges = [
    { id: "e1-2", source: "1", target: "2", type: "block" },
    { id: "e2-3", source: "2", target: "3", type: "block" },
    { id: "e3-4", source: "3", target: "4", type: "block" },
    { id: "e4-5", source: "4", target: "5", type: "block" },
    { id: "e5-6", source: "5", target: "6", type: "block" },
    { id: "e6-7", source: "6", target: "7", type: "block" },
    { id: "e7-8", source: "7", target: "8", type: "block" },
    { id: "e8-9", source: "8", target: "9", type: "block" },
  
    // Subtopic links for "Programming and Web Fundamentals" block
    { id: "e1-1-1", source: "1", target: "1-1", type: "subtopic" },
    { id: "e1-1-2", source: "1-1", target: "1-2", type: "subtopic" },
  
    // Subtopic links for "Essential Front-End Technologies" block
    { id: "e2-1-1", source: "2", target: "2-1", type: "subtopic" },
    { id: "e2-1-2", source: "2-1", target: "2-2", type: "subtopic" },
    { id: "e2-2-3", source: "2-2", target: "2-3", type: "subtopic" },
  
    // Subtopic links for "Professional Development and Code Organization" block
    { id: "e3-1-1", source: "3", target: "3-1", type: "subtopic" },
    { id: "e3-1-2", source: "3-1", target: "3-2", type: "subtopic" },
  
    // Subtopic links for "Advanced JavaScript Development" block
    { id: "e4-1-1", source: "4", target: "4-1", type: "subtopic" },
    { id: "e4-1-2", source: "4-1", target: "4-2", type: "subtopic" },
    { id: "e4-2-3", source: "4-2", target: "4-3", type: "subtopic" },
    { id: "e4-3-4", source: "4-3", target: "4-4", type: "subtopic" },
  
    // Subtopic links for "Frameworks and Modern Tools" block
    { id: "e5-1-1", source: "5", target: "5-1", type: "subtopic" },
    { id: "e5-1-2", source: "5-1", target: "5-2", type: "subtopic" },
    { id: "e5-2-3", source: "5-2", target: "5-3", type: "subtopic" },
  
    // Subtopic links for "Responsive and Accessible Design" block
    { id: "e6-1-1", source: "6", target: "6-1", type: "subtopic" },
    { id: "e6-1-2", source: "6-1", target: "6-2", type: "subtopic" },
  
    // Subtopic links for "Building and Deploying Projects" block
    { id: "e7-1-1", source: "7", target: "7-1", type: "subtopic" },
    { id: "e7-1-2", source: "7-1", target: "7-2", type: "subtopic" },
  
    // Subtopic links for "Soft Skills and Market Preparation" block
    { id: "e8-1-1", source: "8", target: "8-1", type: "subtopic" },
    { id: "e8-1-2", source: "8-1", target: "8-2", type: "subtopic" },
  
    // Subtopic links for "Mastery and Specialization" block
    { id: "e9-1-1", source: "9", target: "9-1", type: "subtopic" },
    { id: "e9-1-2", source: "9-1", target: "9-2", type: "subtopic" },
    { id: "e9-2-3", source: "9-2", target: "9-3", type: "subtopic" },
  ];
  

export { roadmapNodes, roadmapEdges };