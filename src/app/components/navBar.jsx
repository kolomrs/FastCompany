import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                L
                <Link className="nav-Link active" aria-current="page" href="#">
                    Main
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-Link" href="#">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-Link" href="#">
                    Users
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;
