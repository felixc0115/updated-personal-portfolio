const personalInfo = {
  homeTitle: "Hi, my name is Felix Chen. I build things for the web.",
  homeParagraph:
    "I am software engineer based in Atlanta, GA with experience in building simple websites to fullstack applications.",
};

const projects = [
  {
    title: "Train Together",
    projectDescription:
      "The Train Together application is a a full-stack web app aimed to improve one's physical well being through stretches and other modalities. The app allows a user to upload, explore, and save various exercise programs.",
    projectLink: "https://train-together.cyclic.app/",
    projectStatus: "Deployed",
    technologies: ["React", "Express", "MongoDB", "Redux", "Tailwind"],
    projectPic: "tt",
  },
  {
    title: "Woof & Whiskers",
    projectDescription:
      "The Woof & Whiskers application is a a full-stack web app aimed to match adoptable pets with interested users. The app allows a user to find and save various pets and learn more about them (e.g., breed, color, gender, etc.).",
    projectLink: "https://github.com/felixc0115/woof-whiskers",
    projectStatus: "Undeployed",
    technologies: ["React", "Redux", "Django", "PostgreSQL", "MUI", "Docker"],
    projectPic: "woof&whiskers",
  },
  {
    title: "Miss Vietnam Florida",
    projectDescription:
      "Collaborated with a developer to build a modern and responsive website using best practices for potential Miss Vietnam Florida pageant applicants. Miss Vietnam Florida was built using HTML and CSS.",
    projectLink: "https://missvietnamflorida.com/",
    projectStatus: "Deployed",
    technologies: ["HTML", "CSS"],
    projectPic: "mv",
  },
];

export { personalInfo, projects };
