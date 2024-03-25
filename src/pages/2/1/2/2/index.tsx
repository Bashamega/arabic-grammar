import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/1/2"}>
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
                <h1 className="text-7xl">خبر جملة اسمية</h1>
                <br></br>
                <p className="text-[#527853] text-lg">
                يأتي الخبر على شكل جملة اسمية ومثال
                </p>
                <br />
                    
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                    <li className="list-item-with-space"> المنزل <span className="underline text-orange-500 group cursor-pointer relative ">
                            غرفهُ واسعة
                            
                        </span>
                    </li>

                        <li>القطة <span className="underline text-orange-500 relative group cursor-pointer">لونها جميل
                        
                        </span> </li>
                        <li>الأزهار<span className="underline text-orange-500 relative group cursor-pointer"> عطرها فواح</span> </li>
                        <li>المعلمات <span className="underline text-orange-500 group relative cursor-pointer">مجهودهن كبير</span>  </li>
                    </ul>
                </div>

        </div>
    )
}