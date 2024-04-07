import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/1"}>
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
                <h1 className="text-7xl">المبتدأ</h1>
                <br></br>
                <p className="text-[#527853] text-lg">المبتدأ هو أول ركن في الجملة الاسمية</p>
                <br />
                <div className="text-[#527853] text-lg"dir="rtl">
                    <h1 className="text-2xl">الإعراب:</h1>
                    <p>المبتدأ مرفوع دائمُا وعلاماته:</p>
                    <div className=" lg:grid lg:grid-cols-3 mb-5 lg:gap-5 text-lg mt-10">
                        <div className="group mx-auto">
                            <p className="text-orange-500 cursor-pointer">الضمة</p>
                            <div className="p-1 bg-orange-500 rounded hidden group-hover:flex absolute shadow-lg w-[150px] h-[100px] justify-center items-center">
                            <svg className="absolute text-orange-500 h-2 mr-5  right-0 bottom-full rotate-180" x="0px" y="0px" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                            <ul className="text-[#fff]">
                                <li>المفرد</li>
                                <li>جمع التكسير</li>
                                <li>جمع المؤنث السالم</li>
                            </ul>
                            </div>
                        </div>
                        <div className="group mx-auto">
                            <p className="text-orange-500 cursor-pointer">الألف</p>
                            <div className="p-1 bg-orange-500 rounded hidden group-hover:flex absolute shadow-lg w-[150px] h-[100px] justify-center items-center">
                            <svg className="absolute text-orange-500 h-2 mr-5  right-0 bottom-full rotate-180" x="0px" y="0px" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>

                            <ul className="text-[#fff]">
                                <li>المثنى</li>
                                
                            </ul>
                            </div>
                        </div>
                        <div className="group mx-auto">
                            <p className="text-orange-500 cursor-pointer">الواو</p>
                            <div className="p-1 bg-orange-500 rounded hidden group-hover:flex absolute shadow-lg w-[150px] h-[100px] justify-center items-center">
                            <svg className="absolute text-orange-500 h-2 mr-5  right-0 bottom-full rotate-180" x="0px" y="0px" viewBox="0 0 255 255" ><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                            <ul className="text-[#fff]">
                                <li>جمع المذكر السالم</li>
                                <li>أسماء الخمسة</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                        <li>
                            <span className="underline text-orange-500 group cursor-pointer relative">
                                الكتابًُ
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                    مبتدأ مرفوع وعلامة رفعه الضمة
                                </div>
                                </span>
                             شيق</li>
                        <li><span className="underline text-orange-500 relative group cursor-pointer">البناتُ
                        <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                    مبتدأ مرفوع وعلامة رفعه الضمة لأنها جمع مؤنث سالم
                                </div>
                        </span> متفوقات</li>
                        <li><span className="underline text-orange-500 relative group cursor-pointer">الأطفالُ <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                    مبتدأ مرفوع وعلامة رفعه الضمة لأنها جمع تكسير
                                </div></span> يتحدثون</li>
                        <li><span className="underline text-orange-500 group relative cursor-pointer">التفاحتان<div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                    مبتدأ مرفوع وعلامة رفعه الألف لأنها مثنى  
                                </div></span> لذيذتان </li>
                        <li><span className="underline text-orange-500 group relative cursor-pointer">فوك<div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            مبتدأ مرفوع وعلامة رفعه الواو لأنها اسم من الأسماء الخمسة  
                        </div></span> رائحته طيبة </li>
                    </ul>
                </div>

        </div>
    )
}