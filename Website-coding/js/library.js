const lessonsData = {
    "1": {
        category: "HTML5 Structure",
        title: "Lesson 1: Semantic Tags & Forms",
        overview: "HTML5 introduces semantic tags like header, nav, section, and article alongside advanced form validation inputs.",
        code: `<header>\n  <nav>\n    <h1>My Website</h1>\n  </nav>\n</header>`,
        quiz: {
            question: "Which HTML5 tag is best used for main website navigation links?",
            options: ["<navigation>", "<nav>", "<links>", "<menu>"],
            correct: 1
        }
    },
    "2": {
        category: "CSS Layouts",
        title: "Lesson 2: Flexbox & CSS Grid",
        overview: "Learn how to structure complex page elements using modern 1-dimensional flexboxes and 2-dimensional CSS grids.",
        code: `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}`,
        quiz: {
            question: "Which CSS property enables a 2-dimensional grid layout system?",
            options: ["display: flex;", "display: grid;", "display: block;", "display: inline;"],
            correct: 1
        }
    },
    "3": {
        category: "Responsive Design",
        title: "Lesson 3: Media Queries",
        overview: "Media queries allow developers to apply custom CSS styling rule sets depending on the device screen dimensions.",
        code: `@media screen and (max-width: 768px) {\n  .container {\n    flex-direction: column;\n  }\n}`,
        quiz: {
            question: "What rule is used in CSS to apply styles based on device screen size?",
            options: ["@screen", "@media", "@breakpoint", "@device"],
            correct: 1
        }
    },
    "4": {
        category: "Sass / SCSS",
        title: "Lesson 4: Variables, Mixins & Nesting",
        overview: "Sass is a CSS preprocessor that improves styling workflow with nesting rules, variables, and reusable mixins.",
        code: `$primary: #2DD4BF;\n.card {\n  background-color: $primary;\n  &:hover { opacity: 0.9; }\n}`,
        quiz: {
            question: "Which symbol is used to declare a variable in Sass/SCSS?",
            options: ["@", "$", "#", "&"],
            correct: 1
        }
    },
    "5": {
        category: "Bootstrap 5",
        title: "Lesson 5: Grid, Cards & Components",
        overview: "Bootstrap 5 is a popular CSS framework providing responsive grid components and pre-built UI elements.",
        code: `<div class="container mt-4">\n  <div class="alert alert-success" role="alert">\n    A simple success alert!\n  </div>\n</div>`,
        quiz: {
            question: "Which Bootstrap class is used to create a fixed-width or responsive wrapper container?",
            options: ["class='wrapper'", "class='container'", "class='box'", "class='layout'"],
            correct: 1
        }
    },
    "6": {
        category: "Tailwind CSS",
        title: "Lesson 6: Utility-First Framework",
        overview: "Tailwind CSS lets you build custom designs rapidly using low-level utility classes directly inside your HTML markup.",
        code: `<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">\n  <p class="text-slate-500">Tailwind Card Content</p>\n</div>`,
        quiz: {
            question: "What type of CSS framework is Tailwind CSS?",
            options: ["Component-based", "Utility-first", "Inline-only", "Template-driven"],
            correct: 1
        }
    },
    "7": {
        category: "JavaScript DOM",
        title: "Lesson 7: Events & Element Manipulation",
        overview: "JavaScript lets you query elements, manipulate classes, alter styles, and handle user interaction events seamlessly.",
        code: `const button = document.getElementById('submitBtn');\nbutton.addEventListener('click', () => {\n  console.log('Button was clicked!');\n});`,
        quiz: {
            question: "Which method is used to attach an event listener to an element in JavaScript?",
            options: ["attachEvent()", "addEventListener()", "onEvent()", "clickEvent()"],
            correct: 1
        }
    },
    "8": {
        category: "JavaScript APIs",
        title: "Lesson 8: Fetch API & JSON Data",
        overview: "Learn how to request and receive external data asynchronously using JavaScript Promises and the Fetch API.",
        code: `async function fetchUserData() {\n  const res = await fetch('https://api.github.com/users/github');\n  const data = await res.json();\n  console.log(data.name);\n}`,
        quiz: {
            question: "Which built-in JavaScript function is commonly used to make HTTP network requests?",
            options: ["request()", "download()", "fetch()", "getHttp()"],
            correct: 2
        }
    },
    "9": {
        category: "Node.js & Express",
        title: "Lesson 9: Backend Server Basics",
        overview: "Node.js allows you to execute JavaScript on the server side. Express is a minimal web framework for creating APIs.",
        code: `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello from Backend Server!');\n});\n\napp.listen(3000);`,
        quiz: {
            question: "What environment allows you to run JavaScript outside of the web browser?",
            options: ["React", "Node.js", "Bootstrap", "Tailwind"],
            correct: 1
        }
    },
    "10": {
        category: "SQL Databases",
        title: "Lesson 10: Relational Tables & Queries",
        overview: "SQL databases store information in structured tables with rows and columns, managed via SELECT, INSERT, and UPDATE queries.",
        code: `SELECT * FROM users \nWHERE status = 'active' \nORDER BY created_at DESC;`,
        quiz: {
            question: "Which SQL statement is used to retrieve data from a database table?",
            options: ["GET", "EXTRACT", "SELECT", "OPEN"],
            correct: 2
        }
    },
    "11": {
        category: "Git & GitHub",
        title: "Lesson 11: Version Control & Commits",
        overview: "Git tracks changes in your source code history, while GitHub lets you host, share, and collaborate on repositories online.",
        code: `git add .\ngit commit -m "Fix layout and add dark mode"\ngit push origin main`,
        quiz: {
            question: "Which Git command saves your staged changes into the local repository history?",
            options: ["git save", "git commit", "git push", "git record"],
            correct: 1
        }
    },
    "12": {
        category: "Python Basics",
        title: "Lesson 12: Basic Logic & Variables",
        overview: "Python is a high-level language built for clean readability using simple syntax, conditional statements, and functions.",
        code: `def check_status(score):\n    if score >= 50:\n        return "Pass"\n    else:\n        return "Fail"\n\nprint(check_status(85))`,
        quiz: {
            question: "Which keyword is used to define a function in Python?",
            options: ["function", "def", "func", "define"],
            correct: 1
        }
    },
    "13": {
        category: "TypeScript",
        title: "Lesson 13: Type Annotations & Interfaces",
        overview: "TypeScript is a strongly typed superset of JavaScript that catches errors early through explicit type safety.",
        code: `interface User {\n  id: number;\n  name: string;\n}\n\nconst newUser: User = { id: 1, name: "Alice" };`,
        quiz: {
            question: "What is the primary benefit of using TypeScript over standard JavaScript?",
            options: ["Faster code execution", "Static type checking", "Automatic styling", "Built-in database"],
            correct: 1
        }
    },
    "14": {
        category: "React Framework",
        title: "Lesson 14: Components & Hooks",
        overview: "React uses reusable UI components and hooks like useState and useEffect to manage dynamic application state.",
        code: `import { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;\n}`,
        quiz: {
            question: "Which React hook is used to handle component local state?",
            options: ["useEffect", "useContext", "useState", "useReducer"],
            correct: 2
        }
    },
    "15": {
        category: "Next.js",
        title: "Lesson 15: Server Components & Routing",
        overview: "Next.js brings full-stack React capabilities including file-system routing, server side rendering, and API routes.",
        code: `export default async function Page() {\n  const data = await fetch('https://api.example.com/posts');\n  return <h1>Next.js App Router Page</h1>;\n}`,
        quiz: {
            question: "How are page routes defined in the Next.js App Router directory?",
            options: ["Inside routes.js", "Folder structures with page.js files", "Inside index.html", "Via express routes"],
            correct: 1
        }
    },
    "16": {
        category: "GraphQL",
        title: "Lesson 16: Queries & Mutations",
        overview: "GraphQL allows clients to request exact fields they need from a single endpoint using declarative query language.",
        code: `query GetUserProfile {\n  user(id: "10") {\n    name\n    email\n  }\n}`,
        quiz: {
            question: "Which GraphQL operation is used to modify server-side data?",
            options: ["Query", "Mutation", "Subscription", "Fetch"],
            correct: 1
        }
    },
    "17": {
        category: "Docker & DevOps",
        title: "Lesson 17: Containers & Images",
        overview: "Docker packages applications with all dependencies into standardized portable software containers.",
        code: `FROM node:18\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nEXPOSE 3000\nCMD ["node", "server.js"]`,
        quiz: {
            question: "What file specifies the configuration steps needed to build a Docker container image?",
            options: ["Docker.json", "Dockerfile", "Container.yml", "package.json"],
            correct: 1
        }
    },
    "18": {
        category: "NoSQL Databases",
        title: "Lesson 18: MongoDB Documents",
        overview: "MongoDB stores data in flexible JSON-like BSON document collections rather than rigid relational tables.",
        code: `db.users.insertOne({\n  name: "John Doe",\n  email: "john@example.com",\n  role: "admin"\n});`,
        quiz: {
            question: "How does MongoDB store data structures internally?",
            options: ["Tables and Columns", "JSON/BSON Documents", "CSV Plain Text", "XML Trees"],
            correct: 1
        }
    },
    "19": {
        category: "Web Security",
        title: "Lesson 19: JWT & Password Hashing",
        overview: "Protect web applications using secure password hashing like bcrypt and stateless JSON Web Token (JWT) authorization.",
        code: `const jwt = require('jsonwebtoken');\nconst token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });`,
        quiz: {
            question: "What does JWT stand for in web application security?",
            options: ["Java Web Tools", "JSON Web Token", "JavaScript Web Transfer", "Joint Web Technology"],
            correct: 1
        }
    },
    "20": {
        category: "Git Advanced",
        title: "Lesson 20: Rebase & Merge Conflicts",
        overview: "Master advanced Git tools such as rebase, stash, cherry-pick, and resolving complex branch merge conflicts.",
        code: `git checkout feature-branch\ngit rebase main\n# Resolve conflicts if needed\ngit add .\ngit rebase --continue`,
        quiz: {
            question: "Which command applies commit changes from one branch onto another branch clean sequence?",
            options: ["git reset", "git rebase", "git stash", "git checkout"],
            correct: 1
        }
    }
};


