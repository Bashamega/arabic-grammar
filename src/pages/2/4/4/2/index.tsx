import React from "react";
import Link from "next/link";
export default function Names(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/4/4"}>
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
                <h1 className="text-7xl">التوكيد اللفظي</h1>
                <br></br>
                <p className="text-[#527853] text-lg">التوكيد اللفظي هو تكرار اللفظ السابق ( المؤكد ) ، مرتين أو ثلاثا على الأكثر</p>
                <br />
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                        <li>الكتاب <span className="underline text-orange-500">الكتابًُ</span> مفيد</li>
                        <li>طلع <span className="underline text-orange-500">طلعَ</span> القمر</li>
                        <li>في <span className="underline text-orange-500">في</span> المحطة قطار</li>
                        <li>هو <span className="underline text-orange-500">هوَ</span> المجد</li>
                        <li>الماء عذب، <span className="underline text-orange-500">الماءُ عذبٌ</span></li>
                        <li>زأر الأسد <span className="underline text-orange-500">زأر الأسدُ</span></li>
                    </ul>
                </div>

        </div>
    )
}