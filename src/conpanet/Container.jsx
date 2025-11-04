import React from 'react'
import manzara from '../assets/img/manzara.png'
import sumka from '../assets/img/sumka.png'
import dubay from '../assets/img/dubay.png'
import sohil from '../assets/img/sohil.png'
import daryo from '../assets/img/daryo.png'
import harita from '../assets/img/harita.png'

const Container = () => {
  return (
    <section className='mb-20'>
        <div className='max-w-[1200px] m-auto px-4'>
            <p className='text-[20px] md:text-[24px] text-amber-300 text-center'>фото-отчет</p>
            <p className='text-[24px] md:text-[32px] font-bold mb-10 text-center'>Делимся впечатлениями</p>
            <div className='flex flex-col md:flex-row justify-between gap-6 mb-6'>
                <div className='w-full md:w-[580px] overflow-hidden rounded-md'><img className='w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:-translate-y-2' src={manzara} alt="" /></div>
                <div className='w-full md:w-[280px] overflow-hidden rounded-md'><img className='w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:-translate-y-2' src={sumka} alt="" /></div>
                <div className='w-full md:w-[280px] overflow-hidden rounded-md'><img  className='w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:-translate-y-2' src={dubay} alt="" /></div>
            </div>
            <div className='flex flex-col md:flex-row justify-between gap-6 mb-10'>
                <div className='w-full md:w-[280px] overflow-hidden rounded-md'><img  className='w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:-translate-y-2' src={sohil} alt="" /></div>
                <div className='w-full md:w-[580px] overflow-hidden rounded-md'><img className='w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:-translate-y-2' src={daryo} alt="" /></div>
                <div className='w-full md:w-[280px] overflow-hidden rounded-md'><img  className='w-full h-full object-cover transition-transform duration-500 hover:scale-110 hover:-translate-y-2' src={harita} alt="" /></div>
            </div>
            <div className='flex justify-center'><button className='w-full max-w-[187px] text-[16px] text-white p-2 hover:bg-emerald-800 cursor-pointer rounded-md bg-[#1A3E3E]'>Наш pinterest</button></div>
        </div>
    </section>
  )
}

export default Container