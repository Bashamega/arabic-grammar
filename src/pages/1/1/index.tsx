import Link from "next/link";
import { useEffect, useState,} from "react";

export default function App() {
  const [example, setExample] = useState<string>(
    " <span class='font-bold text-[#527853]'>حروف الجر</span> هي حروف تستخدم لربط الأسماء وإضافة معاني لها"
  );
  const letters = ["من", "إلى", "عن", "في", "بالملعقةِ", "على", "لمدرستيِ", "كالصروخِ", "حروف الجر"]
  const setexample = (word:string) => {
    let updatedExample = word;
    letters.forEach((letter) => {
      if (word.includes(letter)) {
        updatedExample = updatedExample.replace(
          new RegExp(letter, "g"),
          `<span class=" font-bold text-[#527853]">${letter}</span>`
        );
      }
    });
    setExample(updatedExample);
  };
  
  

  return (
    <div className="lg:w-[700px] max-w-screen-lg mx-auto px-4 lg:px-8">
      <Link href={"/1"}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">
        حروف الجر
      </h1>
      <div className="flex flex-wrap justify-center lg:mt-10 text-lg lg:text-3xl  lg:space-y-0 lg:space-x-5">
      <p className="hover" onMouseEnter={()=>{setexample('مثال: سافرتُ من المدينةِ')}} onMouseLeave={()=>{setexample('حروف الجر هي حروف تستخدم لربط الأسماء وإضافة معاني لها')}}>من</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: ذهبتُ إلى الحديقةِ')}} onMouseLeave={()=>{setexample('حروف الجر هي حروف تستخدم لربط الأسماء وإضافة معاني لها')}}>إلى</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: سأحكي لك قصة عن رحلتي')}} onMouseLeave={()=>{setexample('حروف الجر هي حروف تستخدم لربط الأسماء وإضافة معاني لها')}}>عن</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: ألعب في الحضيقةِ')}} onMouseLeave={()=>{setexample('حروف الجر هي حروف تستخدم لربط الأسماء وإضافة معاني لها')}}>في</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: أكلتُ الطعامَ بالملعقةِ')}} onMouseLeave={()=>{setexample('حروف الجر هي حروف تستخدم لربط الأسماء وإضافة معاني لها')}}>بـ</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: أنا ذاهب لمدرستيِ')}} onMouseLeave={()=>{setexample('حروف الجر هي حروف تستخدم لربط الأسماء وإضافة معاني لها')}}>لـ</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: ركض اللاعبُ كالصروخِ')}} onMouseLeave={()=>{setexample('حروف الجر هي حروف تستخدم لربط الأسماء وإضافة معاني لها')}}>كـ</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: وضعتُ الهاتفَ على الطاولةِ')}} onMouseLeave={()=>{setexample('حروف الجر هي حروف تستخدم لربط الأسماء وإضافة معاني لها')}}>على</p>
      </div>
      <p
        id="exampleword"
        className="text-center mt-10 text-lg text-[#EE7214]"
        dangerouslySetInnerHTML={{ __html: example }}
      ></p>
    </div>
  );
}
