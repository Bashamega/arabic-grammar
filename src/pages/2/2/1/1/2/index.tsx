import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/2/1/1"}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M15 18L9 12L15 6"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    />
                </svg>
                </Link>
                <h1 className="text-7xl">المفعول به ضمير متصل</h1>
                <br></br>
                <p className="text-[#527853] text-lg">هو ضمير يتصل بالفعل يكون في محل نصب مفعول به ويتضمن</p>
                <br />
                
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                        <li>
                             أعجبن<span className="underline text-orange-500 group cursor-pointer relative">
                                 ي  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                ضمير مبني في محل نصب مفعول به 
                                </div>
                                </span> الكتب
                             </li>
                        <li>أسعد<span className="underline text-orange-500 relative group cursor-pointer">كم
                        <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                        ضمير مخاطب مبني في محل نصب مفعول به  
                                </div>
                        </span> الموضوع</li>
                        <li>زار<span className="underline text-orange-500 relative group cursor-pointer">ه <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                        ضمير غائب مبني في محل نصب مفعول به 
                        </div></span> أحمد اليوم</li>
                        
                        
                    </ul>
                </div>

        </div>
    )
}