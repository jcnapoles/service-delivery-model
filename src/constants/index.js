import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  java,
  css,
  reactjs, 
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  uci,  
  isern,
  indra,
  myportfolio,
  investanalysis,
  interviewquestions,  
  spring,
  angular,
  hibernate,
  jquery,
  bootstrap,
  php,
  jenkins,
  aws,
  heroku,
  amaris,  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },  
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "QA Tester",
    icon: mobile,
  },
  {
    title: "Software Analyst",
    icon: creator,
  },  
];

const technologies = [
  {
    name: "JAVA",
    icon: java,
  },  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Spring",
    icon: spring,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  }, 
  {
    name: "Angular",
    icon: angular,
  }, 
    

];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Universidad de las Ciencias Informaticas",
    icon: uci,    
    iconBg: "#E6DEDD",
    date: "Aug 2012 - Sep 2014",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",      
      "Development of tools to manage components (services and dependencies)",
      "Creating database schemas and managing relational databases like MySQL, PostgreSQL",
    ],
  },
  {
    title: "QA Tester",
    company_name: "Universidad de las Ciencias Informaticas",
    icon: uci,    
    iconBg: "#E6DEDD",
    date: "Sep 2014 - Aug 2016",
    points: [
      "Performing manual testing activities such as functional testing, regression testing, and exploratory testing",
      "Writing automated test scripts using tools like Selenium WebDriver",
      "Validating API functionality through techniques like endpoint testing, request and response validation, and data manipulation testing.",
      "Designing and executing performance testing scenarios using tools like JMeter",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Indra",
    icon: indra,
    iconBg: "#E6DEDD",
    date: "Aug 2016 - Jun 2018",
    points: [
      "Analysis, design, and development of business applications.",
      "Technical and functional consulting.",
      "Writing complex SQL queries to extract insights from structured databases.",
      "Developing data pipelines to ingest, process, and analyze large volumes of data using technologies like Hadoop MapReduce."
    ],
  }, 
  {
    title: "Software Engineer",
    company_name: "Isern Patentes y Marcas",
    icon: isern,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - May 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Technical and functional consulting.",
      "Development, maintenance and migration of legacy applications, JAVA, Angular, Spring, React.js",
      "Strong problem-solving abilities and the ability to troubleshoot complex data processing issues",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Amaris Consulting",
    icon: amaris,
    iconBg: "#E6DEDD",
    date: "May 2021 - Present",
    points: [
      "Designing and developing responsive user interfaces using HTML, CSS, and JavaScript frameworks such as React.js and Angular",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Familiarity with containerization technologies like Docker and orchestration tools like Kubernetes.",
    ],
  },    
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Cesar proved me wrong.",
    name: "Lazaro Campoalegre",
    designation: "EP Manager",
    company: "AiFi Inc",
    linkedin: "https://www.linkedin.com/in/lazarocampoalegre",
    image: "/testimonials/lazaro.jpeg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Cesar does.",
    name: "Suneidis Vinent",
    designation: "QA Engineer",
    company: "Amaris",
    linkedin: "https://www.linkedin.com/in/svinent",
    image: "/testimonials/suneidis.jpeg",
  },
  {
    testimonial:
      "After Cesar optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Erasmo Garcia",
    designation: "Software Engineer",
    company: "Glofox",
    linkedin: "https://www.linkedin.com/in/erasmogarciaglez",
    image: "/testimonials/erasmo.jpeg",
  },
];

const projects = [
  {
    name: "My Portfolio",
    description:
      "An 3D online portfolio that showcases my skills and experience as a web developer. It includes a brief introduction, a list of my projects, and a contact form.",
    tags: [
      {
        name: "three.js",
        color: "black-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: myportfolio,
    link: "https://cesarnapoles.com",
    source_code_link: "https://github.com/jcnapoles/3d_portfolio_cesar",
  },
  {
    name: "Invest Analysis",
    description:
      "Web application that allows users to analyze the performance of their investments. It includes features like a stock screener, a portfolio tracker, and a news feed.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradientt",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: investanalysis,
    link: "https://invest-analysis-vercel.vercel.app",
    source_code_link: "",
  },
  {
    name: "Interview Questions",
    description:
      "A web application that helps users prepare for technical interviews. It includes a list of common interview questions, a code editor, and a timer.",
    tags: [
      {
        name: "nextjs",
        color: "black-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: interviewquestions,
    link: "https://interview-fullstack.vercel.app",
    source_code_link: "https://github.com/jcnapoles/interview-docs",
  },
];

export { services, technologies, experiences, testimonials, projects };
