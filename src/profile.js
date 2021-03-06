const header = {
  name: " Mugi",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};

const section2title = "About Me";
const about = {
  paragraph:
    "Hi! My name is Mugi. I am a Full-Stack Developer. I successfully completed a coding bootcamp at Georgia Tech University. I have a background in Network Engineering for 5 years. ",
};

const skillsBar = [
  {
    name: "HTML5",
    value: 75,
  },
  {
    name: "CSS3",
    value: 85,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React",
    value: 75,
  },
  {
    name: "Node",
    value: 85,
  },
  {
    name: "Mongoose",
    value: 70,
  },
  {
    name: "Express",
    value: 75,
  },
];

const section3Title = "Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "What is in the box?",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/mugich/whats-in-the-box",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "The Game Board",
    skills: ["JS, Handlebars, Express"],
    url: "https://thegameboard.herokuapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Weather Dashboard",
    skills: ["HTML, CSS, JS"],
    url: "https://mugich.github.io/api-weather-dashboard/",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Employee Directory",
    skills: ["HTML, CSS, JS, REACT" ],
    url: "https://mugich.github.io/employee-drectory/",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Eat Da Burger",
    skills: ["HTML, CSS, JS, Handlebars, Node, Express"],
    url: "https://enigmatic-reaches-88280.herokuapp.com/",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Budget Tracker",
    skills: ["HTML, CSS, JS, Mongoose"],
    url: "https://warm-journey-51326.herokuapp.com/",
  },
];

const section5Title = "Get in Touch";
const contact = {
  pitch:
    "",
  copyright: "Mugi Ch",
  contactUrl: "",
};

const social = {
  github: "https://github.com/mugich",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/mugi-chultemsuren/",
  // resume: "./image/Mugi_resume.pdf",
};

export {
  header,
  background,
  about,
  skillsBar,
  projects,
  contact,
  social,
  section2title,
  section3Title,
  section5Title,
};
