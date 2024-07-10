import React from 'react';
// images
import imageBanner from '../assets/hafiz.jpg';
// icons
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// link
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section className='min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:false, amount: 0.7 }}
              className='text-[45px] font-bold leading-[0.8] lg:text-[90px]'>
                HAFIZ <span>HAEKAL</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:false, amount: 0.7 }}
              className='mb-6 text-[24px] lg:text-[36px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I'am a&nbsp;
                <TypeAnimation
                  sequence={[
                    'Developer',
                    3000,
                    'Designer',
                    3000,
                  ]}
                  speed={50}
                  className='text-accent'
                  wrapper='span'
                  repeat={Infinity}
                />
              </span>
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
                 A fresh graduate. Software Developer
                  who has the ability to create attractive,
                  communicative and responsive user
                  interfaces. Able to work in a team well.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact' smooth={true} spy={true} className='btn btn-lg cursor-pointer flex items-center'>Contact me</Link>
              <Link to='work' smooth={true} spy={true} className='text-gradient btn-link cursor-pointer'>
                My Portfolio
              </Link>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once:false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.instagram.com/hafizhaekall/' target='blank' className='hover:scale-110 hover:-rotate-12 transition-all duration-500'>
                <FaInstagram />
              </a>
              <a href='https://www.linkedin.com/in/hafizhaekal/' target='blank' className='hover:scale-110 hover:-rotate-12 transition-all duration-500'>
                <FaLinkedin />
              </a>
              <a href='https://www.github.com/hafizhaekall/' target='blank' className='hover:scale-110 hover:-rotate-12 transition-all duration-500'>
                <FaGithub />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 justify-center max-w-[320px] lg:max-w-[482px]'>
            <div className='h-[400px] bg-gradient-to-r from-[#FF56F6] to-[#42A6E3] rounded-xl'><img src={imageBanner} alt='' className='h-[400px] rounded-xl rotate-12 hover:rotate-0 duration-500' /></div>
          </motion.div>
        </div>
      </div>
    </section> 
  );
};

export default Banner;
