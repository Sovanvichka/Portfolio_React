import image1 from '../../public/image/image1.jpg'
import image2 from '../../public/image/image2.jpg'
import image3 from '../../public/image/image3.jpg'
import image4 from '../../public/image/image4.jpg'
import image5 from '../../public/image/image5.jpg'
import {motion} from 'framer-motion'

const projectsData = [
  {
    image:image1,
    title:"Habit Tracker",
    description:"A habit tracker app that helps you build good habits and break bad ones.",
    technologies:["React","Node.js","MongoDB"],
  },
  {
    image:image2,
    title:"Habit Tracker",
    description:"A habit tracker app that helps you build good habits and break bad ones.",
    technologies:["React","Node.js","MongoDB"],
  },
  {
    image:image3,
    title:"Habit Tracker",
    description:"A habit tracker app that helps you build good habits and break bad ones.",
    technologies:["React","Node.js","MongoDB"],
  },
  {
    image:image4,
    title:"Habit Tracker",
    description:"A habit tracker app that helps you build good habits and break bad ones.",
    technologies:["React","Node.js","MongoDB"],
  },
  {
    image:image5,
    title:"Habit Tracker",
    description:"A habit tracker app that helps you build good habits and break bad ones.",
    technologies:["React","Node.js","MongoDB"],
  }
]

const ScrollReveal = ({children}) => {
  return(
    <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.5}}
    >
      {children}
    </motion.div>
  )
}


const ProjectCard = ({project}) =>{
  return(
    <ScrollReveal>
    <div className='flex flex-col items-center gap-8 md:flex-row md:gap-24'>
      <img src={project.image} alt="" className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]' />

      <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-3'>
          <div className='text-xl font-semibold'>
            {project.title}
          </div>
          <p className='text-gray-400 '>
            {project.description}
            </p>
        </div>
        <div className='flex flex-wrap gap-5 '>
          {
            project.technologies.map((tech, index) => (
              <span key={index} className='rounded-lg bg-black p-3'>
                {tech}
              </span>
            ))
          }  

        </div>
        
      </div>
    </div>
    </ScrollReveal>
  )
}


const Project = () => {
  return (
    
    <div id='Projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
    <ScrollReveal>
      <h1 className='text-4xl font-light text-white md:text-6xl'>
        My Projects
      </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default Project
