import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// link
import { Link } from 'react-scroll';

// services data
const services = [
  {
    name: 'UI/UX Desgin',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed impedit nostrum dolorem.',
    link: 'Learn more',
  },
  {
    name: 'Development',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed impedit nostrum dolorem.',
    link: 'Learn more',
  },
  {
    name: 'Digital Marketing',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed impedit nostrum dolorem.',
    link: 'Learn more',
  },
  {
    name: 'Product Branding',
    description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sed impedit nostrum dolorem.',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section mt-[20vh]' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>My Skills.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Tech Stack & Tools</h3>
            <Link to='work' smooth={true} spy={true} className='btn btn-sm cursor-pointer py-4'>See my work</Link>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once:false, amount: 0.3 }}
            className='flex-1'>
            {/* services list */}
            <div>
              {services.map((service, index)=> {
                // destructure services
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'><BsArrowUpRight /></a>
                      <a href='#' className='text-gradient text-sm'>{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
