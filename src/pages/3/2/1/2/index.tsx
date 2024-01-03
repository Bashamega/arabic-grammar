import Link from "next/link";
import React from "react";
export default function App(){
  return(
    <div className="lg:w-[700px] max-h-[50vh] overflow-y-scroll max-w-screen-lg mx-auto px-4 lg:px-8">
        <Link href={"/3/2"}>
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
        <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">منصوب</h1>
        <p className="text-[#527853] text-lg" dir="rtl">ينصب الفعل المضارع إذا سبقته أداة نصب:</p>
        <div className="flex flex-wrap justify-center lg:mt-10 text-lg lg:text-3xl  lg:space-y-0 lg:space-x-5">
          <p className="text-[#527853]">لام التعليل</p>
          
          <p className="text-[#527853]">حتى</p>
          <p className="text-[#527853]">كي</p>
          <p className="text-[#527853]">لن</p>

          <p className="text-[#527853]">أن</p>
        </div>
        
        <div dir="rlt" className="text-[#EE7214] text-lg w-full text-right">
        <h1 className="text-2xl" dir="rtl">أمثلة:</h1>
        <div className="table-container">
        <table className="table-auto w-full text-center border-2  border-orange-500">
          <tbody>
            <tr className="text-[#527853] sticky">
              <td className=" px-4 py-2 border-2  border-orange-500">حذف حرف النون</td>
              <td className="border-2  border-orange-500 px-4 py-2">الفتحة المقدرة</td>
              <td className="border-2  border-orange-500 px-4 py-2">الفتحة الظاهرة</td>
              <td className="border-2 border-orange-500 px-4 py-2 text-sm flipped">
                <p>أدوات</p>
                <hr className="border-orange-500 w-full px-10"></hr>
                <p >علامات</p>

              </td>

            </tr>
            <tr className="text-[#527853]">
              <td className="border-2  border-orange-500 px-4 py-2">ينبغي أنْ 
              <div className=" text-orange-500 tooltip"> تحضروا   
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه حذف حرف النون</span>
              </div>
              
               باكراً إلى المدرسة</td>
              <td className="border-2  border-orange-500 px-4 py-2"> يجب أن <div className=" text-orange-500 tooltip"> أسعى 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة المقدرة</span>
              </div> في الخير</td>
              <td className="border-2  border-orange-500 px-4 py-2">أن 
              <div className=" text-orange-500 tooltip"> تحافظَ 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة </span>
              </div>
               على صحتك</td>
              <td className="border-2  border-orange-500 px-4 py-2">أن</td>

            </tr>
            <tr className="text-[#527853]">
              <td className="border-2  border-orange-500 px-4 py-2">الطالبان لن <div className=" text-orange-500 tooltip"> يهملا 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه حذف حرف النون</span>
              </div> واجباتهما</td>
              <td className="border-2  border-orange-500 px-4 py-2">لن <div className=" text-orange-500 tooltip"> أسعى 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة المقدرة</span>
              </div> في ضرر الآخرين</td>
              <td className="border-2  border-orange-500 px-4 py-2"> لن  <div className=" text-orange-500 tooltip"> أبرحَ 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة </span>
              </div> مكاني</td>
              <td className="border-2  border-orange-500 px-4 py-2">لن</td>

            </tr>
            <tr className="text-[#527853]">
              <td className="border-2  border-orange-500 px-4 py-2">افعلوا الخير كي <div className=" text-orange-500 tooltip"> تحضوا 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه حذف حرف النون</span>
              </div> خيراً</td>
              <td className="border-2  border-orange-500 px-4 py-2">كي <div className=" text-orange-500 tooltip"> أسعى 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة المقدرة</span>
              </div> للنجاح أذاكر</td>
              <td className="border-2  border-orange-500 px-4 py-2">أجتهد في دراستي كي  <div className=" text-orange-500 tooltip"> أنجحَ 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة </span>
              </div></td>
              <td className="border-2  border-orange-500 px-4 py-2">كي</td>

            </tr>
            <tr className="text-[#527853]">
              <td className="border-2  border-orange-500 px-4 py-2">اجتهدي حتى <div className=" text-orange-500 tooltip"> تتفوقي 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه حذف حرف النون</span>
              </div></td>
              <td className="border-2  border-orange-500 px-4 py-2" dir="rtl">أستيقظ مبكرًا حتى <div className=" text-orange-500 tooltip"> أسعى 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة المقدرة</span>
              </div> 
               </td>
              <td className="border-2  border-orange-500 px-4 py-2">اجتهد حتى  <div className=" text-orange-500 tooltip"> تحققَ 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة </span>
              </div> أمانيك</td>
              <td className="border-2  border-orange-500 px-4 py-2">حتى</td>

            </tr>
            <tr className="text-[#527853]">
              <td className="border-2  border-orange-500 px-4 py-2">ادرسوا <div className=" text-orange-500 tooltip"> لتنجحوا 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه حذف حرف النون</span>
              </div></td>
              <td className="border-2  border-orange-500 px-4 py-2">درست <div className=" text-orange-500 tooltip"> لأسعى 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة المقدرة</span>
              </div> للعلم</td>
              <td className="border-2  border-orange-500 px-4 py-2">درست جيدًا  <div className=" text-orange-500 tooltip"> لأنجحَ 
              <span className="tooltiptext">فعل مضارع منصوب وعلامة نصبه الفتحة </span>
              </div></td>
              <td className="border-2  border-orange-500 px-4 py-2">لام التعليل</td>

            </tr>

          </tbody>
        </table>

        </div>
      </div>
    </div>
  )
}