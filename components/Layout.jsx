import Navbar from "./Navbar"
import Hero from "./Hero"
import SubHero from "./SubHero"
import Services from "./Services"
import Footer from "./Footer"

export default function Layout ({children}) {
    return (
       <div className="bg-body">
       <Navbar />
       <Hero />
       <SubHero />
       <Services />
       <Footer />
       </div> 
    )
}