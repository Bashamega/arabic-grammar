import Link from "next/link";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function App(){
  return(
    <div className="lg:w-[700px] max-w-screen-lg mx-auto px-4 lg:px-8">
        <Link href={"/3/2/1"}>
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
        <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">مجزوم</h1>
        <p className="text-[#527853] text-lg">يجزم الفعل المضارع عند ما يسبقه أداة جزم أو أسلوب الشرط</p>
        <h2 className="text-[#527853] text-2xl text-right" dir="rtl">إعراب:</h2>
        <p className="text-right text-[#527853]" dir="rtl">
          يعرب فعل مضارع مجزوم وعلامة جزمه السكون عندما يكون صحيح. 
          <br></br>
          يعرب فعل مضارع مجزوم وعلامة جزمه حذف حرف العلى عندما يكون معتل الأخر. 
          <br></br>
          يعرب فعل مضارع مجزوم وعلامة جزمه حذف النون عندما يكون من الأفعال الخمسة.
        </p>
        <Tabs dir="rtl">
            <TabList className="text-right text-lg">
                <Tab>أدوات الجزم</Tab>
                <Tab>أسلوب الشرط</Tab>
            </TabList>
            <TabPanel>
                <h1 className=" text-2xl text-[#527853]">أدوات الجزم</h1>
                <p className="text-[#527853]">لم - لما - لام الأمر - لا الناهية</p>
            </TabPanel>
            <TabPanel className="text-[#527853] text-right">
                <h1 className=" text-2xl text-[#527853]">أسلوب الشرط</h1>
                <p className="text-[#527853] text-right">أسلوب الشرط هو أسلوب بلاغي يدل على تلازم وارتباط بين جملتين بواسطة أداة تسمى أداة الشرط. يتكون أسلوب الشرط من ثلاثة أركان هي: أداة الشرط، وجملة فعل الشرط، وجملة جواب الشرط. يفيد أسلوب الشرط بوقوع شيء بسبب شيء آخر مرتبط به ومسبب له. </p>
                <br></br><br></br>
                <p>مثال:
                    إن 
                   <span className="text-orange-500"> تنجحْ تدرسْ </span>
                    </p>
            </TabPanel>
        </Tabs>
    </div>
  )
}