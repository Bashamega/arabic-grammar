import Link from "next/link";
import { useEffect, useState,} from "react";

export default function App() {
  
  
  

  return (
    <div className="lg:w-[700px] max-w-screen-lg mx-auto px-4 lg:px-8">
      <Link href={"/3/2/1"}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">
        مرفوع
      </h1>
      <p className="text-[#527853] text-lg">الفعل المرفوع هو فعل مضارع معرب مرفوع ليس يكون قبله أداة من أدوات النصب أو الجز</p>
      <div dir="rlt" className="text-[#EE7214] text-lg mt-5 w-full text-right">
        <h1 className="text-2xl" dir="rtl">علمات رفع الفعل المضارع:</h1>
        <p className="text-[#527853]">الضمة الظاهرة، الضمة المقدَّر، وثبوت النون</p>
        <h1 className="text-2xl" dir="rtl">أمثلة:</h1>
        <details dir="rtl">
          <summary>1 – الضمة الظاهرة  </summary>
          <p>
            <span className="text-[#527853]">ُيكتب </span>
             الولد المقال
          </p>
        </details>
        <details dir="rtl">
          <summary>2 – الضمة المقدرة </summary>
          <p>
            <span className="text-[#527853]">يسعى </span>
            الطالب التفوق
          </p>
        </details>
        <details dir="rtl">
          <summary>3 – ثبوت النون</summary>
          <p>
            <span className="text-[#527853]">يكتبان </span>
            الطالبان الواجب
          </p>
        </details>
      </div>
    </div>
  );
}
