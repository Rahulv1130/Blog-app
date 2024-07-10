import { Link } from "react-router-dom"


interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
    id: number
}

export default function BlogCard( {authorName , title , content , publishedDate , id } : BlogCardProps ){
    return(
        <Link to={`/blog/${id}`}>
            <div className="border-b-2 border-slate-100 pb-4 cursor-pointer hover:bg-slate-50 p-4 w-screen max-w-screen-md">
                <div className="flex">
                    <div className="flex flex-col justify-center">
                        <Avatar name={authorName} ></Avatar>
                    </div>
                    <div className="pl-2">
                        {authorName}
                    </div>
                    <div className="pl-3 flex flex-col justify-center">
                        <Circle></Circle>
                    </div>
                    <div className="font-light pl-2 text-slate-500">
                        {publishedDate}
                    </div>
                </div>
                <div className="text-2xl font-bold pt-2">
                    {title}
                </div>
                <div className="text-md font-li text-slate-900">
                    {content.slice(0,100) + "..."}
                </div>
                <div className="text-slate-500 text-sm font-light pt-4">
                    {Math.ceil(content.length / 100)} minute(s) read
                </div>
            </div>
        </Link>
    )
}



export function Avatar({name , size = "small"}: {name: string , size?: "small" | "big"}){
    return(
        <div className={`relative inline-flex items-center justify-center ${ size==="small" ? "w-6 h-6" : "w-8 h-8" } overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600`}>
            <span className={`font-medium ${ size==="small" ? "text-sm" : "text-lg" } text-gray-700 dark:text-gray-300`}>{name[0]}</span>
        </div>
    )
}


function Circle(){
    return(
        <div className="rounded-full h-1 w-1 bg-slate-500">
        </div>
    )
}