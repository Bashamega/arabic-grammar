import React from "react";
import Link from "next/link";
export default function App(){
  return(
   <div className="lg:w-[700px]">
      <Link href={"/"}>
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
        <h1 className="text-7xl">اختر نوعاً</h1>
        <br />
        <div className="lg:flex lg:space-x-10 text-3xl mt-10">
          <Link href={"1/1"}>
            <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">حروف الجر</button>
          </Link>
          <Link href={"1/2"}>
            <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">حروف العطف</button>
          </Link>
          <Link href={"1/3"}>
            <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">الحروف الناسخة</button>
          </Link>
        </div>
        

  </div>
  )
}