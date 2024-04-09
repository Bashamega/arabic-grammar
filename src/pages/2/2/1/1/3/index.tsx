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
                <h1 className="text-7xl">مفعول به ضمير منفصل</h1>
                <br></br>
                <p className="text-[#527853] text-lg">تشمل الضمائر المنفصلة التي يمكن نصبها كمفعول به ما يلي</p>
                <br />
                
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                        <li>إياي للمتكلم، إيانا للجمع (أي المتكلمين)</li>
                        <li> إياكِ للمخاطبة وإياكَ للمخاطب</li>
                        <li>إياكما للمخاطبات المثنى مذكر أو مؤنث، إياكم للجمع، إياكن لجمع المؤنث</li>
                        <li>إياها للغائبة وإياهن للغائبات وإياهم للغائبين المذكر</li>
                        
                        
                    </ul>
                    <h1 className="text-2xl">مثال:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                        <li>
                             <span className="underline text-orange-500 group cursor-pointer relative">
                                 أياها  
                                <div className=" whitespace-nowrap white  opacity-0 w-auto overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                                ضمير منفصل في محل نصب مفعول به 
                                </div>
                                </span> تحترم الناس
                             </li>
                        
                        
                        
                    </ul>
                </div>

        </div>
    )
}