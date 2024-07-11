import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// link
import { Link } from 'react-scroll';
// images
import aboutImg from '../assets/about.png';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.3 }}
          className='flex-1 flex justify-center'>
            <img src={aboutImg} className='h-[300px] md:h-[450px]' />
        </motion.div>
        {/* text */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.3 }}
          className='flex-1'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>A Frontend Developer from in Indonesia.</h3>
          <p className='mb-6'>
            Hi everyone! I'am Hafiz Haekal, a Frontend Developer. I'am a intermediate experienced and I hope with this I can always learning something new to be able to invent digital applications that can help many people in the future.
          </p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient pt-2 mb-2'>
                {inView ? <CountUp start={0} end={3} duration={5} /> :null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient pt-2 mb-2'>
                {inView ? <CountUp start={0} end={5} duration={4} /> :null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Framework <br />
                Used
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient pt-2 mb-2'>
                {inView ? <CountUp start={0} end={10} duration={4} /> :null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <Link to='contact' smooth={true} spy={true} className='btn btn-lg cursor-pointer flex items-center'>Contact me</Link>
            <Link to='work' smooth={true} spy={true} className='text-gradient btn-link cursor-pointer'>
              My Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
