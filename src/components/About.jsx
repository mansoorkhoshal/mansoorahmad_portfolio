import { FaArrowRightLong } from "react-icons/fa6";
import Hero from "../assets/hero.jpg";

const About = () => {
  return (
    <section className="bg-white px-8 py-4 lg:px-50 lg:py-5">
      <div className="container mx-auto px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        <div className="max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-700 leading-tight">
            I'm Mansoor Ahmad <br /> Full Stack Web Developer
          </h1>
          <p className="text-gray-700 text-sm lg:text-lg">
            I am Mansoor Ahmad, a passionate Full Stack Web Developer who loves
            building powerful and user-friendly digital experiences. I work with
            modern technologies such as JavaScript and React on the frontend,
            and Node.js, Express, and MongoDB on the backend. I focus on
            developing scalable, efficient, and user-centric applications and I
            am always eager to explore new technologies to keep growing in the
            ever-evolving world of web development.
          </p>
          <button>
            <a
              href="https://wa.me/923358103305"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-green-700 text-white px-3 py-1 sm:px-6 sm:py-3 rounded border-2 border-transparent hover:bg-transparent hover:border-green-700 hover:text-green-700 transition-all duration-300"
            >
              Contact Me
              <FaArrowRightLong className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </button>
        </div>
        <div className="flex justify-center">
          <img src={Hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
