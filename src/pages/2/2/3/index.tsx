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
                <h1 className="text-7xl">الظرف</h1>
                <h1 className="text-5xl">(المفعول فيه)</h1>

                <br></br>
                <p className="text-[#527853] text-lg">المفعول فيه هو اسمٌ منصوب على تقدير "في" ويدلّ على زمان وقوع الفعل أو مكان وقوع الفعل</p>
                <br />
                <div className="text-[#527853] text-lg"dir="rtl">
                    <h1 className="text-2xl">الإعراب:</h1>
                    <p>المفعول فيه منصوب دائمُا وعلاماته:</p>
                    <div className=" lg:grid lg:grid-cols-1 mb-5 lg:gap-5 text-lg mt-10">
                        <div className="group mx-auto">
                            <p className="text-orange-500 cursor-pointer">الفتحة</p>
                            <div className="p-1 bg-orange-500 rounded hidden group-hover:flex absolute shadow-lg w-[150px] h-[100px] justify-center items-center">
                            <svg className="absolute text-orange-500 h-2 mr-5  right-0 bottom-full rotate-180" x="0px" y="0px" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                            <ul className="text-[#fff]">
                                <li>المفرد</li>
                                <li>جمع التكسير</li>
                            </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                        <li>
                            شرب الولد الماء <span className="underline text-orange-500 group cursor-pointer relative">
                                 صباحًا  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                مفعول فيه منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span>
                             </li>
                             <li>
                            وضعت الورقة  <span className="underline text-orange-500 group cursor-pointer relative">
                                 بينَ  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                مفعول فيه منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span> الكتب
                             </li>
                             
                             <li>
                            توقد المصابيح <span className="underline text-orange-500 group cursor-pointer relative">
                                 ليلًا  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                مفعول فيه منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span>
                             </li>
                             <li>
                            استيقظت <span className="underline text-orange-500 group cursor-pointer relative">
                                 بين  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                مفعول فيه منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span> الساعة السادسة والسابعة
                             </li>
                             <li>
                            نام العضفور <span className="underline text-orange-500 group cursor-pointer relative">
                                 فوق  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                مفعول فيه منصوب بالفتحة الظاهرة في آخره  
                                </div>
                                </span> الشجرة 
                             </li>
                        
                    </ul>
                </div>

        </div>
    )
}