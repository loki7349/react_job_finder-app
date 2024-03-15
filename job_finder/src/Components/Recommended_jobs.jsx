
function Recommended_jobs(){
    const Categories = ({image, title, opening}) =>{
        return( 
        <div className="bg-white rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-2xl">
            <span className="flex items-center gap-x-4" >
                <img src={image} alt="" width={30} />
                <p>{title}</p>
            </span>
            <p>{opening} Openings</p>
        </div>
        )
    }
    return(
        <div className="bg-[#f5f6fc]">
            <div className="container mx-auto px-6 py-24">
                <div className="md:flex items-center justify-between" >
                    <h1 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">Recommended Jobs</h1>
                    <span className="mg:flex gap-x-4">
                        <button className="rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">Latest Jobs</button>
                        <button className="rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow-sm">Premium Jobs</button>
                    </span>
                </div>
                <p className="text-2xl mt-4 font-light">Explore suggested job searches</p>
                <div className="xl:flex gap-x-8 mt-16">
                    <div className="xl:w-2/5">
                        <div className="bg-white rounded-[10px] py-8 pl-6 mb-4">
                            <h2 className="text-4xl font-semibold">Job Categories</h2>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <Categories image="/Premium Vector _ School bus hand drawn icon illustration isolated.jpg" opening="3" title="Automotive"/>
                            <Categories image="/png hearts.jpg" opening="1" title="Health and Care"/>
                            <Categories image="/Free Vector _ Construction concept with retro style concept workers and machines building house cartoon.jpg" opening="3" title="Construction"/>
                            <Categories image="/Adhere To Physical Exercise PNG Images,  Vector Material, Fitness Coach, Happy Weekend PNG Transparent Background - Pngtree.jpg" opening="3" title="Automotive"/>
                            <Categories image="/Premium Vector _ School bus hand drawn icon illustration isolated.jpg" opening="3" title="Automotive"/>
                            <Categories image="/png hearts.jpg" opening="1" title="Health and Care"/>
                            <Categories image="/Free Vector _ Construction concept with retro style concept workers and machines building house cartoon.jpg" opening="3" title="Construction"/>
                            <Categories image="/Adhere To Physical Exercise PNG Images,  Vector Material, Fitness Coach, Happy Weekend PNG Transparent Background - Pngtree.jpg" opening="3" title="Automotive"/>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended_jobs