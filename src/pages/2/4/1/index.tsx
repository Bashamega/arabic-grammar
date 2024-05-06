import React from "react";
import Link from "next/link";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
export default function lessonComponent(){
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
                <h1 className="text-7xl">نعت</h1>
                <br></br>
                <p className="text-[#527853] text-lg">النعت كلمة تصف كلمة أخرى سابقة لها</p>
                <br />
                <Tabs dir="rtl">
                    <TabList>
                        <Tab>تعريف</Tab>
                        <Tab>إعراب</Tab>
                        <Tab>أمثلة</Tab>
                    </TabList>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">تعريف النعت:</h1>
                        <p className=" text-[#527853]">
                        النعت كلمة تصف كلمة أخرى سابقة لها
                        </p>
                    </TabPanel>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">أعراب النعت:</h1>
                        <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                            <p>الاسم المعطوف يتبع المعطوف عليه رفعا ونصبا وجرا</p>
                        </ul>




                    </TabPanel>
                    <TabPanel className=" text-right text-[#527853]">
                        <h1  className=" text-2xl ">أمثلة على النعت:</h1>
                        <details>
                            <summary >جاء رجل مهذبُ</summary>
                            <p>مهذب - نعت مرفوع وعلامة الرفع <span className="text-orange-500"> الضمة </span></p>
                        </details>
                        <details>
                            <summary>قدم المعلم درسًا شيقًا</summary>
                            <p>شيق - نعت منصوب وعلامة النصب <span className="text-orange-500"> الفتحة </span></p>
                        </details>
                        
                        <details>
                            <summary >أحببت طالبات مجداتِ</summary>
                            <p>مجدات - نعت منصوب وعلامة نصبه <span className="text-orange-500"> الكسرة </span></p>
                        </details>
                        
                    </TabPanel>
                </Tabs>
                

        </div>
    )
}
