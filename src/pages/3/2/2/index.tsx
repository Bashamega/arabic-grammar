import Link from "next/link";
import React from "react";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
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
        <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">مبني</h1>
        <p className="text-[#527853] text-lg">يُبنى الفعل المضارع في حالتين، الحالة الأولى أن تتصل به نون النسوة، والحالة الثانية أن تتصل به نون التوكيد اتصالًا مباشرًا</p>
        <div dir="rlt" className="text-[#527853] text-lg mt-5 w-full text-right">
          <h2 className="text-2xl">:أمثلة</h2>
          <p dir="rtl" >نون النسوة: (وهي نون مفتوحة ويكون الفعل في هذه الحالة مبنيًا على <span className=" text-red-500 font-bold italic mr-2"> السكون  </span>)</p>
          <p>أنتن <span className="text-[#EE7214]">تَأكُلْنَ</span> الكعك</p>
          <p dir="rtl" className="mr-10 flex items-center"><MdSubdirectoryArrowLeft/> فعل مضارع مبني على           <span className=" text-red-500 font-bold italic mr-2"> السكون  </span>
</p>
          <p dir="rtl">نون التوكيد: (وهي نون مشددة ويكون الفعل في هذه الحالة مبنيًا على <span className=" text-red-500 font-bold italic mr-2"> الفتحة  </span>)</p>
          <p>والله <span className="text-[#EE7214]">لتأكلنَّ</span> الكعك</p>
          <p dir="rtl" className="mr-12 flex items-center"><MdSubdirectoryArrowLeft/> فعل مضارع مبني على           <span className=" text-red-500 font-bold italic mr-2"> الفتحة  </span>
</p>
        </div>
    </div>
  )
}