import React, { FormEvent } from "react";
import logo from "../assets/react.svg"
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className="sticky top-0 z-50">
            <header className="w-full flex flex-row bg-rose-900 text-white px-5 py-4 text-gray-300 place-items-center">
                <img src={logo} className="h-12 logo" />
                <h1 className="overflow-hidden transition-all whitespace-nowrap text-2xl sm:text-3xl font-bold ms-4 grow">
                    <Link to={`/`}>Charity Finder</Link>
                </h1>
            </header>

            <nav className="w-full flex flex-row bg-black text-white px-5 py-1 text-gray-300 place-items-center">
                <div><NavLink to={`/`} className={({ isActive }) => ("font-bold text-rose-200 hover:bg-rose-500 hover:text-white px-4 py-2 me-3 transition-all rounded-xl " + (isActive && " bg-black"))}>Search</NavLink></div>
                <div><NavLink to={`/favorites`} className={({ isActive }) => ("font-bold text-rose-200 hover:bg-rose-500 hover:text-white px-4 py-2 me-3 transition-all rounded-xl " + (isActive && " bg-black"))}>Favorite Charities</NavLink></div>
            </nav>

        </div>
    )
};

export default Header;