import Link from "next/link";
import { useEffect, useState,} from "react";

export default function App() {
  
  
  

  return (
    <div className="lg:w-[700px] max-w-screen-lg mx-auto px-4 lg:px-8">
      <Link href={"/3"}>
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
        أمر
      </h1>
      <p className="text-[#527853] text-lg">الفعل الأمر هو الصيغة الخاصة من الفعل التي تُستخدم لطلب أو أمر شخص ما بالقيام بشيء معين. يُستخدم الفعل الأمر في المصدر المباشر دون أن يتم تصريفه حسب الزمن أو الضمير، وعادةً يستخدم مع الضمائر المختصرة التي تُضاف إليه لتحديد الشخص الذي يتم مخاطبته.</p>
      <div dir="rlt" className="text-[#EE7214] text-lg mt-5 w-full text-right">
        <ol className=" list-disc" dir="rtl">
          <li>يُبنى فعل الأمر على السكون (إذا كان الفعل صحيحاً أو اتصلت به نون النسوة).</li>
          <li>حذف حرف العلة (إذا كان الفعل معتلاً بالألف أو بالواو أو بالياء).</li>
          <li>حذف النون (إذا اتصلت به واو الجماعة أو ياء المخاطبة أو ألف الاثنين).</li>
          <li>الفتح (إذا اتصلت به نون التوكيد الثقيلة أو الخفيفة)</li>
        </ol>
      </div>
    </div>
  );
}
