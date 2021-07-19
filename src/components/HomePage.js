import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function HomePage () {
    return (
        <>
        <div className="Home">
            {/* A homepage that has a "/" route */}
            <NavLink to={"/nav"}>
                <h1>Home Page</h1>        
            </NavLink>

            {/* <Link to={"/nav"}>

            </Link> */}

            <Link to={"/pizza"}>
                <button>Build Pizza</button>
            </Link>
        </div>
        </>
    )
}