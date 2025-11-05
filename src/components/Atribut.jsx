import React from 'react'
import italia from '../assets/img/italiya.png'
import samalyot from '../assets/img/samalyot.png'
import yolak from '../assets/img/yolak.png'
import saroy from '../assets/img/saroy.png'

const Atribut = () => {
  return (
    <section className='bg-[#F3F5F4] py-15 mb-20'>
        <div className='max-w-[1200px] m-auto px-4'>
            <p className='text-[20px] md:text-[24px] text-amber-300 text-center'>делимся впечатлениями</p>
            <p className='text-[24px] md:text-[32px] font-bold text-center mb-10'>Блог о путешествиях</p>
            <div className='flex flex-col lg:flex-row justify-between gap-8 mb-8'>
                <div className='w-full lg:w-[580px] rounded-md bg-white flex flex-col sm:flex-row items-center gap-5 p-3 shadow-gray-300 hover:shadow-xl'>
                    <div className='flex-shrink-0'><img src={italia} alt="" className='w-full sm:w-auto'/></div>
                    <div>
                        <p className='text-[20px] md:text-[24px] font-bold mb-6 hover:underline hover:text-[#1A3E3E]'>Красивая Италия, какая <br className='hidden md:block'/> она в реальности?</p>
                        <p className='text-[14px] mb-6 md:mb-12'>Для современного мира базовый вектор <br className='hidden md:block'/> развития предполагает независимые <br className='hidden md:block'/> способы реализации соответствующих <br className='hidden md:block'/> условий активизации.</p>
                        <p className='text-[14px] font-bold text-amber-300 flex justify-between'>01/04/2023 <a className='text-[#1A3E3E] font-normal' href="#">читать статью</a></p>
                    </div>
                </div>
                <div className='w-full lg:w-[580px] rounded-md bg-white flex flex-col sm:flex-row items-center gap-5 p-3 shadow-gray-300 hover:shadow-xl'>
                    <div className='flex-shrink-0'><img src={samalyot} alt="" className='w-full sm:w-auto'/></div>
                    <div>
                        <p className='text-[20px] md:text-[24px] font-bold mb-6 hover:underline hover:text-[#1A3E3E]'>Долой сомнения! Весь <br className='hidden md:block'/> мир открыт для вас!</p>
                        <p className='text-[14px] mb-6 md:mb-11'>Для современного мира базовый вектор <br className='hidden md:block'/> развития предполагает независимые <br className='hidden md:block'/> способы реализации соответствующих <br className='hidden md:block'/> условий активизации ... независимые <br className='hidden md:block'/> способы реализации соответствующих усл</p>
                        <p className='text-[14px] font-bold text-amber-300 flex justify-between'>01/04/2023 <a className='text-[#1A3E3E] font-normal' href="#">читать статью</a></p>
                    </div>
                </div>
            </div>
            {/* 2 cart */}
            <div className='flex flex-col lg:flex-row justify-between gap-8 mb-10'>
                <div className='w-full lg:w-[580px] rounded-md bg-white flex flex-col sm:flex-row items-center gap-5 p-3 shadow-gray-300 hover:shadow-xl'>
                    <div className='flex-shrink-0'><img src={yolak} alt="" className='w-full sm:w-auto'/></div>
                    <div>
                        <p className='text-[20px] md:text-[24px] font-bold mb-6 hover:underline hover:text-[#1A3E3E]'>Как подготовиться к <br className='hidden md:block'/> путешествию в <br className='hidden md:block'/> одиночку? </p>
                        <p className='text-[14px] mb-6 md:mb-13'>Для современного мира базовый вектор <br className='hidden md:block'/> развития предполагает.</p>
                        <p className='text-[14px] font-bold text-amber-300 flex justify-between'>01/04/2023 <a className='text-[#1A3E3E] font-normal' href="#">читать статью</a></p>
                    </div>
                </div>
                <div className='w-full lg:w-[580px] rounded-md bg-white flex flex-col sm:flex-row items-center gap-5 p-3 shadow-gray-300 hover:shadow-xl'>
                    <div className='flex-shrink-0'><img src={saroy} alt="" className='w-full sm:w-auto'/></div>
                    <div>
                        <p className='text-[20px] md:text-[24px] font-bold mb-6 md:mb-8 hover:underline hover:text-[#1A3E3E]'><a href="#">Индия ... летим?</a></p>
                        <p className='text-[14px] mb-6 md:mb-34'>Для современного мира базовый.</p>
                        <p className='text-[14px] font-bold text-amber-300 flex justify-between'>01/04/2023 <a className='text-[#1A3E3E] font-normal' href="#">читать статью</a></p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'><button className='w-full max-w-[220px] text-[16px] text-white p-2 hover:bg-emerald-800 cursor-pointer rounded-md bg-[#1A3E3E]'>Другие материалы</button></div>
        </div>
    </section>
  )
}

export default Atribut