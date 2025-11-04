import React from 'react'
import dengiz from '../assets/img/dengiz.png'
import star from '../assets/svg/star.svg'
import yulduz from '../assets/img/yulduz.png'
import yogalar from '../assets/img/yogalar.png'

const Contact = () => {
  return (
    <section className='mb-20'>
        <div className='max-w-[1200px] m-auto px-4'>
            <p className='text-[20px] md:text-[24px] text-amber-300 text-center'>по версии отдыхающих</p>
            <p className='text-[24px] md:text-[32px] text-center font-bold mb-10'>Популярные направления</p>
            <div className='flex flex-col md:flex-row items-center justify-center gap-10 mb-12'>
            {/* 1 card */}
            <div className="relative w-full max-w-[380px] shadow-black shadow-2xl rounded-4xl">
           <img src={dengiz} className="w-full h-full object-cover" />

           <div className="absolute inset-0 py-12">
           <div className='flex justify-end'><p className='flex gap-1 w-[65px] bg-white/40 rounded-l-lg'><img src={star} alt="" />4.9</p></div>
        </div>
        <div className='absolute inset-0 flex items-end justify-around'>
        <div className='bg-white/40 w-full flex items-center justify-around p-3 rounded-b-4xl'>
        <div>
        <p className='text-[20px] md:text-[24px] text-white'>Озеро возле гор</p>
        <p className='text-[12px] md:text-[14px] text-white'>романтическое приключение</p>
        </div>
        <div><p className='text-[18px] md:text-[20px] text-white bg-white/50 p-1 rounded-md px-2'>480$</p></div>
        </div>
        </div>
        </div>
        {/* 2 card */}
        <div className="relative w-full max-w-[380px] shadow-black shadow-2xl rounded-4xl">
           <img src={yulduz} className="w-full h-full object-cover" />

           <div className="absolute inset-0 py-12">
           <div className='flex justify-end'><p className='flex gap-1 w-[65px] bg-white/40 rounded-l-lg'><img src={star} alt="" />4.9</p></div>
        </div>
        <div className='absolute inset-0 flex items-end justify-around'>
        <div className='bg-white/40 w-full flex items-center justify-around p-3 rounded-b-4xl'>
        <div>
        <p className='text-[20px] md:text-[24px] text-white'>Ночь в горах</p>
        <p className='text-[12px] md:text-[14px] text-white'>в компании друзей</p>
        </div>
        <div><p className='text-[18px] md:text-[20px] text-white bg-white/50 p-1 rounded-md px-2'>500$</p></div>
        </div>
        </div>
        </div>
        {/* 3 card */}
        <div className="relative w-full max-w-[380px] shadow-black shadow-2xl rounded-4xl">
           <img src={yogalar} className="w-full h-full object-cover" />

           <div className="absolute inset-0 py-12">
           <div className='flex justify-end'><p className='flex gap-1 w-[65px] bg-white/40 rounded-l-lg'><img src={star} alt="" />5.0</p></div>
        </div>
        <div className='absolute inset-0 flex items-end justify-around'>
        <div className='bg-white/40 w-full flex items-center justify-around p-3 rounded-b-4xl'>
        <div>
        <p className='text-[20px] md:text-[24px] text-white'>Йога в горах</p>
        <p className='text-[12px] md:text-[14px] text-white'>для тех, кто забоится о себе</p>
        </div>
        <div><p className='text-[18px] md:text-[20px] text-white bg-white/50 p-1 rounded-md px-2'>230$</p></div>
        </div>
        </div>
        </div>
    </div>
    <div className='flex justify-center'><button className='w-full max-w-[244px] text-[16px] text-white p-2 hover:bg-emerald-800 cursor-pointer rounded-md bg-[#1A3E3E]'>Рейтинг направлений</button></div>
        </div>
    </section>
  )
}

export default Contact