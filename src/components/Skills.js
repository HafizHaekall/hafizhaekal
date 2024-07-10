import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// Import all images dynamically
const images = require.context('../assets/skills', false, /\.svg$/);
const imagePaths = {
  html: images('./HTML.svg'),
  css: images('./CSS.svg'),
  javascript: images('./JAVASCRIPT.svg'),
  php: images('./PHP.svg'),
  bootstrap: images('./BOOTSTRAP.svg'),
  tailwind: images('./TAILWIND.svg'),
  sass: images('./SASS.svg'),
  react: images('./REACTJS.svg'),
  vue: images('./VUEJS.svg'),
  laravel: images('./LARAVEL.svg'),
  vite: images('./VITE.svg'),
  mysql: images('./MYSQL.svg'),
  nodejs: images('./NODEJS.svg'),
  git: images('./GIT.svg'),
  flutter: images('./FLUTTER.svg'),
  figma: images('./FIGMA.svg')
};

// skills image data
const skills = [
  { icon: imagePaths.html },
  { icon: imagePaths.css },
  { icon: imagePaths.javascript },
  { icon: imagePaths.php },
  { icon: imagePaths.bootstrap },
  { icon: imagePaths.tailwind },
  { icon: imagePaths.sass },
  { icon: imagePaths.react },
  { icon: imagePaths.vue },
  { icon: imagePaths.laravel },
  { icon: imagePaths.vite },
  { icon: imagePaths.mysql },
  { icon: imagePaths.nodejs },
  { icon: imagePaths.git },
  { icon: imagePaths.flutter },
  { icon: imagePaths.figma }
];

const Skills = () => {
  return (
    <section className='section mt-[15vh] md:mt-0' id='skills'>
      <div className='container mx-auto'>
        <div className='flex flex-col'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mb-8 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>My Skills</h2>
            <h3 className='h3 max-w-[455px]'>Tech Stack & Tools</h3>
          </motion.div>
          {/* skills */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* skills list */}
            <div className='grid grid-cols-4 gap-4 md:grid-cols-6 md:gap-6 lg:grid-cols-8 lg:gap-8'>
              {skills.map((skill, index) => {
                const { icon } = skill;
                return (
                  <div key={index} className='flex justify-center items-center h-20 w-20 md:h-24 md:w-24 p-4 rounded-xl bg-blue-900/70 hover:bg-gradient-to-r hover:from-[#FF56F6] hover:to-[#42A6E3] hover:-rotate-6 duration-300'>
                    <img src={icon} alt='Skill Icon' className='h-20' />
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

export default Skills;
