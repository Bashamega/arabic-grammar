import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/1/2/3"}>
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
                <h1 className="text-7xl">شبه الجملة من ظرف المكان والزمان</h1>
                <br></br>
                <p className="text-[#527853] text-lg">
                ويكون محلّ الخبر هنا مكوّنًا من ظرف زمان أو مكان

                </p>      
                <br />
                    
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                    <li className="list-item-with-space"> العصفور <span className="underline text-orange-500 group cursor-pointer relative ">
                            تحت الشجرة
                            <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                        شبه الجملة المكون من ظرف المكان (تحت)  في محل رفع للمبتدأ الأول (العصفور)
                        </div>
                        </span>
                    </li>

                        <li>الطائرة <span className="underline text-orange-500 relative group cursor-pointer">  بين السحب 
                        <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                        شبه الجملة المكون من ظرف المكان (بين)  في محل رفع للمبتدأ الأول (الطائرة)
                        </div>
                        </span> </li>
                        <li>الدراسة <span className="underline text-orange-500 relative group cursor-pointer">  قبل المساء 
                        <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                        شبه الجملة المكون من ظرف الزمان (قبل)  في محل رفع للمبتدأ الأول (الدراسة)
                        </div>
                        </span> </li>
                        <li>الغداء <span className="underline text-orange-500 relative group cursor-pointer">  بعد الظهر 
                        <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                        شبه الجملة المكون من ظرف المكان (بعد)  في محل رفع للمبتدأ الأول (الغداء)
                        </div>
                        </span> </li>
                    </ul>
                </div>

        </div>
    )
}