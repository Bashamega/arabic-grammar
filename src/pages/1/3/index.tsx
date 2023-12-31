import Link from "next/link";
import { useState } from "react";
import React from "react";
export default function App(){
  const [example, setExample] = useState<string>("<span class=' font-bold text-[#527853]'>الحروف الناسخة</span> هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر ")
  const letters = ["إنَّ", "أنَّ", "كأن", "لكنّ", "لعل", "ليت", "الحروف الناسخة"]
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
  const change = ()=>{
    const paragraph = document.getElementById('exampleword');

    if (paragraph) {
      // Get the text content of the paragraph
      const text = paragraph.textContent || '';
      // Define the word to be highlighted
      const wordToHighlight = 'ليت';
      // Split the text content by the word to highlight
      const parts = text.split(wordToHighlight);

      // Create a new HTML content by wrapping the word to highlight in a span
      const newHTML = parts.reduce((acc, part, index) => {
        acc += part;
        if (index < parts.length - 1) {
          acc += `<span class="highlight">${wordToHighlight}</span>`;
        }
        return acc;
      }, '');

      // Apply the updated HTML content to the paragraph
      paragraph.innerHTML = newHTML;
    }
  }
  return(
    <div className="lg:w-[700px] max-w-screen-lg mx-auto px-4 lg:px-8">
        <Link href={"/1"}>
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
        <h1 className="text-4xl lg:text-7xl rounded-lg shadow-lg border p-5 bg-[#F7B787] text-center mt-5 lg:mt-0">الحروف الناسخة</h1>     
        <div className="flex flex-wrap justify-center lg:mt-10 text-lg lg:text-3xl  lg:space-y-0 lg:space-x-5">
          <p className="hover" onMouseEnter={()=>{setexample('مثال: لعلّ المعلمين يعلمون الأطفال')}} onMouseLeave={()=>{setexample("الحروف الناسخة هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>لعل</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: ليت الاختياراتِ سهلهُ')}} onMouseLeave={()=>{setexample("الحروف الناسخة هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>ليت</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: الطقسُ بارد لكنّ النارَ قريبةُ')}} onMouseLeave={()=>{setexample("الحروف الناسخة هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>لكنّ</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: كأن القمرَ مصباحُ')}} onMouseLeave={()=>{setexample("الحروف الناسخة هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>كأن</p>
          <p className="hover" onMouseEnter={()=>{setexample('مثال: أنَّ الظلامَ دامسُ')}} onMouseLeave={()=>{setexample("الحروف الناسخة هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>أنَّ</p>
          <p className="hover w-full" onMouseEnter={()=>{setexample('مثال: إنَّ الطالبين مجتهدان')}} onMouseLeave={()=>{setexample("الحروف الناسخة هي مجموعة من الحروف تدخل على الجملة الإسمية فتنسخها: تنصب المبتدأ وترفع الخبر")}}>إنَّ</p>

        </div>
        <p
        id="exampleword"
        className="text-center mt-10 text-lg text-[#EE7214]"
        dangerouslySetInnerHTML={{ __html: example }}
      ></p>   </div>
  )
}