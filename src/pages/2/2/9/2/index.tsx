import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/2/9"}>
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
                <h1 className="text-7xl">المنادى مبني</h1>
                <br></br>
                <p className="text-[#527853] text-lg">المنادى يأتي بعد أداة النداء</p>
                <br />
                
                <div className="text-[#527853] text-lg "dir="rtl">
                    
                    <h1 className="text-2xl">أنواع:</h1>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <li>النطرة المقصودة</li>
                        <li>العلم المفرد</li>
                        <li>نداء فيه ألـ</li>
                    </ul>
                    <div className="text-right">
                        <h1 className="text-2xl">أمثلة:</h1>
                        <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                        <li>
                            يا <span className="underline text-orange-500 group cursor-pointer relative">
                                أمير  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                 النوع: النكرة المقصودة
                                 <br></br>
                                 الإعراب: منادى مبني على الرفع في محل نصب المنادى
                                </div>
                                </span>، كن عادلًا
                             </li>
                              
                             <li>
                            يا <span className="underline text-orange-500 group cursor-pointer relative">
                                أمير  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                 النوع: العلم المفرد
                                 <br></br>
                                 الإعراب: منادى مبني على الرفع في محل نصب المنادى
                                </div>
                                </span>، ذاكر دروسك
                             </li>
                             <li>
                            يا (هذا، أيها) <span className="underline text-orange-500 group cursor-pointer relative">
                                الأمير  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                 النوع: نداء فيه ألأ
                                 <br></br>
                                 الإعراب: منادى مبني على الرفع في محل نصب المنادى
                                </div>
                                </span>، كن عادلًا
                             </li>
                            

                        
                    </ul>
                    </div>
                </div>

        </div>
    )
}