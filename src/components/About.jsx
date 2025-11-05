import React from 'react'
import odamcha from '../assets/svg/odamcha.svg'
import qalqon from '../assets/svg/qalqon.svg'
import zirak from '../assets/svg/zirak.svg'
import koplik from '../assets/img/koplik.png'

const About = () => {
  return (
    <section className='bg-[#F3F5F4] py-17 mb-20'>
        <div className="max-w-[1200px] m-auto px-4">
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4'>
                <div className='w-full lg:w-auto'>
                    <p className='text-[20px] md:text-[24px] text-amber-300'>наше предложение</p>
                    <p className='text-[24px] md:text-[32px] font-bold mb-6'>Лучшие программы для тебя</p>
                    <p className='text-[16px] md:text-[18px] mb-10'>
                        Его корни уходят в один фрагмент классической латыни 45 года <br className='hidden md:block'/> н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, <br className='hidden md:block'/> профессор латыни из колледжа.
                    </p>
                    <div className='flex items-start gap-5 mb-10'>
                        <img src={odamcha} alt="" className='flex-shrink-0'/>
                        <div>
                            <p className='text-[16px] md:text-[18px] font-bold'>Опытный гид</p>
                            <p className='text-[14px]'>
                                Для современного мира базовый вектор развития предполагает <br className='hidden xl:block'/> независимые способы реализации соответствующих условий активизации.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 mb-10'>
                        <img src={qalqon} alt="" className='flex-shrink-0'/>
                        <div>
                            <p className='text-[16px] md:text-[18px] font-bold'>Безопасный поход</p>
                            <p className='text-[14px]'>
                                Для современного мира базовый вектор развития предполагает <br className='hidden xl:block'/> независимые способы реализации соответствующих условий активизации.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-5 mb-8'>
                        <img src={zirak} alt="" className='flex-shrink-0'/>
                        <div>
                            <p className='text-[16px] md:text-[18px] font-bold'>Лояльные цены</p>
                            <p className='text-[14px]'>
                                Для современного мира базовый вектор развития предполагает <br className='hidden xl:block'/> независимые способы реализации соответствующих условий активизации.
                            </p>
                        </div>
                    </div>
                    <button className='w-full md:w-[236px] text-[16px] text-white p-2 hover:bg-emerald-800 cursor-pointer rounded-md bg-[#1A3E3E]'>
                        Стоимость программ
                    </button>
                </div>
                <div className='w-full lg:w-auto flex justify-center'>
                    <img src={koplik} alt="" className='max-w-full h-auto'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About