function loadLesson(lessonId) {
    const data = lessonsData[lessonId];
    if (!data) return;


    document.getElementById('lessonCategory').textContent = data.category;
    document.getElementById('lessonTitle').textContent = data.title;
    document.getElementById('lessonOverview').textContent = data.overview;
    document.getElementById('lessonCode').textContent = data.code;


    document.getElementById('quizQuestion').textContent = data.quiz.question;
    document.getElementById('quizFeedback').textContent = '';
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';

    data.quiz.options.forEach((optionText, index) => {
        const button = document.createElement('button');
        button.className = "w-full text-left px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-[#2DD4BF] text-sm transition font-medium";
        button.textContent = optionText;
        
        button.onclick = function() {
            const feedback = document.getElementById('quizFeedback');
          
            if (index === data.quiz.correct) {
                button.classList.add('bg-green-100', 'dark:bg-green-900/40', 'border-green-500', 'text-green-700', 'dark:text-green-300');
                feedback.textContent = "🎉 Correct! Great job!";
                feedback.className = "text-sm font-medium pt-2 text-green-600 dark:text-green-400";
            } else {
                button.classList.add('bg-red-100', 'dark:bg-red-900/40', 'border-red-500', 'text-red-700', 'dark:text-red-300');
                feedback.textContent = "❌ Incorrect. Try again!";
                feedback.className = "text-sm font-medium pt-2 text-red-600 dark:text-red-400";
            }
        };

        optionsContainer.appendChild(button);
    });
}

const lessonItems = document.querySelectorAll('.lesson-item');

lessonItems.forEach(item => {
    item.addEventListener('click', function() {
        lessonItems.forEach(i => i.classList.remove('bg-teal-100/50', 'dark:bg-slate-800'));
        this.classList.add('bg-teal-100/50', 'dark:bg-slate-800');

        const lessonId = this.getAttribute('data-lesson');
        loadLesson(lessonId);
    });
});


loadLesson("1");

function copyCodeSnippet() {
    const codeText = document.getElementById('lessonCode').innerText;
    const copyBtn = document.getElementById('copyBtn');

    navigator.clipboard.writeText(codeText).then(() => {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('bg-green-500', 'text-white');

        setTimeout(() => {
            copyBtn.textContent = 'Copy';
            copyBtn.classList.remove('bg-green-500', 'text-white');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}


function toggleMode() {
    const htmlTag = document.documentElement;
    const btn = document.getElementById('darkModeBtn');
    
    if (htmlTag.classList.contains('dark')) {
        htmlTag.classList.remove('dark');
        btn.textContent = '🌙';
    } else {
        htmlTag.classList.add('dark');
        btn.textContent = '☀️';
    }
}

// Put the icon menu//
 function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('hidden');
        }