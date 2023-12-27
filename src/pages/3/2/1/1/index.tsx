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
      <p className="text-[#527853] text-lg">يرفع الفعل المضارع إذا لم يسبقه ناصب ولا جازم</p>
      <div dir="rlt" className="text-[#EE7214] text-lg mt-5 w-full text-right">
        <h1 className="text-2xl" dir="rtl">علامات رفع الفعل المضارع:</h1>
        <p className="text-[#527853]">الضمة الظاهرة، أو الضمة المقدَّر، أو ثبوت النون</p>
        <h1 className="text-2xl" dir="rtl">أمثلة:</h1>
        <details dir="rtl">
          <summary>1 – الضمة الظاهرة  (إذا كان الفعل صحيح الآخر)</summary>
          <p>
            <span className="text-[#527853]">يكتبُ </span>
             الولد المقال
          </p>
        </details>
        <details dir="rtl">
          <summary>2 – الضمة المقدرة (إذا كان الفعل معتل الآخر)</summary>
          <p>
            <span className="text-[#527853]">يسعى </span>
            الطالب إلى التفوق
          </p>
        </details>
        <details dir="rtl">
          <summary>3 – ثبوت النون (إذا كان الفعل فعلًا من الأفعال الخمسة )</summary>
          <p>
            الطالبان 
            <span className="text-[#527853]"> يكتبان </span>
             الواجب
          </p>
        </details>
      </div>
      <div className=" text-right bg-slate-200 mt-2 p-2 border-1">
        <span dir="rtl">*  الأفعال الخمسة: الأفعال الخمسة هي كل فعل مضارع اتصلت به   </span>
        <p>ألف الاثنين: يكتبان</p>
        <p>واو الجماعة: يكتبون </p>
        <p>ياء المخاطبة المؤنثة: تكتبين</p>
      </div>
      
      <p></p>
    </div>
  );
}
