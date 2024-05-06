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
                <h1 className="text-7xl">الاسم المعطوف</h1>
                <br></br>
                <p className="text-[#527853] text-lg">الاسم المعطوف يتبع المعطوف عليه رفعا ونصبا وجرا</p>
                <br />
                <Tabs dir="rtl">
                    <TabList>
                        <Tab>تعريف</Tab>
                        <Tab>إعراب</Tab>
                        <Tab>أمثلة</Tab>
                    </TabList>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">تعريف اسم معطوف:</h1>
                        <p className="text-[#527853] text-lg">الاسم المعطوف هو الاسم الذي يأتي بعد حرف العطف الذي يربط كلمة بكلمة</p>
                    </TabPanel>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">إعراب الاسم المعطوف:</h1>
                        <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                            <p>الاسم المعطوف يتبع المعطوف عليه رفعا ونصبا وجرا</p>
                        </ul>




                    </TabPanel>
                    <TabPanel className=" text-right text-[#527853]">
                        <h1  className=" text-2xl ">أمثلة على الاسم المعطوف:</h1>
                        <details>
                            <summary>نجح محمد فمحمود</summary>
                            <p>محمود - اسم معطوف مرفوع وعلامة الرفع <span className="text-orange-500"> الضمة </span></p>
                        </details>
                        <details>
                            <summary>نجح محمد أو محمود</summary>
                            <p>محمود - اسم معطوف مرفوع وعلامة الرفع <span className="text-orange-500"> الضمة </span></p>
                        </details>
                        <details>
                            <summary>قدمت الأم الشاي ثم الكعك</summary>
                            <p>الكعك - اسم معطوف منصوب وعلامة النصب <span className="text-orange-500"> الفتحة </span></p>
                        </details>
                        
                        <details>
                            <summary >أحببت المعلمات وطالبات</summary>
                            <p>طالبات - اسم معطوف منصوب وعلامة الجر <span className="text-orange-500"> الكسرة </span></p>
                        </details>
                        
                    </TabPanel>
                </Tabs>
                

        </div>
    )
}
