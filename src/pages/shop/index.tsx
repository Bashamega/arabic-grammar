import React, {useState, useEffect} from "react"
import axios from "axios"
import { Card } from "../../components/card"

type File = {
    title: string,
    dir: string
}

export default function shop(){
    const [files, setFiles] = useState<File[]>([])

    useEffect(() => {
        axios.get("https://cdn-arabic-grammar.vercel.app/info.json")
            .then(response => setFiles(response.data))
            .catch(error => console.error(error))
    }, [])
    
    /*return(
        <main className=" w-[90vw] h-[70vh] overflow-auto pr-8">
            <h1 className="text-4xl text-[#527853]">محتوى إضافي</h1>
            <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
                {files.map((item: File, index: number) => (
                    <Card name={item.title} link={"https://cdn-arabic-grammar.vercel.app/" + item.dir}></Card>
                ))} 
            </div>
        </main>
    )*/
}