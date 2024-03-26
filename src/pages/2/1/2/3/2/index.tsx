import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/1/2/3"}>
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
                <h1 className="text-7xl">شبه الجملة من ظرف المكان والزمان</h1>
                <br></br>
                <p className="text-[#527853] text-lg">
                ويكون محلّ الخبر هنا مكوّنًا من ظرف زمان أو مكان

                </p>      
                <br />
                    
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                    <li className="list-item-with-space"> العصفور <span className="underline text-orange-500 group cursor-pointer relative ">
                            تحت الشجرة
                            
                        </span>
                    </li>

                        <li>الطائرة <span className="underline text-orange-500 relative group cursor-pointer">  بين السحب 
                        
                        </span> </li>
                    </ul>
                </div>

        </div>
    )
}