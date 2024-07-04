import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen items-center`}>
      <div
        className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex flex-row justify-center items-center gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

       <div className="flex flex-col justify-center items-center mt-5">
        <div>
            <h1 className={`${styles.heroHeadText} text-white justify-center items-center`}>
              Hi, <span className='text-[#915EFF]'>Manager</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 items-center`}>
            The aim of this document is to provide <br className='sm:block hidden' />
            a complete guide to all the <br className='sm:block hidden' />
            activities, plans, and processes <br className='sm:block hidden' />
            that we uses to design, deliver <br className='sm:block hidden' />
            and manage service delivery for our customers.            
            </p>   
           
          </div>
                    
       </div>   
      </div>
      
   

      <div className='absolute xs:bottom-5 bottom-24 w-full flex justify-center items-center'>
        <a href='#start'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
