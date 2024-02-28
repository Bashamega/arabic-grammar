import React from "react";
import Link from "next/link";
import 'react-tabs/style/react-tabs.css';
import Image from "next/image";
export default function Names(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/4"}>
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
                <h1 className="text-7xl">بدل</h1>
                <br></br>
                <p className="text-[#527853] text-lg">البد هو تابع يوضح المبدل منه، ويتبعه في الإعراب</p>
                <br />
                <div className="text-[#527853] text-lg text-right">
                <div className="flex items-center w-full justify-center">
                    <Link href="https://cdn-arabic-grammar.vercel.app/files/media/Presentation1.jpg" target="_blank" rel="noreferrer">
                        <Image src={"https://cdn-arabic-grammar.vercel.app/files/media/Presentation1.jpg"} width={400} className=" tex" height={0} alt="presentation 1"></Image>
                    </Link>
                </div>
                <br></br>
                <div className=" rounded text-right bg-slate-200 mt-2 p-2 border-1" dir="rtl">
                    <h3 className=" text-2xl">ملاحظة:</h3>
                    <p>كل اسم فيه (ألـ تعريق) بعد اسم إشارة يعرب بدل مطابق، إلى إذا كان اسم الإشارة منادى</p>
                </div>
                </div>
                

        </div>
    )
}