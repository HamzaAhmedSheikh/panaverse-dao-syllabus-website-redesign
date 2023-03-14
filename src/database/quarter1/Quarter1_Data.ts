interface IQuarterBreak {
  id: number;
  title?: string;
  href: string;
  hrefHeading: string;
  desc?: string;
}

export let quarter_break_data: IQuarterBreak[] = [
  {
    id: 1,
    title: "During the Quarter Break, we do the following Assignments:",
    href: "https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge",
    hrefHeading:
      "https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge",
  },
  {
    id: 2,
    href: "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app",
    hrefHeading:
      "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app",
  },
  {
    id: 3,
    href: "https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui",
    hrefHeading:
      "https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui",
  },
  {
    id: 4,
    title:
      "Build a Panaverse DAO Syllabus Website using Next.js 13 given the content from the following document: ",
    href: "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing",
    hrefHeading:
      "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing",
  },
  {
    id: 5,
    title:
      "Build a new PIAIC Website using Next.js 13 given the content from the current PIAIC Website and from the following document: ",
    href: "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing",
    hrefHeading:
      "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing",
  },
];

interface Description {
  id: number;
  description: string;
}

export let data: Description[] = [
  {
    id: 1,
    description:
      "Background of JavaScript and How to use JavaScript in Browser",
  },
  {
    id: 2,
    description:
      "Variables, Primitive data types Analyzing and modifying data types, and Operators (Chapter 2 of JavaScript from Beginner to Professional)",
  },
];

export let data_part2: Description[] = [
  {
    id: 3,
    description:
      "Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript from Beginner to Professional)",
  },
  {
    id: 4,
    description:
      "Using if and if else statements, else if statements, Conditional ternary operators, and switch statements in Node.js programs (chapter 4 of JavaScript from Beginner to Professional)",
  },
  {
    id: 5,
    description:
      "Using while loop, do while loop, for loop, for in, and for of loop in Node.js (chapter 5 of JavaScript from Beginner to Professional)",
  },
  {
    id: 6,
    description:
      "Using Basic functions, Function arguments, Return, Variable scope in functions, Recursive functions, Nested functions, Anonymous functions, and Function callbacks in Node.js (chapter 6 of JavaScript from Beginner to Professional)",
  },
  {
    id: 7,
    description:
      "Using Concurrency, Callbacks, Promises, async / await, and Event loop (chapter 13 of JavaScript from Beginner to Professional)",
  },
];

interface IGit {
  id: number;
  title?: string;
  href: string;
  hrefHeading: string;
}

export let git_data: IGit[] = [
  {
    id: 1,
    href: "https://help.github.com/articles/markdown-basics/",
    hrefHeading: "https://help.github.com/articles/markdown-basics/",
  },
  {
    id: 2,
    href: "http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github",
    hrefHeading:
      "http://stackoverflow.com/questions/5009600/difference-between-fork-and-branch-on-github/",
  },
  {
    id: 3,
    href: "http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences",
    hrefHeading:
      "http://stackoverflow.com/questions/3329943/git-branch-fork-fetch-merge-rebase-and-clone-what-are-the-differences",
  },
  {
    id: 4,
    href: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing",
    hrefHeading: "https://git-scm.com/book/en/v2/Git-Branching-Rebasing",
  },
  {
    id: 5,
    href: "http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches",
    hrefHeading:
      "http://git-scm.com/book/en/v2/Git-Branching-Remote-Branches#Tracking-Branches",
  },
];
