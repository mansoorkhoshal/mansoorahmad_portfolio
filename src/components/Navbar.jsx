import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaIdCard, FaEnvelope } from "react-icons/fa";
import { SiHyperskill } from "react-icons/si";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    {
      name: "Skill",
      link: "/skill",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav aria-label="Main navigation" className="relative bg-green-700">
      <div className="h-16 flex items-center justify-between z-50 text-white px-8 py-4 lg:px-50 lg:py-5">
        <div className="flex flex-1">
          <span className="text-3xl font-League">Mansoor</span>
        </div>

        <div className="hidden lg:flex lg:flex-1 items-center justify-end font-normal font-League">
          <ul className="flex gap-8 text-xl">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:underline items-center">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="lg:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`lg:hidden ml-5 transition-max-height duration-1500 overflow-hidden bg-green-700 ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 text-lg text-white">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="hover:underline flex gap-2"> 
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
