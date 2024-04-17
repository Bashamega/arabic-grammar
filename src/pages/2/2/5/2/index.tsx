import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/2/5"}>
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
                <h1 className="text-7xl">التمييز الملحوظ</h1>
                <br></br>
                <p className="text-[#527853] text-lg">التمييز الملحوظ هو ما يوضح معنى مجملا ، أو ما يُفهم من الجملة دون أن يذكر فيها ، ويسمى كذلك بتمييز النسبة أو الجملة</p>
                <br />
                <div className="text-[#527853] text-lg"dir="rtl">
                    <h1 className="text-2xl">الإعراب:</h1>
                    <p>تمييز منصوب دائمُا وعلامته:</p>
                    <div className=" lg:grid lg:grid-cols-1 mb-5 lg:gap-5 text-lg mt-10">
                        <div className="group mx-auto">
                            <p className="text-orange-500 ">الفتحة</p>
                            
                        </div>
                        
                    </div>
                </div>
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                        <li>
                            طاب المكان <span className="underline text-orange-500 group cursor-pointer relative">
                                 هواءً  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                تمييز منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span>
                             </li>
                             <li>
                            فاض القلب <span className="underline text-orange-500 group cursor-pointer relative">
                                 سرورًا  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                تمييز منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span>
                             </li>
                             <li>
                            العقاد كن من أفضل الناس <span className="underline text-orange-500 group cursor-pointer relative">
                                 أدبًا  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                تمييز منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span>
                             </li>
                        
                    </ul>
                </div>

        </div>
    )
}