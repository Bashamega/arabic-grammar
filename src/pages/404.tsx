import Link from "next/link";

export default function notfound(){
    return(
        <main className=" text-3xl">
            <h1 className=" text-5xl text-[#527853]">هذه الصفحة ليست متاحة الآن</h1>
            <button className=" w-full lg:w-auto rounded-lg shadow-lg hover:shadow-sm border p-5 bg-[#F7B787] hover:bg-[#EE7214] mt-5">
                <Link href={"/"}>القائمة الأساسية</Link>
            </button>
        </main>
    )
}