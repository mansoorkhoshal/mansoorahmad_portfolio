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

  return (
    <section className="bg-white px-8 py-4 lg:px-30 lg:py-5 font-League">
      <div className="container mx-auto px-20 flex flex-col-reverse lg:flex-row gap-4">
        <div> 
          <Lottie animationData={Hero} loop={true} className="w-96 h-72" />
        </div>
        <div className="max-w-xl text-center lg:text-left space-y-6 leading-tight text-gray-700">
          <h1 className="sm:text-3xl lg:text-3xl font-bold">What I do</h1>
          <h2 className="sm:text-3xl lg:text-3xl font-bold ">
            <span className="text-green-600">Full Stack</span> Web Developer
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center items-center mt-8">
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

          <div>
            <li>Develop robust and scalable frontend applications.</li>
            <li>
              Build engaging user interfaces with modern JavaScript frameworks.
            </li>
            <li>
              Craft efficient backend solutions with Node.js and Firebase.
            </li>
            <li>
              I value clean, maintainable code and delivering exceptional user
              experiences.
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
