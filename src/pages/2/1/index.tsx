import React from "react";
import Link from "next/link";
export default function Names(){
    return(
        <div className="lg:w-[700px]">
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
                <h1 className="text-7xl">اختر نوعًا</h1>
                <br></br>
                <p className="text-[#527853] text-lg">مرفوع</p>
                <br />
                <div dir="rtl" className=" lg:grid lg:grid-cols-3 mb-5 lg:gap-5  text-3xl mt-10">
                <Link href={"/2/1/1"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">مبتدأ</button>
                </Link><Link href={"/2/1/2"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">خبر</button>
                </Link><Link href={"/2/1/3"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">فاعل</button>
                </Link><Link href={"/2/1/4"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">نائب فاعل</button>
                </Link><Link href={"/2/1/5"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">اسم كان</button>
                </Link><Link href={"/2/1/1"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">خبر إن</button>
                </Link>
                </div>
                

        </div>
    )
}