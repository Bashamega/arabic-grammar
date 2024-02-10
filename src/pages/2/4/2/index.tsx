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
                <h1 className="text-7xl">اسم معطوف</h1>
                <br></br>
                <p className="text-[#527853] text-lg">اسم معطوف هو الاسم الذي يأتي بعد حرف الجر الذي يربط كلمة بكلمة</p>
                <br />
                <Tabs dir="rtl">
                    <TabList>
                        <Tab>تعريف</Tab>
                        <Tab>اعراب</Tab>
                        <Tab>أمثلة</Tab>
                    </TabList>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">تعريف اسم معطوف:</h1>
                        <p className="text-[#527853] text-lg">اسم معطوف هو الاسم الذي يأتي بعد حرف الجر الذي يربط كلمة بكلمة</p>
                    </TabPanel>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">أعراب اسم معطوف:</h1>
                        <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                            <p>يعرب اسم معطوف حسب مكانه في الجملة واعرابه يختلف على حسب اعراب الكلمة التي تتصف بالنعت</p>
                        </ul>




                    </TabPanel>
                    <TabPanel className=" text-right text-[#527853]">
                        <h1  className=" text-2xl ">أمثلة على اسم معطوف:</h1>
                        <details>
                            <summary>نجح محمد ومحمود</summary>
                            <p>محمود - اسم معطوف مرفوع وعلامة الرفع <span className="text-orange-500"> الضمة </span></p>
                        </details>
                        <details>
                            <summary>قدمت الأم الشاي والكعك</summary>
                            <p>الكعك - اسم معطوف منصوب وعلامة النصب <span className="text-orange-500"> الفتحة </span></p>
                        </details>
                        
                        <details>
                            <summary >حببت المعلمات وطالبات</summary>
                            <p>طالبات - اسم معطوف منصوب وعلامة الجر <span className="text-orange-500"> الكسرة </span></p>
                        </details>
                        
                    </TabPanel>
                </Tabs>
                

        </div>
    )
}