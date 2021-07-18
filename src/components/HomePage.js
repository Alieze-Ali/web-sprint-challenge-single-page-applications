import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function HomePage () {
    return (
        <>
        <div className="Home">
            <NavLink to={"/"}>
                <h1>Home Page</h1>
                   
            </NavLink>

            <Link to={"/pizza"}>
                <h2>Click Here to Build Your Primo Pizza!</h2>
                <div>
                        <button>Build Pizza</button>
                    </div>
            </Link>
        </div>
        </>
    )
}