import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] flex flex-row'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#52b4ec]'>Hello There : </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Ravindu Iddamalgoda
        </h1>
        <h2 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer and Data Science Student.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        👋 Hi, I'm Ravindu Iddamalgoda, a versatile software developer proficient in Java, Python, C#, JavaScript, and more. 
        Specializing in ReactJS, Node.js, React Native and Spring Boot I've delivered scalable solutions. Experienced in Git, 
        databases like PostgreSQL and MongoDB, My SQL , and exploring IoT , Computer Vision and Machine Learning. Let's connect for impactful collaborations!
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-primaryBlue hover:border-primaryBlue'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
