import React from "react";
import Link from "next/link";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/3"}>
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
                <h1 className="text-7xl">اسم مجرور</h1>
                <br></br>
                <p className="text-[#527853] text-lg">الاسم المجرور يأتي بعد حرف الجر</p>
                <br />
                <Tabs dir="rtl">
                    <TabList>
                        <Tab>تعريف</Tab>
                        <Tab>إعراب</Tab>
                        <Tab>أمثلة</Tab>
                    </TabList>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">تعريف الاسم المجرور:</h1>
                        <p className=" text-[#527853]">
                        الاسم المجرور هو اسمٌ يأتي بعد حرفٍ من حروف الجر.
                        </p>
                    </TabPanel>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">أعراب الاسم المجرور:</h1>
                        <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                            <li>
                                يعرب الاسم المجرور بال
                                <span className="text-orange-500">كسرة </span>
                                عندما يكون: مفرد، أو جمع تكسير، أو جمع مؤنث سالم
                            </li>
                            <li>
                                يعراب الاسم المجرور بال
                                <span className="text-orange-500">ياء </span>
                                عندما يكون: مثنى، أو جمع مذكر سالم، أو اسم من الأسماء الخمسة
                            </li>
                        </ul>




                    </TabPanel>
                    <TabPanel className=" text-right text-[#527853]">
                        <h1  className=" text-2xl ">أمثلة على حرف الجر:</h1>
                        
                        <details>
                            <summary>ذهبت إلى القاهرة</summary>
                            <p>القاهرة -  اسم مجرور وعلامة جره<span className="text-orange-500"> الكسرة </span></p>
                        </details>
                        
                        <details>
                            <summary>كافأت صديقي بالنقود</summary>
                            <p>النقود -  اسم مجرور مجرو وعلامة جره<span className="text-orange-500"> الكسرة </span> لأنه جمع تكسير</p>
                        </details>
                        <details>
                            <summary>ذهبت إلى الطالبات</summary>
                            <p>الطالبات -  اسم مجرور وعلمة جره <span className="text-orange-500"> الكسرة </span> لأنه جمع مؤنث سالم</p>
                        </details>
                        <details>
                            <summary>اشتريت الكتاب بقرشين</summary>
                            <p>قرشين - اسم مجرور وعلامة جره <span className="text-orange-500"> الياء </span> لأنه مثنى</p>
                        </details>
                        <details>
                            <summary>حكم القاضي بالسجن على المجرمين</summary>
                            <p>المجرمين -  اسم مجرور مجرور وعلامة جره<span className="text-orange-500"> الياء </span> لأنه جمع مذكر سالم</p>
                        </details>
                        <details>
                            <summary>ارجعوا إلى أبيكم</summary>
                            <p>أبي -  اسم مجرور مجرور وعلامة جره<span className="text-orange-500"> الياء </span> لأنه اسم من الأسماء الخمسة</p>
                        </details>
                    </TabPanel>
                </Tabs>
                

        </div>
    )
}