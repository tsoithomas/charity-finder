import React, { FormEvent } from "react";
import logo from "../assets/react.svg"
import Header from "./Header";


interface SearchProps {
    onSearch: (e: FormEvent<HTMLFormElement>) => void,
    scrollOffset: number
}

const getStyle = (scroll: number, outer: boolean) => {
    let s = "";

    if (outer) {
        if (scroll > 10) {
            s += " bg-amber-50";
        }
        else {
            s = " bg-rose-300";
        }
    }
    else {
        if (scroll > 10) {
            s += " z-50 top-[-5px] sm:top-[10px] right-[-10px] sm:right-0 w-1/3 min-w-[220px]";
        }
        else {
            s = " z-0 top-[80px] sm:top-[112px] right-0 w-full";
        }
    }

    return s
}


const SearchBar = (props: SearchProps) => {
    //console.log(props.scrollOffset);
    return (
        <div className={"h-[58px] transition-all duration-500 " + getStyle(props.scrollOffset, true)}>
        <div className={"transition-all duration-500 fixed " + getStyle(props.scrollOffset, false)}>
            <form className="flex flex-row items-center w-full px-6 py-2" onSubmit={props.onSearch}>   
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-700/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input 
                        type="search" 
                        id="search" 
                        className="block w-full p-2.5 pl-10 text-sm bg-rose-100 text-gray-700 border border-gray-300 rounded-lg" 
                        placeholder="Search" 
                        required />
                    <button type="submit" className="text-white absolute right-2 bottom-[0.4rem] h-7 bg-rose-700 hover:bg-rose-800 font-medium rounded-lg text-sm px-4 py-1">Search</button>
                </div>
            </form>

        </div>
        </div>
    )
};


export default SearchBar;