import Hero from "../assets/about.webp";
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

const Skill = () => {
  return (
    <section className="bg-white px-8 py-4 lg:px-30 lg:py-5 font-Montserrat">
      <div className="container mx-auto px-20 flex flex-col-reverse lg:flex-row gap-4">
        <div className="w-150">
          <img src={Hero} alt="hero-image" />
        </div>
        <div className="max-w-xl text-center lg:text-left space-y-6 leading-tight text-gray-700">
          <h1 className="sm:text-3xl lg:text-3xl font-bold">What I do</h1>
          <h2 className="sm:text-3xl lg:text-3xl font-bold ">
            <span className="text-green-600">Full Stack</span> Web Developer
          </h2>
          <div className="w-25 flex gap-3">
            <img src={html} alt="HTML5" />
            <img src={css} alt="css" />
            <img src={bootstrap} alt="bootstrap" />
            <img src={tailwind} alt="tailwind" />
            <img src={js} alt="js" />
          </div>
          <div className="w-25 flex gap-3">
            <img src={nodejs} alt="node" />
            <img src={express} alt="express" />
            <img src={react} alt="react" />
            <img src={mongodb} alt="mongodb" />
            <img src={github} alt="github" />
          </div>

          <div className="">
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
