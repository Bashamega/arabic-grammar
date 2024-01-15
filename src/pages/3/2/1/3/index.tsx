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
        <p className="text-[#527853] text-lg" dir="rtl">يجزم الفعل المضارع عندما:</p>

        <Tabs dir="rtl">
            <TabList className="text-right text-lg space-x-5">
                <Tab>1. تسبقه أداة جزم</Tab>
                <Tab>2. تسبقه أداة شرط جازمة</Tab>
                <Tab>3. يقع جوابًا لطلب</Tab>
            </TabList>
            <TabPanel>
                <h1 className=" text-2xl text-[#527853]">أدوات الجزم</h1>
                <p className="text-[#527853]">لم - لام الأمر - لا الناهية</p>
            </TabPanel>
            <TabPanel className="text-[#527853] text-right">
                <h1 className=" text-2xl text-[#527853]">أسلوب الشرط</h1>
                <p className="text-[#527853] text-right">أسلوب الشرط هو أسلوب بلاغي يدل على تلازم وارتباط بين جملتين بواسطة أداة تسمى أداة الشرط. يتكون أسلوب الشرط من ثلاثة أركان هي: أداة الشرط، وجملة فعل الشرط، وجملة جواب الشرط. يفيد أسلوب الشرط بوقوع شيء بسبب شيء آخر مرتبط به ومسبب له. </p>
                <br></br><br></br>
                <p>مثال:
                    إن 
                   <span className="text-orange-500"> تدرسْ تنجحْ </span>
                    </p>
            </TabPanel>
            <TabPanel className="text-[#527853] text-right">
              <h1 className=" text-2xl text-[#527853]">أسلوب الطلب</h1>
              <p className="text-[#527853] text-right">هو أسلوب نحوي يتضمن جزم الفعل المضارع إذا جاء جوابًا للطلب، والطلب هو ما دلّ على طلب حدوث الفعل أو الكفّ عنه، ويشمل ذلك: الأمر والمضارع المقترن بلام الأمر، النهي، العرض، التحضيض، الاستفهام، التمني، الدعاء، والجزم في جواب الطلب يُشبه الجزم في جواب الشرط، ذلك أنّ الشرط والطلب أسلوبان متشابهان في أنّ كلتا الجملتين لم تتحقّقا بعد، فأسلوب الطلب يُشبه الشرط من ناحية المعنى.</p>
              <h2 className=" text-lg" dir="rtl">أمثلة</h2>
              <div >
                <details>
                  <summary className="text-orange-500">إذا كان الفعل المضارع جوابًا لفعل الأمر</summary>
                  <p>
                  ذرهم
                    <span className="text-orange-500"> يأكلوا </span>
                    ويتمتعوا ويلههم الأمل
                  </p>
                  <p>
                    <span className="text-orange-500"> يأكلوا - </span>
                    فعل مضارع مجزوم وعلامة جزمه حذف النون
                  </p>
                </details>
                <details>
                  <summary className="text-orange-500">إذا كان الفعل المضارع جوابًا للفعل المضارع</summary>
                  <p>
                    لا
                    <span className="text-orange-500"> تُسرقْ </span>
                    تصبح نادمًا
                  </p>
                  <p>
                    <span className="text-orange-500"> تسرق - </span>
                    فعل مضارع مجزوم وعلامة جزمه السكون
                  </p>
                </details>
                <details >
                  <summary className="text-orange-500">إذا جاء الفعل المضارع جوابًا للتمني</summary>
                  <p>
                    ليت لي مالا 
                    <span className="text-orange-500"> أنفقْه </span>
                    في الخير
                  </p>
                  <p>
                    <span className="text-orange-500"> أنفق - </span>
                    فعل مضارع مجزوم وعلامة جزمه السكون
                  </p>

                </details>
              </div>
            </TabPanel>
        </Tabs>
        <h2 className="text-[#527853] text-2xl text-right" dir="rtl">إعراب:</h2>

        <p className="text-right text-[#527853]" dir="rtl">
          يعرب فعلًا مضارعًا مجزومًا وعلامة جزمه السكون عندما يكون صحيح الآخر
          <br></br>
          يعرب فعلًا مضارعًا مجزومًا وعلامة جزمه حذف حرف العلة عندما يكون معتل الأخر. 
          <br></br>
          يعرب فعلًا مضارعًا مجزومًا وعلامة جزمه حذف النون عندما يكون من الأفعال الخمسة.
        </p>
        
    </div>
  )
}