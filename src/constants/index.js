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
  carrent,
  jobit,
  tripguide,  
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
    name: "HTML 5",
    icon: html,
  },  
  {
    name: "CSS 3",
    icon: css,
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
    name: "Angular",
    icon: angular,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Hibernate",
    icon: hibernate,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "QA Tester",
    company_name: "Universidad de las Ciencias Informaticas",
    icon: uci,    
    iconBg: "#E6DEDD",
    date: "Sep 2014 - Aug 2016",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Indra",
    icon: indra,
    iconBg: "#E6DEDD",
    date: "Aug 2016 - Jun 2018",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Amaris Consulting",
    icon: amaris,
    iconBg: "#E6DEDD",
    date: "May 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    image: "/testimonials/lazaro.jpeg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Cesar does.",
    name: "Suneidis Vinent",
    designation: "QA Engineer",
    company: "Amaris",
    image: "/testimonials/suneidis.jpeg",
  },
  {
    testimonial:
      "After Cesar optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Erasmo Garcia",
    designation: "Software Engineer",
    company: "Glofox",
    image: "/testimonials/erasmo.jpeg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
