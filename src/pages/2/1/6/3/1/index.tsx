import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/1/6/3"}>
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
                <h1 className="text-7xl">شبه الجملة من الجار والمجرور</h1>
                <br></br>
                <p className="text-[#527853] text-lg">
                يقع خبر إن في هذا النوع محلّ حرف الجر والاسم المجرور بعده
                </p>      
                <br />
                    
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                    <li className="list-item-with-space">إن المعلم <span className="underline text-orange-500 group cursor-pointer relative ">
                            في الصف 
                            <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            شبه الجملة المكون من حرف الجر (في) والاسم المجرور (الصف) في محل رفع للمبتدأ الأول (المعلم)
                            </div>
                        </span>
                    </li>

                        <li>إن الطالب <span className="underline text-orange-500 relative group cursor-pointer">  في المنزل
                        <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            شبه الجملة المكون من حرف الجر (في) والاسم المجرور (المنزل) في محل رفع للمبتدأ الأول (الطالب)
                            </div>
                        </span> </li>
                        <li>إن الطائر <span className="underline text-orange-500 relative group cursor-pointer">  على الشجرة
                        <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            شبه الجملة المكون من حرف الجر (على) والاسم المجرور (الشجرة) في محل رفع للمبتدأ الأول (الطائر)
                            </div>
                        </span> </li>
                    </ul>
                </div>

        </div>
    )
}