import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a passionate Python developer, I specialize in crafting robust and scalable web applications. I have honed my skills in front-end technologies such as HTML, CSS, Tailwind CSS, and React, along with back-end technologies including Flask, Django, MySQL, and MongoDB. As a fresher, my goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `With a strong educational background in engineering, I am seeking hands-on work experience to guide my future professional journey. My technical proficiency spans a range of coding languages, including Python, Flask, Django, SQL, MongoDB, as well as front-end technologies such as HTML, CSS, JavaScript, and React.js. This allows me to tackle diverse projects with ease. I am an enthusiastic learner, always looking for opportunities to explore the tech field. As a lifelong learner, I thrive on acquiring new skills and knowledge to stay at the forefront of my field.`;

export const EXPERIENCES = [
  {
    year: "March 2023 - April 2023",
    role: "Machine Learning Intern",
    company: "YBI Foundation",
    description: ` Engaged in a one-month intensive internship focusing on machine learning, gaining hands-on experience in predictive modeling.`,
    technologies: ["Machine Learning", "Predictive Analysis"],
  },
];

export const PROJECTS = [
  {
    title: "Blogging Platform",
    image: project1,
    description:
      "A fully functional blogging website with features like editing the blog,  inputs like audio/video/tables, and user authentication.",
    technologies: ["HTML", "CSS", "Flask", "Jinja", "MongoDB"],
  },
  {
    title: "voice AI",
    image: project2,
    description:
      "A Web Application for the Visually Impaired , with features such as  hover-to speech, hand gesture calculator, and voice assistant.",
    technologies: ["HTML", "CSS", "Flask", "Bootstrap", "APIs", "MongoDb"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind css"],
  },
  {
    title: "Netflix clone",
    image: project4,
    description:
      "Developed Netflix clone, having access to a wide range of movies and shows, enhancing user experience by integrating with the Netflix API.",
    technologies: ["HTML", "CSS", "Nextjs", "API", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "Contact: +91 9112608156 ",
  email: "Email: vaishnaviudaykulkarni@gmail.com",
};
