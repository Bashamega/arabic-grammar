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
                <h1 className="text-7xl">خبر إن جملة اسمية</h1>
                <br></br>
                <p className="text-[#527853] text-lg">
                يأتي خبر إن على شكل جملة اسمية 
                </p>
                <br />
                    
                <div className="text-[#527853] text-lg text-right"dir="rtl">
                    
                    <h1 className="text-2xl">أمثلة:</h1>
                    <ul className="text-[#527853]" style={{ listStyleType: 'arabic-indic' }}>
                    <li className="list-item-with-space"> إن المنزل <span className="underline text-orange-500 group cursor-pointer relative ">
                            غرفهُ واسعة
                            <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            هذه الجملة الاسمية المكونة من مبتدأ (غرف) وخبر إن (واسعة) في محل رفع خبر إن للمبتدأ الأول (المنزل) - يجب أن تحتوي جملة خبر إن على ضمير مثل (الهاء) المتصل بالمبتدأ الثاني (غرفه)                                
                            </div>
                        </span>
                    </li>

                        <li>إن القطة <span className="underline text-orange-500 relative group cursor-pointer">لونها جميل
                        <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            هذه الجملة الاسمية المكونة من مبتدأ (لون) وخبر إن (جميل) في محل رفع خبر إن للمبتدأ الأول (القطة) - يجب أن تحتوي جملة خبر إن على ضمير مثل (ها) المتصل بالمبتدأ الثاني (لونها)                                
                            </div>
                        </span> </li>
                        <li>إن الأزهار<span className="underline text-orange-500 relative group cursor-pointer"> عطرها فواح
                        <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            هذه الجملة الاسمية المكونة من مبتدأ (عطر) وخبر إن (فواح) في محل رفع خبر إن للمبتدأ الأول (المنزل) - يجب أن تحتوي جملة خبر إن على ضمير مثل (ها) المتصل بالمبتدأ الثاني (عطرها)                                
                            </div>
                        </span> </li>
                        <li>إن المعلمات <span className="underline text-orange-500 group relative cursor-pointer">مجهودهن كبير
                        <div className="  opacity-0 w-[500px] overflow-visible bg-[#dae0da] text-lg shadow-2xl text-center rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full ml-14 px-3 pointer-events-none">
                            هذه الجملة الاسمية المكونة من مبتدأ (مجهود) وخبر إن (كبير) في محل رفع خبر إن للمبتدأ الأول (المعلمات) - يجب أن تحتوي جملة خبر إن على ضمير مثل (هن) المتصل بالمبتدأ الثاني (مجهدن)                                
                            </div>
                        </span>  </li>
                    </ul>
                </div>

        </div>
    )
}