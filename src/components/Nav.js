// imports
import React from 'react' 
import { NavLink } from 'react-router-dom' 

// function component
const Nav = () => {

    // return
    return (
        <div>
            <NavLink to={"/nav"}>
            <div>
            <h1>Primo Pizza</h1>
            </div>
            
            <div>
            <NavLink to={"/"}>
                <div><button>Home</button></div>
                </NavLink>
                <div><button>Help</button></div>
            </div>
            </NavLink>

            <div>
                <NavLink to={"/"}>
                    <h1>Get to Home Page From Nav</h1>
                </NavLink>
                    
           </div>
        </div>
    )
}

export default Nav