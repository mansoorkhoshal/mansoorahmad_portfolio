import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="relative">
      <div className="h-[10vh] flex items-center justify-between z-50 text-white px-4 py-4 lg:px-20 lg:py-5">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">Mansoor</span>
        </div>

        <div className="hidden lg:flex lg:flex-1 items-center justify-end font-normal">
          <ul className="flex gap-8 text-[18px]">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Skills</a></li>
            <li><a href="#" className="hover:underline">Portfolio</a></li>
          </ul>
        </div>

        <button
          className="lg:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`lg:hidden transition-max-height duration-200 overflow-hidden bg-green-700 ${open ? "max-h-60" : "max-h-0"}`}
      >
        <ul className="flex flex-col gap-4 p-4 text-[18px] text-white">
          <li><a href="#" className="block">About</a></li>
          <li><a href="#" className="block">Skills</a></li>
          <li><a href="#" className="block">Portfolio</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
