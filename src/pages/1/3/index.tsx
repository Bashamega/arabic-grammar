import Link from "next/link";
import { useState } from "react";
import React from "react";
export default function App(){
  const [example, setexample] = useState<string>("هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")
  return(
    <div className="lg:w-[700px] max-w-screen-lg mx-auto px-4 lg:px-8">
        <Link href={"/1"}>
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
        <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">حروف الناسخة</h1>     
        <div className="flex flex-wrap justify-center lg:mt-10 text-lg lg:text-3xl  lg:space-y-0 lg:space-x-5">
          <p className="hover w-full" onMouseEnter={()=>{setexample('مثال: إنَّ الطالبَ مجتهدّ')}} onMouseLeave={()=>{setexample("هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>إنَّ</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: أنّ الظالمَ دامسُ')}} onMouseLeave={()=>{setexample("هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>أنَّ</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: كأن القمرَ مصباحُ')}} onMouseLeave={()=>{setexample("هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>كأن</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: الطقسُ بارد لكن النارَ قريبةُ')}} onMouseLeave={()=>{setexample("هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>لكنّ</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: ليت الاختيارَ سهلُ')}} onMouseLeave={()=>{setexample("هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>ليت</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: لعلّ النصرَ قريبٌ')}} onMouseLeave={()=>{setexample("هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>لعل</p>

        </div>
        <p className="text-center mt-10 text-lg text-[#EE7214]">{example}</p>
  </div>
  )
}