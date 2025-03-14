import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div id="home" className="px-16  flex min-h-screenw-full items-center jusitify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        
        <motion.div
        initial={{y:-50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        >
          <img src="../../public/image/profile.jpg" alt="" className='w-[100px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transitionn-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[150px]' />
        </motion.div>

        <motion.div 
        initial={{y:50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}

        className="flex mx-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl md:text-6xl font-light trasition-all duration-300">Sovan</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent opacity-80 text-xl md:text-2xl font-light trasition-all duration-300">Web Developer</h3>
          <p className="md:text-base text-pretty text-sm md:text-md text-gray-400">
            I'm a Developer skilled in React, Node, Express, and MongoDB. I'm passionate about building web applications and solving problems. I'm always looking for new opportunities to learn and grow.
          </p>
        </motion.div>
      </div>
      
    </div>
  )
}

export default Hero
