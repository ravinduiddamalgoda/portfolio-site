import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-primaryBlue'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Ravindu Iddamalgoda, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p className=''>👋 A Full Stack web developer and enthusiastic AI/ML enthusiast with a passion for Computer Science. 
              Currently pursuing a BSc. in Information Technology specializing in Data Science. 
            
              <br/>
              My diverse background allows me to excel in various aspects of technology, from software development to machine learning. 
              Eager to continue exploring and contributing to the ever-evolving field of technology. 🌟💻🤖🔒</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
