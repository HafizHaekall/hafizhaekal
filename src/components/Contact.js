import React from 'react';
// formspree
import { useForm, ValidationError } from '@formspree/react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
// navigate
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [state, handleSubmit, reset] = useForm('mvgpgoje');
  const navigate = useNavigate();
  if (state.succeeded) {
    navigate("/berhasil");
  }
  return (
  <section className='py-16 lg:section md:mt-[20vh] xxl:mt-0' id='contact'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.3 }}
          className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
          </div>
        </motion.div>
        {/* form */}
        <motion.form onSubmit={handleSubmit}
          variants={fadeIn('left', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once:false, amount: 0.3 }}
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-12 p-6 items-start'>
            <input id='name' name='name' type='text' placeholder='Your name' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
            <input id='email' name='email' type='email' placeholder='Your email' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <textarea id='message' name='message' placeholder='Your message' className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button disabled={state.submitting} className='btn btn-lg cursor-pointer'>Send message</button>
        </motion.form>
      </div>
    </div>
  </section>
  );
};

export default Contact;
