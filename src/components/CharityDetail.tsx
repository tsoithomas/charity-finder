import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { useParams } from "react-router-dom";
import locationIcon from "../assets/location.svg"

const apiKey = "pk_live_a3676b9cf7a43e56d90f4f562f4bea7b";
const detailUri = "https://partners.every.org/v0.2/nonprofit/"

const CharityDetail = () => {
    const { id } = useParams()
    const [charity, setCharity] = useState<Charity>({
        ein: "",
        name: "",
        description: "",
        location: "",
        profileUrl: "",
    });
    useEffect(()=>{fetchDetail();}, [])
        
    const fetchDetail = async () => {
        try {
            const data = await axios.get(detailUri + id + "?apiKey=" + apiKey);
    
            const org = data.data.data.nonprofit;

            const record = {
                ein: org.ein,
                name: org.name,
                description: org.description,
                descriptionLong: org.descriptionLong,
                locationAddress: org.locationAddress,
                logoUrl: org.logoUrl,
                profileUrl: org.profileUrl,
                coverImageUrl: org.coverImageUrl,
                websiteUrl: org.websiteUrl,
            }
            setCharity(record);



            console.log(org);
    
        }
        catch (error) {
            console.log(error)
        }
        }
    
    

    return (
        <div className="flex flex-col min-h-screen bg-amber-50">
            <Header/>

            <div className="block w-full max-w-3xl mx-auto grow rounded-xl my-4">

                <section className="border border-gray-400 rounded-xl overflow-hidden shadow bg-white transition-all rounded-lg m-2 flex flex-col justify-between leading-normal">
                    <img src={charity.coverImageUrl} />

                    <div className="m-2 px-6 py-4">
                        <div className="flex flex-row">
                            <img src={charity.logoUrl} className="shadow me-4 border rounded" />
                            <div className="flex flex-col">
                                <h3 className="font-bold overflow-hidden text-md text-gray-700">{charity.name}</h3>
                                <div className="overflow-hidden flex flex-row">
                                    <span><img src={locationIcon} className="h-4 mt-0.5 me-1" /></span>
                                    <address className="text-gray-700/50 text-sm">{charity.locationAddress}</address>
                                </div>
                            </div>
                        </div>
                        {
                            charity.description &&
                            <div className="overflow-hidden text-gray-700 mt-2 text-sm">{
                                charity.descriptionLong?.split("\n").map((line) => {
                                return <p className="mt-4 text-justify">{line}</p>})
                                
                                }</div>
                        }
                    </div>
                </section>
            </div>

        </div>

    )
};


export default CharityDetail;