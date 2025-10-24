import Hero from "../assets/Skill.json";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/reactjs.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import github from "../assets/github.ico";
import Lottie from "lottie-react";

const Skill = () => {
  const techStack = [
    { src: html, alt: "HTML5" },
    { src: css, alt: "CSS3" },
    { src: bootstrap, alt: "Bootstrap" },
    { src: tailwind, alt: "Tailwind CSS" },
    { src: js, alt: "JavaScript" },
    { src: nodejs, alt: "Node.js" },
    { src: express, alt: "Express" },
    { src: react, alt: "React" },
    { src: mongodb, alt: "MongoDB" },
    { src: github, alt: "GitHub" },
  ];

  const skillIntro = [
    "Develop robust and scalable frontend applications.",
    "Build engaging user interfaces with modern JavaScript frameworks.",
    "Craft efficient backend solutions with Node.js and Firebase.",
    "I value clean, maintainable code and delivering exceptional user experiences.",
  ];

  return (
    <section className="bg-white py-8 font-League">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-48 sm:w-64 md:w-80 lg:w-96">
            <Lottie
              animationData={Hero}
              loop={true}
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 max-w-xl text-center lg:text-left space-y-6 leading-tight text-gray-700">
          <h1 className="sm:text-3xl lg:text-3xl font-bold">What I do</h1>
          <h2 className="sm:text-3xl lg:text-3xl font-bold">
            <span className="text-green-600">Full Stack</span> Web Developer
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center items-center mt-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
                <p className="text-sm mt-2 text-gray-700 font-medium">
                  {tech.alt}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 text-left">
            {skillIntro.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
