import React, { useState } from "react";
import locationIcon from "../assets/location.svg"
import { Link } from "react-router-dom";
import axios from "axios";

interface CharityListProp {
    charities: Charity[]
}


const CharityList = (props: CharityListProp) => {    
    return (
        
        <div className="w-full bg-amber-50 grow p-4">
            <div className="max-w-4xl mx-auto flex flex-row flex-wrap items-stretch">

            {
                props.charities.map((item) => {
                    return (
                        <Link to={"/charity/"+item.ein} className="inline-block w-full sm:w-[18.5rem] mb-6" key={item.ein}>
                            <section className="border border-gray-400 h-full bg-white hover:bg-amber-200 transition-all rounded-lg flex flex-col leading-normal shadow m-2 overflow-hidden">
                                <div className="block w-full h-28 bg-gray-200 overflow-hidden border-b">
                                <img src={item.coverImageUrl} className="object-cover w-full h-28" />
                                </div>
                                <div className="px-6 py-4 ">
                                <h3 className="font-bold overflow-hidden text-md text-gray-700">{item.name}</h3>
                                <div className="overflow-hidden flex flex-row">
                                    <span><img src={locationIcon} className="h-4 mt-0.5 me-1" /></span>
                                    <address className="text-gray-700/50 text-sm">{item.location}</address>
                                </div>
                                {
                                    item.description &&
                                    <div className="overflow-hidden text-gray-700 mt-2 text-sm">{item.description}</div>
                                }
                                </div>
                            </section>
                        </Link>
                    )

                })

            }

            </div>
        </div>
    )
};


export default CharityList;