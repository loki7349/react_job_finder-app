import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Recommended_jobs from "../Components/Recommended_jobs"
import Top_Company from "../Components/Top_Company"

function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Recommended_jobs />
            <Top_Company />
        </div>
    )
        
    
}

export default Home