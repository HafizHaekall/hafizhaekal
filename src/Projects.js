import React from 'react';
// page link
import { Link } from 'react-router-dom';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from './variants';
// icons
import { FaEye, FaGithub, FaArrowLeft } from 'react-icons/fa';
// img
import img1 from './assets/portofolio1.jpg';
import img2 from './assets/portofolio2.jpg';
import img3 from './assets/portofolio3.jpg';
import img4 from './assets/portofolio4.jpg';
import img5 from './assets/portofolio5.jpg';
import iconHTML from './assets/skills/HTML.svg';
import iconCSS from './assets/skills/CSS.svg';
import iconJAVASCRIPT from './assets/skills/JAVASCRIPT.svg';
import iconLARAVEL from './assets/skills/LARAVEL.svg';
import iconTAILWIND from './assets/skills/TAILWIND.svg';
import iconVITE from './assets/skills/VITE.svg';
import iconALPINEJS from './assets/skills/ALPINEJS.svg';

const Projects = () => {
  return (
    <section className='py-10 bg-site bg-no-repeat bg-cover overflow-hidden' id='projects'>
      <div className='container mx-auto'>
        <motion.div
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.2 }}
            className='flex flex-col lg:flex-row justify-between gap-y-4 mb-4 lg:mb-10'>
            <Link to='/' className='btn btn-sm py-4 w-48 flex justify-center items-center gap-2'><FaArrowLeft />Back to home</Link>
            <h2 className='h2 leading-tight text-accent'>All Projects</h2>
        </motion.div>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0'>
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
                <span className='text-3xl text-white'>MY DISCUSSION</span>
              </div>
              {/* tech */}
              <div>
                <img src={iconHTML} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[24px] lg:left-[48px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconCSS} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[68px] lg:left-[110px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconJAVASCRIPT} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[110px] lg:left-[172px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
              </div>
              {/* buttons */}
              <a href='https://mydiscussion.github.io' target='blank' className='bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] hover:bg-gradient-to-l flex justify-center items-center h-12 w-12 rounded-full absolute -top-full right-[80px] lg:right-[102px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <FaEye />
              </a>
              <a href='https://github.com/HafizHaekall/HafizHaekall.github.io' target='blank' className='bg-transparent border-[1.5px] border-[#42A6E3] hover:bg-gradient-to-r hover:from-[#42A6E3] hover:to-[#FF56F6] flex justify-center items-center h-12 w-12 rounded-full absolute -top-full right-[24px] lg:right-[48px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
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
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img src={img5} alt='' className='group-hover:scale-125 transition-all duration-500' />
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
              <img src={img2} alt='' className='group-hover:scale-125 transition-all duration-500' />
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
              <img src={img4} alt='' className='group-hover:scale-125 transition-all duration-500' />
              {/* pretitle */}
              <div className='absolute -top-full left-6 lg:left-12 group-hover:top-12 lg:group-hover:top-16 transition-all duration-500 z-40'>
                <span className='text-gradient'>Web Application</span>
              </div>
              {/* title */}
              <div className='absolute -top-full left-6 lg:left-12 group-hover:top-4 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <p className='text-3xl text-white'>E-COMMERCE EXPO</p>
              </div>
              {/* tech */}
              <div>
                <img src={iconLARAVEL} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[24px] lg:left-[48px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconTAILWIND} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[68px] lg:left-[110px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
                <img src={iconVITE} alt='Tech Icon' className='h-8 lg:h-11 absolute -bottom-full left-[110px] lg:left-[172px] group-hover:bottom-5 lg:group-hover:bottom-8 hover:-rotate-12 transition-all duration-700 z-40' />
              </div>
              {/* buttons desktop */}
              <a href='https://pameran.hexatechnoiu.my.id' target='blank' className='hidden lg:flex justify-center items-center bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] hover:bg-gradient-to-l h-12 w-12 rounded-full absolute -top-full right-[80px] lg:right-[102px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <FaEye />
              </a>
              <a href='https://github.com/hexatechnoiu/e-commerce' target='blank' className='hidden lg:flex justify-center items-center bg-transparent border-[1.5px] border-[#42A6E3] hover:bg-gradient-to-r hover:from-[#42A6E3] hover:to-[#FF56F6] h-12 w-12 rounded-full absolute -top-full right-[24px] lg:right-[48px] group-hover:top-5 lg:group-hover:top-8 transition-all duration-700 z-40'>
                <FaGithub />
              </a>
              {/* button mobile */}
              <a href='https://pameran.hexatechnoiu.my.id' target='blank' className='flex lg:hidden justify-center items-center bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] hover:bg-gradient-to-l h-12 w-12 rounded-full absolute -bottom-full right-[80px] lg:right-[102px] group-hover:bottom-5 lg:group-hover:bottom-8 transition-all duration-700 z-40'>
                <FaEye />
              </a>
              <a href='https://github.com/hexatechnoiu/e-commerce' target='blank' className='flex lg:hidden justify-center items-center bg-transparent border-[1.5px] border-[#42A6E3] hover:bg-gradient-to-r hover:from-[#42A6E3] hover:to-[#FF56F6] h-12 w-12 rounded-full absolute -bottom-full right-[24px] lg:right-[48px] group-hover:bottom-5 lg:group-hover:bottom-8 transition-all duration-700 z-40'>
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
