import { useState } from "react"

function Navbar(){
    const [dropdown, setDropdown] = useState(false);

    const showDeopdown =() =>{
        setDropdown(!dropdown);
    }
    return(
        <nav>
            <div>
                <div>
                    <div>
                        <div>
                            <span>
                                <button>jo</button>
                                <p>bline</p>
                            </span>
                        </div>
                    </div>
                    <ul>
                        <a href="#">Find Jobs</a>
                        <a href="#">People</a>
                        <a href="#">Hiring Sites</a>
                        <a href="#">Resume</a>
                    </ul>
                    <div>
                        <button>Sign Up</button>
                        <button>Sign In</button>
                    </div>
                    {dropdown ? (
                        <div>
                            
                        </div>
                    ) : () }
                </div>
            </div>
        </nav>
    )
}

export default Navbar