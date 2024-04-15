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
                <h1 className="text-7xl">المفعول لأجله</h1>
                <br></br>
                <p className="text-[#527853] text-lg">يُعرّف المفعول لأجله أو ما يسمّى بالمفعول له عند أهل الّلغة أنه المصدرُ المنصوب الذي يُعلِّلُ حدثًا مُعينًا مع مُشاركته لزمانه وفاعلِه</p>
                <br />
                <div className="text-[#527853] text-lg"dir="rtl">
                    <h1 className="text-2xl">الإعراب:</h1>
                    <p>المفعول لأجله منصوب دائمُا وعلاماته:</p>
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
                            استبسل الأبطال <span className="underline text-orange-500 group cursor-pointer relative">
                                 دفاعًا  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                مفعول لأجله منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span> عن وطنهم
                             </li>
                        <li>زيد مسرع  <span className="underline text-orange-500 relative group cursor-pointer">خوفًا
                        <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                        مفعول لأجله منصوب بالفتحة الظاهرة في آخره .   
                                </div>
                        </span> من الكلب</li>
                        <li>قمت  <span className="underline text-orange-500 relative group cursor-pointer">إجلالًا <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                        مفعول لأجله منصوب بالفتحة الظاهرة في آخره 
                        </div> </span> لأستاذي</li>
                        <li>يجتهد زيد <span className="underline text-orange-500 group relative cursor-pointer">طلبًا<div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                        مفعول لأجله منصوب بالفتحة الظاهرة في آخره وهو مضاف 
                            </div> </span> التفوق</li>
                        
                    </ul>
                </div>

        </div>
    )
}