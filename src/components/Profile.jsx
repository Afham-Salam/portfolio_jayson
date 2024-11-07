import React from 'react'
import photo from "../assets/profile.jpg";

export default function Profile() {
  return (
    <div id="home" className='lg:h-screen w-full flex flex-col-reverse md:flex-row justify-center items-center lg:gap-10 gap-5  bg-[#333647] pt-32 lg:pt-0'>

      <div className=' text-white flex flex-col lg:gap-5 gap-3 px-4 pb-3 '>
        <p className='text-[20px] sm:text-[22px] lg:text-[25px]'>Hello!</p>
        <p className='text-[40px] md:text-[50px] lg:text-[60px] font-bold tracking-wide'>I'm Jayson Das K</p>
        <p className='text-[24px] md:text-[26px] lg:text-[28px] tracking-wider'>Flutter Developer</p>
        <div className='w-full md:w-[500px] lg:w-[600px]'>
          <p className='text-[15px] sm:text-[17px] tracking-wider'>
          My goal is to exceed client expectations by delivering high-quality, 
          responsive applications on time, ensuring complete satisfaction and a seamless user experience.          </p>
        </div>
        <button className="text-white bg-[#df4b22] hover:bg-[#d85430db] rounded-md py-2 px-3 w-[120px]">
          Hire Me
        </button>
      </div>

      <div>
        <img src={photo} alt="Jayson Das" className='rounded-full md:w-[400px] w-[300px] border-2 border-dashed border-[#df4b22]' />
      </div>

    </div>
  );
}


