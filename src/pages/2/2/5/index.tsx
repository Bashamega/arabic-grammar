import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/2"}>
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
                <h1 className="text-7xl">تمييز</h1>
                <br></br>
                <p className="text-[#527853] text-lg">التمييز لغة بمعنى فصل الشيء عن غيره ، أما اصطلاحا فهو اسم نكرة منصوب يذكر لبيان المقصود من اسم قبله مبهم يصلح لأن يراد به أشياء كثيرة مختلفة</p>
                <br />
                <div className="text-[#527853] text-lg"dir="rtl">
                    <h1 className="text-2xl">اختر نوعًا:</h1>
                    <div dir="rtl" className=" lg:grid lg:grid-cols-2 mb-5 lg:gap-5  text-3xl mt-10 text-black ">
                        <Link href={"/2/2/5/1"}>
                            <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">التمييز الملفوظ</button>
                        </Link><Link href={"/2/2/5/2"}>
                            <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">التمييز الملحوظ </button>
                        </Link>
                       

                    </div>
                </div>
            

        </div>
    )
}