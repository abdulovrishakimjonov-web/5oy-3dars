import React from 'react'
import uylar from '../assets/img/uylar.png'

const Navbar = () => {
  return (
    <section className='mb-20'>
        <div className="container px-4">
            <div className='flex flex-col md:flex-row items-center justify-evenly gap-8 md:gap-4'>
                <div className='w-full md:w-auto flex justify-center'>
                    <img src={uylar} alt="" className='max-w-full h-auto'/>
                </div>
                <div className='w-full md:w-auto'>
                    <p className='text-[20px] md:text-[24px] text-amber-300'>о нашем походе</p>
                    <p className='text-[24px] md:text-[32px] font-bold mb-6'>
                        Исследуйте все горные массивы <br className='hidden md:block'/> мира вместе с нами
                    </p>
                    <p className='text-[16px] md:text-[18px] text-[#18121E] mb-8'>
                        Его корни уходят в один фрагмент классической латыни 45 года <br className='hidden lg:block'/> н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, <br className='hidden lg:block'/> профессор латыни из колледжа Hampden-Sydney, штат <br className='hidden lg:block'/> Вирджиния, взял одно из самых странных слов в Lorem Ipsum, <br className='hidden lg:block'/> "consectetur"и занялся его поисками в классической латинской <br className='hidden lg:block'/> литературе.
                    </p>
                    <button className='w-full md:w-[200px] text-[16px] text-white p-2 hover:bg-emerald-800 cursor-pointer rounded-md bg-[#1A3E3E]'>
                        Программа тура
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar