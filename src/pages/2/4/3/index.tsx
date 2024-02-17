import React from "react";
import Link from "next/link";
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
                <h1 className="text-7xl">بدل</h1>
                <br></br>
                <p className="text-[#527853] text-lg">البد هو تابع يوضح المبدل منه، ويتبعه في الإعراب</p>
                <br />
                <div className="text-[#527853] text-lg text-right">
                <table className="border border-[#EE7214] text-[#527853] border-collapse w-full text-center text-lg" dir="rtl">
                    <tr className=" text-2xl bg-[#EE7214]">
                        <td className="border border-[#527853]">كل من كل (مطابق)</td>
                        <td className="border border-[#527853]">بعض من كل</td>
                        <td className="border border-[#527853]">اشتمال</td>
                    </tr>
                    
                    <tr>
                        <td className="border border-[#EE7214]">البدل = المبدل منه</td>
                        <td className="border border-[#EE7214]">البدل &gt; المبدل منه البدل جزء من المبدل منه</td>
                        <td className="border border-[#EE7214]">المبدل منه يشتمل على البدل وليس البدل جزءا ولا مطابقا</td>
                    </tr>
                    <tr>
                        <td className="border border-[#EE7214]">لا يحتاج إلى ضمير يعود على المبدل منه</td>
                        <td className="border border-[#EE7214]">يحتاج إلى ضمير يعود على المبدل منه</td>
                        <td className="border border-[#EE7214]">يحتاج إلى ضمير يعود على المبدل منه</td>
                    </tr>
                    <tr>
                        <td className="border border-[#EE7214]">قابل الفروق عمر</td>
                        <td className="border border-[#EE7214]">سقط المنزل سقفه</td>
                        <td className="border border-[#EE7214]">أحببت السيارة سرعتها</td>
                    </tr>
                </table>
                <br></br>
                <div className=" rounded text-right bg-slate-200 mt-2 p-2 border-1" dir="rtl">
                    <h3 className=" text-2xl">ملاحظة:</h3>
                    <p>كل اسم فيه (ألـ تعريق) بعد اسم إشارة يعرب بدل مطالق، إلى إذا كان اسم الإشارة منادى</p>
                </div>
                </div>
                

        </div>
    )
}