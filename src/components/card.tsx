import Link from "next/link";
import React from "react";
export function Card({name, link}: {name: string, link: string}){
    return(
        <div className="relative text-2xl flex  max-w-xs md:max-w-none  flex-col rounded-xl bg-[#F7B787] bg-clip-border text-[#527853] shadow-md">
            <div className="relative mx-4 mt-4 h-[300px] overflow-hidden rounded-xl bg-[#F7B787] bg-clip-border text-[#527853]">
                <iframe src={link} width="100%" height="100%" className=" overflow-hidden"></iframe>
            </div>
            <div className="p-6">
                <p className="block text-2xl leading-relaxed text-blue-gray-900 antialiased text-right" dir="rtl">
                    {name}
                </p>
                
            </div>
            <div className="p-6 pt-0">
                
                <Link href={link} target="_blank"> 
                    <button
                    className="block w-full  text-lg select-none rounded-lg hover:text-white hover:bg-[#EE7214] py-3 px-6 text-center align-middle font-sans  font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    >               
                        تحميل
                    </button>
                </Link>
            </div>
        </div>
    )
}