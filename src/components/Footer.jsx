import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <section className="rounded-xl flex w-full items-center justify-between border-b border-b-gray-700 bg-black/20 px-16 py-6 text-white backdrop-blur-md">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        {/* <img className="w-auto h-9" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" /> */}
                        <a href="#home" className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-ml md:text-3xl font-semibold trasition-all duration-300"> 
                            Sovan
                        </a>
                        <p className="text-base leading-relaxed text-white opacity-70 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                        <ul className="flex items-center space-x-3 mt-9">
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
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-white uppercase">Company</p>

                        <ul className="mt-6 space-y-4 text-white">
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
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-white uppercase">Help</p>

                        <ul className="mt-6 space-y-4">
                        <a href="#home" className="cursor-pointer text-ml  opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Home</li>
                        </a>
                        <a href="#Tech" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Technologies</li>
                        </a>
                        <a href="#Projects" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Projects</li>
                        </a>
                        <a href="#Contact" className="cursor-pointer text-ml opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Contact</li>
                        </a>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

                        <form action="#" method="POST" className="mt-6">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black/20 placeholder-white placeholder-opacity-70 transition-all duration-200 bg-black/50 border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>

                            <button type="" className="mt-4 text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-4 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-indigo-600">Subscribe</button>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-white opacity-50">© Copyright 2025, All Rights Reserved by Sovan</p>
            </div>
        </section>

    </div>
  )
}

export default Footer
