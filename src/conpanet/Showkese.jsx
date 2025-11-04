import React from "react";
import toglar from '../assets/img/toglar.png'

const Showkese = () => {
  return (
    <div className="mb-20">
      <div className="relative">
        <img src={toglar} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-8">
          <h2 className="text-[24px] md:text-[40px] lg:text-[50px] font-semibold text-white text-center mb-4 md:mb-6">
            Насладись прогулкой в горах <br className="hidden md:block"/> с командой единомышленников
          </h2>
          <div className="w-full max-w-[1180px] rounded-md bg-white/20 px-4">
            <form className="flex flex-col md:flex-row items-center justify-center p-4 md:p-10 gap-5">
                <div className="w-full md:w-auto">
                    <input type="text" placeholder="Локация для тура" className="w-full md:w-[270px] p-2 rounded-md text-white border-1"/>
                    <p className="text-gray-400 text-[14px]">выберите из списка</p>
                </div>
                <div className="w-full md:w-auto">
                    <input type="text" placeholder="Дата похода" className="w-full md:w-[270px] p-2 rounded-md text-white border-1"/>
                    <p className="text-gray-400 text-[14px]">укажите диапазон</p>
                </div>
                <div className="w-full md:w-auto">
                    <input type="text" placeholder="Участники" className="w-full md:w-[270px] p-2 rounded-md text-white border-1"/>
                    <p className="text-gray-400 text-[14px]">минимум 4 человека</p>
                </div>
                <div className="w-full md:w-auto">
                    <button className="w-full md:w-[213px] text-shadow-gray-800 hover:bg-amber-50 cursor-pointer text-[16px] bg-white rounded-md p-2">
                      Найти программу
                    </button>
                    <p className="text-gray-400 invisible">.</p>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showkese;
