import Link from "next/link";
import { useState } from "react";
import React from "react";
export default function App(){
  const [example, setexample] = useState<string>("حروف العطف هي الحروف التي تستخدم لربط الجمل والكلمات مع بعضها")
  return(
   <div className="max-w-screen-lg lg:w-[700px] mx-auto px-4 lg:px-8">
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
        <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">حروف العطف</h1>     
        <div className="flex flex-wrap justify-center lg:mt-10 text-lg lg:text-3xl  lg:space-y-0 lg:space-x-5">
          <p className="hover" onMouseEnter={()=>{setexample('مثال: أكلت التفاحةَ والموزَ')}} onMouseLeave={()=>{setexample('حروف العطف هي الحروف التي تستخدم لربط الجمل والكلمات مع بعضها')}}>و</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: أكلت التفاحةَ ثم الموزَ')}} onMouseLeave={()=>{setexample('حروف العطف هي الحروف التي تستخدم لربط الجمل والكلمات مع بعضها')}}>ثم</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: أكلت التفاحةَ أوالموزَ')}} onMouseLeave={()=>{setexample('حروف العطف هي الحروف التي تستخدم لربط الجمل والكلمات مع بعضها')}}>أو</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: أكلت التفاحةَ فالموزَ')}} onMouseLeave={()=>{setexample('حروف العطف هي الحروف التي تستخدم لربط الجمل والكلمات مع بعضها')}}>فـ</p>
        </div>
        <p className="text-center mt-10 text-lg text-[#EE7214]">{example}</p>
  </div>
  )
}