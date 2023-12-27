import Link from "next/link";
import { useEffect, useState,} from "react";
import { FaArrowLeft } from "react-icons/fa";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
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
      <br />
      <p className="text-[#527853] text-lg">الفعل الأمر مبني دائمًا، على ما يجزم به مضارعه</p>
      <div dir="rlt" className="text-[#EE7214] text-lg mt-5 w-full text-right">
        <h1 className="text-2xl" dir="rtl">أمثلة:</h1>
        <details dir="rtl">
          <summary>يُبنى فعل الأمر على السكون.</summary>
          <p className=" mr-6 flex items-center w-screen">
          <span className="text-[#527853] ml-2">تقربْ</span> من أصدقائك. (المضارع المجزم: لم يتقربْ<FaArrowLeft /> فعل مضارع مجزوم وعلامة جزمه           <span className=" text-red-500 font-bold italic mr-2"> السكون  </span>
)
          </p>
          <p className=" mr-7 items-center flex"><MdSubdirectoryArrowLeft /> 
           فعل أمر مبني على  
          <span className=" text-red-500 font-bold italic mr-2"> السكون  </span>
          </p>

        </details>
        <details dir="rtl">
          <summary>يُبني الفعل الذي أخره حرف العلة على حذف حرف العلة.</summary>
          <p className="mr-10">
          <span className="text-[#527853]">اسعَ</span> إلى الخير 
          </p>
        </details>
        <details dir="rtl">
          <summary>حذف النون.</summary>
          <p className="mr-10">
          <span className="text-[#527853]">ارجعوا</span> إلى أماكنكم
          </p>
          <p className="mr-10">
          <span className="text-[#527853]">اجلسي</span> مكانكِ 
          </p>
          <p className="mr-10">
          <span className="text-[#527853]">اتصلا</span> بأخيكم
          </p>
        </details>

      </div>
    </div>
  );
}
