import Link from "next/link";
import React from "react";
export default function App(){

  return(
    <div className="lg:w-[700px] max-w-screen-lg mx-auto px-4 lg:px-8">
        <Link href={"/2"}>
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
        <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">أسماء الإشارة</h1>     
        <div className="flex flex-wrap justify-center lg:mt-10 text-lg lg:text-3xl  lg:space-y-0 lg:space-x-5">
          <p className="hover2">هذا</p>
          <p className="hover2">هذه</p>
          <p className="hover2">هذان</p>
          <p className="hover2">هتان</p>
          <p className="hover2">هؤلاء</p>

        </div>
        <p>يُعرف اسم الإشارة بأنه اسم يُعيَّنُ مدلوله تعيينًا مقرونًا بإشارة حسيّة</p>
    </div>
  )
}