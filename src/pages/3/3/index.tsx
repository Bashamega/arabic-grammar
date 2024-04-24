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
      ماضٍ
      </h1>
      <p className="text-[#527853] text-lg">الفعل الماضي هو الفعل الذي يدل على حدث وقع وانقطع قبلَ زمنِ التكلم</p>
      <div dir="rlt" className="text-[#527853] text-lg mt-5 w-full text-right">
        <h1 className="text-2xl">إعراب الفعل الماضي</h1>
        <p dir="rtl">الفعل الماضي مبني دائمًا؛ وعلامته على الحرف الآخير</p>
        <h1 className="text-2xl" dir="rtl">أمثلة:</h1>
        <details dir="rtl" className="text-[#EE7214] list-disc">
          <summary className="text-green cursor-pointer">مبني على الضمة:</summary>
          <ol className="text-[#527853] list-decimal mr-10">
            <li>إذا اتصلت به واو الجماعة</li>
            <p>العمال  <span className="text-[#EE7214]">أتقنُوا</span> عملهم</p>

          </ol>
        </details>
        <details dir="rtl" className="text-[#EE7214] list-disc">
          <summary className="text-green cursor-pointer">مبني على الفتحة:</summary>
          <ol className="text-[#527853] list-decimal mr-10">
            <li>إذا لم يتصل به شيء</li>
            <p>  <span className="text-[#EE7214]">نجحَ</span> الطالب في الامتحان</p>
            <li>إذا اتصلت به تاء التأنيث</li>
            <p>الحديقة  <span className="text-[#EE7214]">أثمرَت</span> عنبا</p>
            <li>إذا اتصلت به ألف الاثنين</li>
            <p>اللاعبان  <span className="text-[#EE7214]">اشتركا</span> في المسابقة</p>
            <li>إذا اتصل به ضمير نصب (أي: يُعرب الضمير المتصل مفعولًا به)</li>
            <p>  <span className="text-[#EE7214]">علمنا</span>  المعلم اللغة العربية</p>

          </ol>
        </details>
        <details dir="rtl" className="text-[#EE7214] list-disc">
          <summary className="text-green cursor-pointer">مبني على السكون:</summary>
          <ol className="text-[#527853] list-decimal mr-10">
            <li>إذا اتصلت به تاء الفاعل</li>
            <p>  <span className="text-[#EE7214]">ذاكرْت</span> دروسي جيداً</p>
            <li>إذا اتصل به (نا الفاعلين التي تدل على الفاعل)</li>
            <p>  <span className="text-[#EE7214]">استطعْنا</span>  التغلب على الصعاب</p>
            <li>إذا اتصلت به نون النسوة</li>
            <p>الطبيبات  <span className="text-[#EE7214]">عالجْن</span> المرضى</p>

          </ol>
        </details>
      </div>
    </div>
  );
}
