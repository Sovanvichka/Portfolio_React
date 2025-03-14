import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs'
import { BiMenu, BiX } from 'react-icons/bi'
import { useState } from 'react'
const Navbar = () => {

  
  const [isOpen, setIsOpen] = useState(false); 

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-ml md:text-3xl font-semibold trasition-all duration-300"> 
        Sovan
      </a>
      
      <ul className="hidden md:flex gap-5">
        <a href="#home" className="cursor-pointer text-ml  opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#Tech" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Tech</li>
        </a>
        <a href="#Projects" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Projects</li>
        </a>
        <a href="#Contact" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>
      </ul>

       <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
          <BsYoutube/>
        </li>

        <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
          <BsLinkedin/>
        </li>
        
        <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
          <BsTwitterX/>
        </li>

        <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
          <BsFacebook/>
        </li>

        <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
          <BsGithub/>
        </li>

        <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
          <BsInstagram/>
        </li> 
       </ul>

      {isOpen ? (
        <BiX className='block md:hidden text-2xl ' onClick={menuOpen} />
        ) : (
        <BiMenu className='block md:hidden text-2xl' onClick={menuOpen}/> 
        )}

        {isOpen &&(
          <div className={'fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "Hidden"}'}>
            <ul className='flex flex-col gap-8'>
              <a href="#home" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Home</li>
              </a>
              <a href="#Tech" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Tech</li>
              </a>
              <a href="#Projects" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Projects</li>
              </a>
              <a href="#Contact" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
                <li>Contact</li>
              </a>
            </ul>

            <ul className="flex flex-wrap gap-10">
              <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
                <BsYoutube/>
              </li>

              <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
                <BsLinkedin/>
              </li>
              
              <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
                <BsTwitterX/>
              </li>

              <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
                <BsFacebook/>
              </li>

              <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
                <BsGithub/>
              </li>

              <li className="cursor-pointer text-ml opacity-70 transition-all dration-300 hover:text-blue-500 hover:opacity-100 ">
                <BsYoutube/>
              </li> 
            </ul>
          </div>
        )}

    </nav>
  )
}

export default Navbar
