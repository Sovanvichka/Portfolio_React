import { BiLogoBootstrap, BiLogoCss3, BiLogoDocker, BiLogoHtml5, BiLogoJava, BiLogoJavascript, BiLogoNodejs, BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript, BiLogoVuejs } from "react-icons/bi"
import { motion } from "framer-motion"

const Tech = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1 , y: 0},
  }

  return (
    <div id='Tech' className='flex min-h-[90vh] w-full flex-col items-center justify-center gap-16 md:gap-32'>
      <motion.h1 
      variants={variants}
      initial='hidden'
      whileInView={{ opacity: 1 , y: 0}}
      transition={{ duration: 0.5 }}
      className="text-3xl font-light text-white md:text-6xl">Technology</motion.h1>
      
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/>
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
          <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/>
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
            <BiLogoCss3 className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/>
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/>
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
          <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/>
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
          <BiLogoBootstrap className="cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/>
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
           <BiLogoJava className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/> 
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
           <BiLogoNodejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/> 
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
           <BiLogoPostgresql className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/> 
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
           <BiLogoDocker className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/> 
        </motion.div>
        <motion.div
        variants={variants}
        initial='hidden'
        whileInView={{ opacity: 1 , y: 0}}
        transition={{ duration: 0.5 }}
        >
           <BiLogoVuejs className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px] lg:text-[120px]"/> 
        </motion.div> 
      </div>
    </div>
  )
}

export default Tech
