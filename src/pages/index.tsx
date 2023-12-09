import React from "react";
import Link from "next/link";
export default function App(){
  return(
    <div className="lg:w-[700px]">
        <h1 className="text-7xl text-center">اختر نوعاً</h1>
        <br />
        <div className="lg:flex  lg:space-x-10 justify-center text-3xl mt-10 p-2">
          <Link href={"1"}>
            <button className=" w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">الحروف</button>
          </Link>
          <Link href={"names"}>
            <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">الأسماء</button>
          </Link>
          <Link href={"verbs"}>
            <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">الأفعال</button>
          </Link>
        </div>

    </div>
      
    
  )
}