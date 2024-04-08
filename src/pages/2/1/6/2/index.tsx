import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/1/6"}>
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
                <h1 className="text-7xl">خبر إن الجملة</h1>
                <br></br>
                <p className="text-[#527853] text-lg">هو أن يكون الخَبَر الذي يُراد به الإخبار عن المُبتدأ على هيئة جُملة على اختلاف نوعيها (الفعليّة والاسميّة)
                </p>
                <br />
                <div className="text-[#527853] text-lg"dir="rtl">
                    <h1 className="text-2xl">أنواع خبر إن الجملة:</h1>
                    <div className="lg:flex lg:space-x-10 lg:justify-center text-3xl mt-10 text-black">
                        <Link href={"/2/1/6/2/2"}>
                            <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">الجملة الاسمية</button>
                        </Link><Link href={"/2/1/6/2/1"}>
                            <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">الجملة الفعلية</button>
                        </Link>

                    </div>
                </div>

        </div>
    )
}