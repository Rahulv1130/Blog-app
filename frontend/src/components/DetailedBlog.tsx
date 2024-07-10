import AppBar from "./AppBar"
import { Avatar } from "./BlogCard"

// @ts-ignore
export const DetailedBlog = ( { blog }  ) => {
    return(
        <div>
            <AppBar></AppBar>
            <div className="flex justify-center">
                <div className="grid grid-cols-12 px-10 pt-20 max-w-screen-xl w-full">
                    <div className="col-span-8">
                        <div className="font-extrabold text-5xl">
                            {blog.title}
                        </div>
                        <div className="text-slate-500 pt-2">
                            Posted on August 24,2024
                        </div>
                        <div className="pt-4">
                            {blog.content}
                        </div>
                    </div>

                    <div className="col-span-4 ml-20">
                        <div className="text-slate-600 text-lg">
                            Author
                        </div>
                        <div className="flex">
                            <div className="pr-4 flex flex-col justify-center">
                                <Avatar size="big" name={blog.author.name || "Anonymous"}></Avatar>
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    {blog.author.name || "Anonymous"}
                                </div>
                                <div className="pt-2 text-slate-500">
                                    Random catch phrase about the author's ability  to grab the user's attention
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}