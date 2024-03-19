import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/style.css"

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 3,
    },
    desktop:{
        breakpoint: {max: 3000, min: 1024},
        items: 3,
    },
    tablet:{
        breakpoint: {max: 1024, min: 464},
        items: 2,
    },
    module:{
        breakpoint: {max: 464, min: 0},
        items: 1,
    },

}

function Top_Company(){
    return(
        <div>
            <div>
                <div>
                    <h2>Top Company Registered</h2>
                    <span>
                        <button>Browse Jobs</button>
                        <button>See all Companies</button>
                    </span>
                </div>
                <p>Know your worth and find the job that qualify your life</p>
                <div>
                    <Carousel
                    ></Carousel>
                </div>
            </div>
        </div>
    )
}
export default Top_Company