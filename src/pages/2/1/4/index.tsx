import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px] relative">
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
                <h1 className="text-7xl">نائب فاعل</h1>
                <br></br>
                <p className="text-[#527853] text-lg">نائب الفاعل هو من الأسماء المرفوعة في اللغة العربية، وهو يحل محل الفاعل ويسبقه فعل مبني للمجهول</p>
                <br />
                <div className="text-[#527853] text-lg"dir="rtl">
                    <h1 className="text-2xl">الإعراب:</h1>
                    <p>تائب فاعل مرفوع دائمُا وعلاماته:</p>
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
                                <li>اسم من الأسماء الخمسة</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex " dir="rtl">
                <div className="text-[#527853] text-lg text-right w-1/2"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                        <li>
                            عُوقب  <span className="underline text-orange-500 group cursor-pointer relative">
                                 المهملُ  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                نائب فاعل مرفوع وعلامة رفعه الضمة  
                                
                                </div>
                                </span>
                        </li>
                        <li>
                            قيل  <span className="underline text-orange-500 group cursor-pointer relative">
                                 الحقٌ  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                نائب فاعل مرفوع وعلامة رفعه الضمة 
                                
                                </div>
                                </span>
                        </li>
                        <li>
                            صينت  <span className="underline text-orange-500 group cursor-pointer relative">
                                 الأمانةُ  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                نائب فاعل مرفوع وعلامة رفعه الضمة 
                                
                                </div>
                                </span>
                        </li>
                        <li>
                            كُوفئ  <span className="underline text-orange-500 group cursor-pointer relative">
                                 الفائزون  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                نائب فاعل مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم                                
                                </div>
                                </span>
                        </li>
                        <li>ضُرب <span className="underline text-orange-500 group relative cursor-pointer">أخوك<div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            نائب فاعل مرفوع وعلامة رفعه الواو لأنها اسم من الأسماء الخمسة  
                        </div></span></li>
                    </ul>
                </div>
                <div className=" text-[#fff] bg-orange-500 p-2 text-right rounded w-2/3 " dir="rtl">
                    <h1 className=" text-lg text-center">ملاحظات</h1>
                    <p>عند بناء الفعل للمجهول يُراعى ما يلي:</p>
         
                        <li>الفعل الماضي الصحيح يُضم أوله ويُكسر قبل آخره، والمعتل الوسط مثل قال “يُقلب حرف الألف إلى ياء” فتصبح قيل ومثل “كافأ” تُقلب الألف إلى واو فتصبح كُوفئ.</li>
                        <li>الفعل المضارع يُضم أوله ويُفتح ما قبل آخره فإن كان الحرف الثالث واو مثل “يقول” فتُقلب الواو إلى ألف فتصبح “يُقال”</li>
                    
                    
                </div>
                </div>

        </div>
    )
}