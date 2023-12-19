import Link from "next/link";
import React from "react";
export default function App(){
  return(
    <div className="lg:w-[700px] max-w-screen-lg mx-auto px-4 lg:px-8">
        <Link href={"/3/2"}>
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
        <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">منصوب</h1>
        <p className="text-[#527853] text-lg">هذه هي أدوات نصب الفعل المضارع</p>
        <div className="flex flex-wrap justify-center lg:mt-10 text-lg lg:text-3xl  lg:space-y-0 lg:space-x-5">
          <p className="text-[#527853]">لام التعليل</p>
          <p className="text-[#527853]">حتى</p>
          <p className="text-[#527853]">كي</p>
          <p className="text-[#527853]">لن</p>

          <p className="text-[#527853]">أن</p>
        </div>
    </div>
  )
}