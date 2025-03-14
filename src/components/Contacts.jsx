import { motion } from "framer-motion"
const Contacts = () => {

  

  return (
    <div id='Contact' className='flex min-h-[70vh] min-w-full items-center justify-center'>
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <motion.h1
        initial={{y:-50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        className="text-5xl text-center md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch...
          </span>
        </motion.h1>

        <motion.p
        initial={{y:50, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.8, delay:0.2}}
        className="text-center text-lg font-semibold text-gray-500">
          Want to chat? I'd love to hear from you. Send me an email at
        </motion.p>

        <a href="mailto:ansovanvichka@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-indigo-600">
          Contact Me</a>
      </div>
    </div>
  )
}

export default Contacts
