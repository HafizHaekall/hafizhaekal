import React from 'react';
// page link
import { Link } from 'react-router-dom';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// icons
import { FaEye, FaGithub } from 'react-icons/fa';
// img
import img1 from '../assets/portofolio2.jpg';
import img2 from '../assets/portofolio3.jpg';
import img3 from '../assets/portofolio5.jpg';
import iconLARAVEL from '../assets/skills/LARAVEL.svg';
import iconTAILWIND from '../assets/skills/TAILWIND.svg';
import iconVITE from '../assets/skills/VITE.svg';
import iconALPINEJS from '../assets/skills/ALPINEJS.svg';

const Work = () => {
  return (
    <section className='section mt-[5vh] md:mt-[10vh] xxl:mt-0' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-16 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br />Work</h2>
              <p className='max-w-sm mb-12 lg:mb-24'>I've created a few project while i was learing about frontend website development.</p>
              <Link to='/projects' onClick={() => { window.scrollTo(0, 0); }} className='btn btn-sm py-4'>View all projects</Link>
            </div>
            {/* images */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img src={img2} alt='' className='group-hover:scale-125 transition-all duration-500' />
              {/* pretitle */}
              <div className='absolute -top-full left-6 lg:left-12 group-hover:top-12 lg:group-hover:top-16 transition-all duration-500 z-40'>
                <span className='text-gradient'>Web Application</span>
              </div>
              {/* title */}
              <div className='absolute -top-full left-6 lg:left-12 group-hover:top-4 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <span className='text-3xl text-white'>E-VOTING</span>
              </div>
              {/* tech */}
              <div>
                <img src={iconLARAVEL} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[24px] lg:left-[48px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconTAILWIND} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[68px] lg:left-[110px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconVITE} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[110px] lg:left-[172px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconALPINEJS} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[150px] lg:left-[230px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
              </div>
              {/* buttons */}
              <a href='https://sipentaskumis.smkn2sumedang.sch.id' target='blank' className='bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] hover:bg-gradient-to-l flex justify-center items-center h-12 w-12 rounded-full absolute -top-full right-[80px] lg:right-[102px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <FaEye />
              </a>
              <a href='https://github.com/hexatechnoiu/sipentaskumis' target='blank' className='bg-transparent border-[1.5px] border-[#42A6E3] hover:bg-gradient-to-r hover:from-[#42A6E3] hover:to-[#FF56F6] flex justify-center items-center h-12 w-12 rounded-full absolute -top-full right-[24px] lg:right-[48px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <FaGithub />
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img src={img1} alt='' className='group-hover:scale-125 transition-all duration-500' />
              {/* pretitle */}
              <div className='absolute -top-full left-6 lg:left-12 group-hover:top-12 lg:group-hover:top-16 transition-all duration-500 z-40'>
                <span className='text-gradient'>Web Application</span>
              </div>
              {/* title */}
              <div className='absolute -top-full left-6 lg:left-12 group-hover:top-4 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <span className='hidden lg:block text-3xl text-white'>NOIU Event Organizer</span>
                <span className='block lg:hidden text-3xl text-white'>NOIU EO</span>
              </div>
              {/* tech */}
              <div>
                <img src={iconLARAVEL} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[24px] lg:left-[48px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconTAILWIND} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[68px] lg:left-[110px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconVITE} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[110px] lg:left-[172px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
              </div>
              {/* buttons */}
              <a href='https://hexatechnoiu.my.id' target='blank' className='bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] hover:bg-gradient-to-l flex justify-center items-center h-12 w-12 rounded-full absolute -top-full right-[80px] lg:right-[102px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <FaEye />
              </a>
              <a href='https://github.com/hexatechnoiu/noiu-eo' target='blank' className='bg-transparent border-[1.5px] border-[#42A6E3] hover:bg-gradient-to-r hover:from-[#42A6E3] hover:to-[#FF56F6] flex justify-center items-center h-12 w-12 rounded-full absolute -top-full right-[24px] lg:right-[48px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <FaGithub />
              </a>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img src={img3} alt='' className='group-hover:scale-125 transition-all duration-500' />
              {/* pretitle */}
              <div className='absolute -top-full left-6 lg:left-12 group-hover:top-12 lg:group-hover:top-16 transition-all duration-500 z-40'>
                <span className='text-gradient'>Web Application</span>
              </div>
              {/* title */}
              <div className='absolute -top-full left-6 lg:left-12 group-hover:top-4 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <p className='text-3xl text-white'>E-COMMERCE TEFA <span className='text-sm lg:text-base'>[development]</span></p>
              </div>
              {/* tech */}
              <div>
                <img src={iconLARAVEL} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[24px] lg:left-[48px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconTAILWIND} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[68px] lg:left-[110px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconVITE} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[110px] lg:left-[172px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
              </div>
              {/* buttons desktop */}
              <a href='https://store.hexatechnoiu.my.id' target='blank' className='hidden lg:flex justify-center items-center bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] hover:bg-gradient-to-l h-12 w-12 rounded-full absolute -top-full right-[80px] lg:right-[102px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <FaEye />
              </a>
              <a href='https://github.com/tefait/tefa-store' target='blank' className='hidden lg:flex justify-center items-center bg-transparent border-[1.5px] border-[#42A6E3] hover:bg-gradient-to-r hover:from-[#42A6E3] hover:to-[#FF56F6] h-12 w-12 rounded-full absolute -top-full right-[24px] lg:right-[48px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <FaGithub />
              </a>
              {/* button mobile */}
              <a href='https://store.hexatechnoiu.my.id' target='blank' className='flex lg:hidden justify-center items-center bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] hover:bg-gradient-to-l h-12 w-12 rounded-full absolute -bottom-full right-[80px] lg:right-[102px] group-hover:bottom-5 lg:group-hover:bottom-8 transition-all duration-700 z-40'>
                <FaEye />
              </a>
              <a href='https://github.com/tefait/tefa-store' target='blank' className='flex lg:hidden justify-center items-center bg-transparent border-[1.5px] border-[#42A6E3] hover:bg-gradient-to-r hover:from-[#42A6E3] hover:to-[#FF56F6] h-12 w-12 rounded-full absolute -bottom-full right-[24px] lg:right-[48px] group-hover:bottom-5 lg:group-hover:bottom-8 transition-all duration-700 z-40'>
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
