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
                <h1 className="text-7xl">مضاف إليه</h1>
                <br></br>
                <p className="text-[#527853] text-lg">المضاف إليه هو الأسم الذي يضاف إلي اسم يفيد بالتعريف أو التخصيص</p>
                <br />
                <Tabs dir="rtl">
                    <TabList>
                        <Tab>تعريف</Tab>
                        <Tab>إعراب</Tab>
                        <Tab>أمثلة</Tab>
                    </TabList>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">تعريف المضاف إليه:</h1>
                        <p className="text-[#527853]">المضاف هو كل اسم أضيف إلى اسم آخر والأول يجر الثاني ويُسمى مضافًا، والمجرور يُسمى مضاف إليه، أما المضاف إليه فهو كل اسم نُسب إلى شيء بواسطة حرف جر لفظًا أو ظرفًا أو مرادًا. ويمكن تعريف المضاف إليه في النحو على أنه الاسم الذي يُضاف إليه اسم آخر طلبًا لازمًا يفيد التعريف أو التخصيص، ويُسمى الأول مضاف والثاني مضاف إليه.</p>
                    </TabPanel>
                    <TabPanel className=" text-right">
                        <h1  className=" text-2xl text-[#527853]">أعراب المضاف إليه:</h1>
                        <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                            <li>
                                يعرب المضاف إليه بال
                                <span className="text-orange-500">كسرة </span>
                                عندما يكون: مفرد، أو جمع تكسير، أو جمع مؤنث سالم
                            </li>
                            <li>
                                يعراب المضاف إليه بال
                                <span className="text-orange-500">ياء </span>
                                عندما يكون: مثنى، أو جمع مذكر سالم، أو اسم من الأسماء الخمسة
                            </li>
                        </ul>




                    </TabPanel>
                    <TabPanel className=" text-right text-[#527853]">
                        <h1  className=" text-2xl ">أمثلة على المضاف إليه:</h1>
                        
                        <details>
                            <summary>أستنشق رائحة عطر</summary>
                            <p>عطر - مضاف إليه وعلامة جره<span className="text-orange-500"> الكسرة </span></p>
                        </details>
                        <details>
                            <summary>نجاح الطلاب هدف نبيل</summary>
                            <p>الطلاب - مضاف إليه وعلمة جره <span className="text-orange-500"> الكسرة </span> لأنه جمع تكسير</p>
                        </details>
                        <details>
                            <summary>أخذت مياه الطالبات</summary>
                            <p>الطالبات - مضاف إليه مجرو وعلامة جره<span className="text-orange-500"> الكسرة </span> لأنه جمع مؤنث سالم</p>
                        </details>
                        <details>
                            <summary>سيارة الأخوَيْن حمراء</summary>
                            <p>مضاف إليه مجرور وعلامة جره الياء<span className="text-orange-500"> الياء </span> لأنه مثنى  </p>
                        </details>
                        <details>
                            <summary>دام اجتماع المعلمين ساعة</summary>
                            <p>المعلمين - مضاف إليه مجرور وعلامة جره<span className="text-orange-500"> الياء </span> لأنه جمع مذكر سالم</p>
                        </details>
                        <details>
                            <summary>أنصت إلى نصيحة أبيك</summary>
                            <p>أبيك - مضاف إليه مجرور وعلامة جره<span className="text-orange-500"> الياء </span> لأنه اسم من الأسماء الخمسة</p>
                        </details>
                    </TabPanel>
                </Tabs>
                

        </div>
    )
}