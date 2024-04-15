import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/2"}>
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
                <h1 className="text-7xl">المفعول مطلق</h1>
                <br></br>
                <p className="text-[#527853] text-lg">المفعول المطلق اسم – نكرة – مصدر – منصوب موافق للفعل في لفظه ويجيء بعد الفعل لتأكيده ، أو لبيان نوعه أو عدده</p>
                <br />
                <div className="text-[#527853] text-lg"dir="rtl">
                    <h1 className="text-2xl">الإعراب:</h1>
                    <p>المفعول مطلق منصوب دائمُا وعلاماته:</p>
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
                            خطف الثعلب الدجاجة <span className="underline text-orange-500 group cursor-pointer relative">
                                 خطفًا  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                مفعول مطلق منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span>
                             </li>
                             <li>
                            شربت الماء  <span className="underline text-orange-500 group cursor-pointer relative">
                                 شربا  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                مفعول مطلق منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span> الكتب
                             </li>
                             <li>
                            جرى خالد <span className="underline text-orange-500 group cursor-pointer relative">
                                 جريا  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                مفعول مطلق منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span>
                             </li>
                             
                        
                    </ul>
                </div>

        </div>
    )
}