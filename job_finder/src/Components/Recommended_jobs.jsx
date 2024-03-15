import {GrAnnounce} from "react-icons/gr"
import { HiOutlineHeart } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaDotCircle } from "react-icons/lia";

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
    };

    const Recommend =({
        time, 
        type, 
        title, 
        amount, 
        country, 
        job, 
        bgColor, 
        color,
    }) =>{
        return(
            <div className="w-full rounded-[10px] shadow" style={{borderLeft:`6px solid ${color}`}}>
                <div className="bg-white w-full p-8 rounded-t-[10px] ">
                    <span className="flex items-start justify-between">
                        <span className="flex-1 md:flex items-start lg:gap-x-8 gap-x-4 lg:text-2xl text-lg">
                            <button className="p-4 rounded-md border-none outline-none md:mb-0 mb-4" style={{ backgroundColor: `${bgColor}`}}>
                                <GrAnnounce size={30} style={{color: `${color}`}} />
                            </button>
                            <p className="">Type: {type}</p> <p>Tiem: {time} years ago</p>
                        </span>
                        <HiOutlineHeart  className="text-2xl"/>
                    </span>
                    <div className="md:pl-24">
                        <p className="text-2xl font-semibold md:mt-0 mt-4">{title}</p>
                        <p className="text-xl pt-4">INR {amount} / yearly</p>
                    </div>
                </div>
                <div className="py-8 px-6 flex-1 md:flex justify-between rounded-b-[10px] border border-solid border-[#e2e4e7]" style={{backgroundColor:`${bgColor}`}}>
                    <div className="flex-1 md:flex items-center gap-x-8 text-2xl">
                    <span className="flex items-center gap-x-3">
                        <IoLocationOutline className="text-2xl" style={{color:`${color}`}}/>
                        <p className="text-xl font-light">{country}</p>
                    </span>
                    <span className="flex items-center gap-x-3 lg:py-0 py-4">
                        <LiaDotCircle className="text-2xl" style={{color:`${color}`}}/>
                        <p className="text-xl font-light">{job}</p>
                    </span>
                    </div>
                    <button className="rounded-full bg-white border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn">Apply Now</button>
                </div>
            </div>
        )
    };

    return(
        <div className="bg-[#f5f6fc]">
            <div className="container mx-auto px-6 py-24">
                <div className="md:flex items-center justify-between" >
                    <h1 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">Recommended Jobs</h1>
                    <span className="mg:flex gap-x-4">
                        <button className="rounded-full md:my-0 my-4 bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">Latest Jobs</button>
                        <button className="rounded-full bg-transparent border border-solid border-[#e2e4e7] text-lg text-black font-bold px-8 py-3 outline-none shadow hoverBtn">Premium Jobs</button>
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
                    <div className="xl:w-3/5 flex flex-col gap-y-3 xl:mt-0 mt-4">
                        <Recommend amount="350000-400000" bgColor="#f4f4ff" color="#4b4efc" country="India" job="IT" time="0.1" title="Software Development Engineer" type="Full Time"/>
                        <Recommend amount="150000-200000" bgColor="#fbf2f6" color="#b70041" country="India" job="BPO" time="1" title="Tele Caller" type="Part Time"/>
                        <Recommend amount="170000-200000" bgColor="#fffbf2" color="#ffb800" country="India" job="Construction" time="0.4" title="Project Enginner" type="Full Time"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommended_jobs