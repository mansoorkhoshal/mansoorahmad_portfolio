import { FaArrowRightLong } from "react-icons/fa6";
import Lottie from "lottie-react";
import Hero from "../assets/aboutme.json";

const About = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "923358103305";
    const message = "Hello! I'd like to contact you.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-white mt-10 px-8 py-4 lg:px-30 lg:py-5 font-League">
      <div className="container mx-auto px-20 flex flex-col-reverse lg:flex-row gap-8">
        <div className="max-w-xl text-center lg:text-left space-y-6 leading-tight text-gray-700">
          <h1 className="text-xl sm:text-4xl lg:text-4xl font-bold">
            I'm Mansoor Ahmad <br />{" "}
            <span className="text-green-600">Full Stack</span> Web Developer
          </h1>
          <p className="text-sm lg:text-lg">
            I am Mansoor Ahmad, a passionate Full Stack Web Developer who loves
            building powerful and user-friendly digital experiences. I work with
            modern technologies such as JavaScript and React on the frontend,
            and Node.js, Express, and MongoDB on the backend. I focus on
            developing scalable, efficient, and user-centric applications and I
            am always eager to explore new technologies to keep growing in the
            ever-evolving world of web development.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="group inline-flex items-center gap-2 bg-green-700 text-white px-4 py-1 sm:px-6 sm:py-3 rounded border-2 border-transparent hover:bg-transparent hover:border-green-700 hover:text-green-700 transition-all duration-300"
          >
            Contact Me
            <FaArrowRightLong className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
        <div className="w-200">
          {/* <img src={Hero} alt="hero-image" /> */}
          <Lottie animationData={Hero} loop={true} className="w-96 h-72" />
        </div>
      </div>
    </section>
  );
};

export default About;
