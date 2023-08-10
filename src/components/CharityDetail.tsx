import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { useParams } from "react-router-dom";
import locationIcon from "../assets/location.svg"
import faveIcon from "../assets/fave.svg"

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
                            <div className="flex flex-col grow">
                                <h3 className="font-bold overflow-hidden text-md text-gray-700">{charity.name}</h3>
                                <div className="overflow-hidden flex flex-row">
                                    <span><img src={locationIcon} className="h-4 mt-0.5 me-1" /></span>
                                    <address className="text-gray-700/50 text-sm">{charity.locationAddress}</address>
                                </div>
                            </div>
                            <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-8 fill-black hover:fill-red-500"><path d="m14.123 19.336c-.468.453-.944.913-1.426 1.381-.194.189-.446.283-.697.283s-.503-.094-.697-.283c-4.958-4.813-9.303-8.815-9.303-12.54 0-5.659 7.376-6.978 10-2.461 2.604-4.483 10-3.217 10 2.461 0 .68-.144 1.369-.41 2.07-1.061-1.02-2.503-1.648-4.09-1.648-3.256 0-5.9 2.644-5.9 5.9 0 2 .998 3.77 2.523 4.837zm3.378-9.336c2.58 0 4.499 2.107 4.499 4.499 0 2.58-2.105 4.499-4.499 4.499-2.586 0-4.5-2.112-4.5-4.499 0-2.406 1.934-4.499 4.5-4.499zm.5 3.999v-1.5c0-.265-.235-.5-.5-.5-.266 0-.5.235-.5.5v1.5h-1.5c-.266 0-.5.235-.5.5s.234.5.5.5h1.5v1.5c0 .265.234.5.5.5.265 0 .5-.235.5-.5v-1.5h1.499c.266 0 .5-.235.5-.5s-.234-.5-.5-.5z" fillRule="nonzero"/></svg>
                        </div>
                        {
                            charity.description &&
                            <div className="overflow-hidden text-gray-700 mt-2 text-sm">{
                                charity.descriptionLong?.split("\n").map((line) => {
                                return <p className="mt-4 text-justify" key={line}>{line}</p>})
                                
                                }</div>
                        }
                    </div>
                </section>
            </div>

        </div>

    )
};


export default CharityDetail;