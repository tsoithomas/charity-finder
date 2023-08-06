import React from "react";
import logo from "../assets/react.svg"

const Search = () => {

    return (
        <div className="drop-shadow">
            <header className="w-full flex flex-row bg-red-800 text-white px-5 py-4 text-gray-300 place-items-center">
                <img src={logo} className="h-12" />
                <h1 className="overflow-hidden transition-all whitespace-nowrap text-2xl sm:text-3xl font-bold ms-4 grow">Charity Finder</h1>
            </header>

            <div className="flex flex-row items-center w-full bg-red-300 px-4 py-2">
                <span className="pe-4 font-bold text-orange-800">Search</span>
                <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 bg-red-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-x-8 hover:border-orange-800 transition-all" 
                    id="search" 
                    type="text" 
                    placeholder="Enter a keyword"
                    />
            </div>

        </div>
    )
};


export default Search;