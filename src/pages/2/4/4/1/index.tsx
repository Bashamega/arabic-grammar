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
                <h1 className="text-7xl">التوكيد معنوي</h1>
                <br></br>
                <p className="text-[#527853] text-lg">التوكيد المعنوي هو أن يذكر بعد الاسم السابق ( المؤكد ) أحد هذه الألفاظ : </p>
                <br></br>
                <p className="text-[#527853] text-lg">هذه الالفاظ متصلة  بضمير يعود على المؤكد </p>
                <br></br>
                <p className="text-[#527853] text-lg">عند حذف التوكيد من الجملة لا يتغير المعنى</p>
                <p className="text-orange-500 text-lg">نفس – عين – كل – جميع – عامة – كلا – كلتا – أجمع </p>
                <br />
                <div className="text-[#527853] text-lg text-right flex"dir="rtl">
                    <ul className="text-[#527853] max-w-2/5" style={{ listStyleType: 'arabic-indic' }}>
                        <li>رأيت الأستاذ <span className="underline text-orange-500">نفسَه</span> في السوق</li>
                        <li>جاء اللاعبون <span className="underline text-orange-500">أعينهم</span> فدخلوا الملعب</li>
                        <li>أحب الصادقين <span className="underline text-orange-500">كلهم</span> </li>
                        <li>الطلاب <span className="underline text-orange-500">جميعهم</span> يدرسون في نفس المدرسة</li>
                        <li>حضر المشجعون <span className="underline text-orange-500">عامتهم</span></li>
                        <li>جاء الطالبان <span className="underline text-orange-500">كلاهما</span></li>
                        <li>جاءت المرأتان <span className="underline text-orange-500">كلتاهما</span></li>
                    </ul>
                    <div className="rounded-lg p-5 mr-5 w-2/5 bg-[#F7B787] h-[100]">
                        <h2 className="text-2xl">ليس توكيدًا</h2>
                        <ul className="text-[#527853] max-w-2/5" style={{ listStyleType: 'arabic-indic' }}>
                        <li>داخل نفس المكان</li>
                        <li>كل الحيوانات لطاف</li>
                        <li>جميع الطلاب متفوقون</li>

                    </ul>
                    </div>
                </div>

        </div>
    )
}