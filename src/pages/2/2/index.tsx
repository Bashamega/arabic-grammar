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
                <p className="text-[#527853] text-lg">منصوب</p>
                <br />
                <div dir="rtl" className=" lg:grid lg:grid-cols-3  lg:gap-5  text-3xl mt-5">
                <Link href={"//2/3/1"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">مفعول به</button>
                </Link>                
                <Link href={"/2/3/2"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">مفعول لأجله</button>
                </Link><Link href={"/2/3/3"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">مفعول فيه</button>
                </Link><Link href={"/2/3/4"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">مفعول مطلق</button>
                </Link><Link href={"/2/3/5"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">تمييز</button>
                </Link><Link href={"/2/3/6"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">حال</button>
                </Link><Link href={"/2/3/7"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">اسم إن</button>
                </Link><Link href={"/2/3/8"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">خبر كان</button>
                </Link>
                <Link href={"/2/3/9"}>
                    <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">المنادى</button>
                </Link>
                </div>
                

        </div>
    )
}