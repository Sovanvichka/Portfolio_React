import Contacts from "./components/Contacts"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Project from "./components/Project"
import Tech from "./components/Tech"

function App() {
  return (<>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>




      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-32">
        <Navbar/>
        <Hero/>
        <Tech/>
        <Project/>
        <Contacts/>
        <Footer/>
      </main>
    </> 
  )
}

export default App
