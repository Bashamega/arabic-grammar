import React from "react";
import Link from "next/link";
export default function verbs(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/"}>
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
                <h1 className="text-7xl">اختر نوعًا</h1>
                <br></br>
                <p className="text-[#527853] text-lg"></p>
                <br />
                <div className="lg:flex lg:space-x-10 lg:justify-center text-3xl mt-10">
                <Link href={"3/1"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">أمر</button>
                </Link>
                <Link href={"3/2"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">مرفوع</button>
                </Link>
                <Link href={"3/3"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">ماضي</button>
                </Link>
                </div>
                

        </div>
    )
}