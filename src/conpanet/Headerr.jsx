import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";

const Headerr = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="from-[#779097] to-[#73909e] bg-gradient-to-r sticky top-0 left-0 z-50">
      <div className="max-w-[1200px] m-auto flex justify-between items-center py-3 px-4">

        {/* LOGO */}
        <a href="index.html">
          <img src={logo} alt="" className="w-[120px]" />
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10">
            <li className="text-[18px] text-white hover:text-cyan-300 cursor-pointer hover:underline">Главная</li>
            <li className="text-[18px] text-white hover:text-cyan-300 cursor-pointer hover:underline">Про гида</li>
            <li className="text-[18px] text-white hover:text-cyan-300 cursor-pointer hover:underline">Программа тура</li>
            <li className="text-[18px] text-white hover:text-cyan-300 cursor-pointer hover:underline">Стоимость</li>
          </ul>

          <button className="w-[157px] rounded-md text-white text-[16px] p-2 bg-[#1A3E3E] hover:bg-emerald-800 cursor-pointer">
            Консультация
          </button>
        </div>

        {/* BURGER BUTTON (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#6f8f9a] px-4 pb-4">
          <ul className="flex flex-col gap-4">
            <li className="text-white text-[18px]">Главная</li>
            <li className="text-white text-[18px]">Про гида</li>
            <li className="text-white text-[18px]">Программа тура</li>
            <li className="text-white text-[18px]">Стоимость</li>
          </ul>
          <button className="w-full mt-4 rounded-md text-white text-[16px] p-2 bg-[#1A3E3E]">
            Консультация
          </button>
        </div>
      )}
    </div>
  );
};

export default Headerr;

