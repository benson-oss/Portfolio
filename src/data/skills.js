// Each skill has a short, honest description of experience level
// (not an inflated percentage) and a "level" used only to drive
// the visual indicator's fill amount.
export const skillGroups = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        level: 3,
        icon: "react",
        description: "Building component-based UIs with hooks and state management.",
      },
      {
        name: "JavaScript",
        level: 4,
        icon: "js",
        description: "Core language for interactive, dynamic web applications.",
      },
      {
        name: "HTML5",
        level: 5,
        icon: "html",
        description: "Semantic, accessible markup as the foundation of every project.",
      },
      {
        name: "CSS3",
        level: 4,
        icon: "css",
        description: "Responsive layouts, animations and modern styling techniques.",
      },
    ],
  },
  {
    category: "Programming",
    items: [
      {
        name: "Python",
        level: 4,
        icon: "python",
        description: "Scripting, automation and application logic.",
      },
      {
        name: "Java",
        level: 3,
        icon: "java",
        description: "Object-oriented programming and backend fundamentals.",
      },
    ],
  },
  {
    category: "Developer Tools",
    items: [
      {
        name: "Git",
        level: 4,
        icon: "git",
        description: "Version control, branching and commit history management.",
      },
      {
        name: "GitHub",
        level: 4,
        icon: "github",
        description: "Hosting repositories, pull requests and project tracking.",
      },
      {
        name: "CLI",
        level: 3,
        icon: "terminal",
        description: "Comfortable working in the command line for everyday tasks.",
      },
      {
        name: "Linux / Git Bash",
        level: 3,
        icon: "linux",
        description: "Navigating and scripting in Unix-style terminal environments.",
      },
    ],
  },
  {
    category: "Development",
    items: [
      {
        name: "REST APIs",
        level: 3,
        icon: "api",
        description: "Consuming and structuring APIs for data-driven applications.",
      },
      {
        name: "JSON",
        level: 4,
        icon: "json",
        description: "Structuring and working with data across the stack.",
      },
      {
        name: "CRUD Operations",
        level: 4,
        icon: "crud",
        description: "Create, read, update and delete flows in real applications.",
      },
    ],
  },
];
