import React from "react";
import Link from "next/link";
export default function lessonComponent(){
    return(
        <div className="lg:w-[700px]">
            <Link href={"/2/1/6/2"}>
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
                <h1 className="text-7xl">خبر إن جملة فعلية</h1>
                <br></br>
                <p className="text-[#527853] text-lg">
                 يأتي خبر إن أيضًا على شكل جملة فعلية
                </p>
                <br />
                    
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                    <li className="list-item-with-space"> إن المعلم <span className="underline text-orange-500 group cursor-pointer relative ">
                            يشرح الدرس
                            <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            هذه الجملة الفعلية المكونة من فعل (يشرح) وفاعل (ضمير مستتر تقديره (هو)) ومفعول به (الدرس) في محل رفع خبر إن للمبتدأ الأول (المعلم) - يجب أن تحتوي جملة خبر إن على ضمير مثل (هو) الواقع كفاعل                           
                             </div>
                        </span>
                    </li>

                        <li>إن الطالب <span className="underline text-orange-500 relative group cursor-pointer"> ذاكر الدرس
                        <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            هذه الجملة الفعلية المكونة من فعل (ذاكر) وفاعل (ضمير مستتر تقديره (هو)) ومفعول به (الدرس) في محل رفع خبر إن للمبتدأ الأول (الطالب) - يجب أن تحتوي جملة خبر إن على ضمير مثل (هو) الواقع كفاعل                           
                             </div>
                        </span> </li>
                        <li>إن الحق<span className="underline text-orange-500 relative group cursor-pointer">  يعلو <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            هذه الجملة الفعلية المكونة من فعل (يعلو) وفاعل (ضمير مستتر تقديره (هو))   في محل رفع خبر إن للمبتدأ الأول (الحق) - يجب أن تحتوي جملة خبر إن على ضمير مثل (هو) الواقع كفاعل                           
                             </div></span> </li>
                        <li>إن الطائر <span className="underline text-orange-500 group relative cursor-pointer"> يأكل القمح <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            هذه الجملة الفعلية المكونة من فعل (يأكل) وفاعل (ضمير مستتر تقديره (هو)) ومفعول به (القمح) في محل رفع خبر إن للمبتدأ الأول (الطائر) - يجب أن تحتوي جملة خبر إن على ضمير مثل (هو) الواقع كفاعل                           
                             </div></span>  </li>
                    </ul>
                </div>

        </div>
    )
}