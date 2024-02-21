import React from "react";
import Link from "next/link";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
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
                <h1 className="text-7xl">التوكيد</h1>
                <br></br>
                <p className="text-[#527853] text-lg">التوكيد تابع يذكر في الكلام لدفع ما قد يتوهمه السامع مما ليس مقصودا</p>
                <br />
                <div className="flex justify-center space-x-5 text-3xl">
                    <Link href={"/2/4/4/1"}>
                        <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">التوكيد المعنوي</button>
                    </Link>
                    <Link href={"/2/4/4/2"}>
                        <button className="w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214]">التوكيد اللفظي</button>
                    </Link>

                </div>
                

        </div>
    )
}