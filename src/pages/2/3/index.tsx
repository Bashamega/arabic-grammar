import Link from "next/link";
import React from "react";
export default function App(){

  return(
    <div className="lg:w-[700px] max-w-screen-lg mx-auto px-4 lg:px-8">
        <Link href={"/2"}>
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
        <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">نعت</h1>     
        <p className="text-2xl mt-2 ">
            <span className="read-hover">النعت </span>
            <span className="read-hover">يمكن </span>
            <span className="read-hover">أن يكون </span>
            <span className="read-hover">مجموعة </span>
            <span className="read-hover">من الصفات </span>
            <span className="read-hover">التي </span>
            <span className="read-hover">تصفهم </span>
            <span className="read-hover"> أو</span>
            <span className="read-hover">تعبر </span>
            <span className="read-hover">عنهم</span>

        </p>
        <div>
            <h1 className=" text-4xl hover2">أمثلة</h1>
            <div className="space-x-3 flex flex-wrap justify-center">
                <p>لطيف</p>
                <p>جميل</p>
                <p>ذكي</p>
                <p>مرح</p>
                <p>فضولي</p>
                <p>مبدع</p>
                <p>طيب القلب</p>
                <p>مهذب</p>
                <p>محب للتعلم</p>
                <p>مبتكر</p>
                <p>نشيط</p>
                <p>مسؤول</p>
                <p>مبتسم</p>
                <p>متفائل</p>
                <p>صبور</p>
            </div>

        </div>
    </div>
  )
}