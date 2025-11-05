import React from 'react'
import link from '../assets/svg/link.svg'
import chiziqcha from '../assets/svg/chiziqcha.svg'

const Footerr = () => {
  return (
    <div>
      <section className="bg-[#1A3E3E] py-15">
        <div className="max-w-[1200px] m-auto px-4">

          {/* RESPONSIv O'ZGARTIRILGAN */}
          <div className="flex flex-wrap gap-10 justify-between">

            {/* Left */}
            <div className="max-w-[350px]">
              <p className="text-[20px] text-white mb-3">Компания «РумТибет»</p>
              <p className="text-[14px] text-white mb-12">
                Его корни уходят в один фрагмент классической латыни 45 года <br /> н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, <br /> профессор латыни из колледжа Hampden-Sydney.
              </p>
              <a className="text-[14px] text-white underline flex gap-8 mb-10" href="#">info@domain.com <span>+7 (123) 456-78-90</span></a>
              <img src={link} alt="" />
            </div>

            {/* Services */}
            <div className="flex flex-col gap-3">
              <b className="text-white text-[20px] font-bold">Наши услуги</b>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#"><img src={chiziqcha} alt="" />Прогулки в горы летом</a>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#"><img src={chiziqcha} alt="" />Зимние походы в горы</a>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#"><img src={chiziqcha} alt="" />Посещение храмов в горах</a>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#"><img src={chiziqcha} alt="" />Экстремальные виды туризма</a>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#"><img src={chiziqcha} alt="" />Походы в джунглях Амазонии</a>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#"><img src={chiziqcha} alt="" />Поездка в Африку</a>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3 max-w-[280px]">
              <b className="text-white text-[20px] font-bold">Важно для путешествий</b>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#">
                <img src={chiziqcha} alt="" />Как собрать в долгий поход?
              </a>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#">
                <img src={chiziqcha} alt="" />Жизненно важные предметы для <br /> похода
              </a>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#">
                <img src={chiziqcha} alt="" />Медицинская страховка, гарантии <br /> безопасности
              </a>
              <a className="flex items-center gap-2 text-white hover:text-amber-400 hover:underline" href="#">
                <img src={chiziqcha} alt="" />Если вы врач - загляните сюда
              </a>
            </div>

          </div>
        </div>
      </section>

      <div className="bg-[#18121E] py-2">
        <p className="text-[14px] text-white cursor-pointer flex flex-col md:flex-row justify-center md:justify-around text-center gap-2 px-4">
          ИП Константинопольский К.К., 2023 
          <span>Политика обработки персональных данных</span>
        </p>
      </div>
    </div>
  )
}

export default Footerr
