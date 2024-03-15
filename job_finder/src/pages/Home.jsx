import Hero from "../Components/Hero"
import Navbar from "../Components/Navbar"
import Recommended_jobs from "../Components/Recommended_jobs"

function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Recommended_jobs />
        </div>
    )
        
    
}

export default Home