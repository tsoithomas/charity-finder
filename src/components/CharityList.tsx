import React from "react";
import locationIcon from "../assets/location.svg"

interface CharityListProp {
    charities: Charity[]
}



const CharityList = (props: CharityListProp) => {

    return (
        <div className="w-full bg-amber-50 grow p-4">

            {
                props.charities.map((item) => {
                    return (
                        <a className="block w-full max-w-3xl mx-auto" href={"/charity/"+item.ein}>
                            <section className="border border-gray-400 bg-white hover:bg-amber-200 transition-all rounded-lg m-2 px-6 py-4 flex flex-col justify-between leading-normal">
                                <h3 className="font-bold overflow-hidden text-md text-gray-700">{item.name}</h3>
                                <div className="overflow-hidden flex flex-row">
                                    <span><img src={locationIcon} className="h-4 mt-1 me-1" /></span>
                                    <address className="text-gray-400">{item.location}</address>
                                </div>
                                {
                                    item.description &&
                                    <div className="overflow-hidden text-gray-700 mt-2 text-sm">{item.description}</div>
                                }
                            </section>
                        </a>
                    )

                })

            }



        </div>
    )
};


export default CharityList;