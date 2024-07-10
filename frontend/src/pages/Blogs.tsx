import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import Skeleton from "../components/Skeleton";
import { useBlogs } from "../hooks"

export default function Blogs(){

    const { loading , blogs } = useBlogs();

    if(loading){
        return(
            <div>
                <AppBar></AppBar>
                <Skeleton></Skeleton>
            </div>
        )
    }


    return(
        <div>
            <AppBar></AppBar>
            <div className="flex justify-center">
                <div className="max-w-screen-md">

                    { blogs.map( (blog) => <BlogCard
                            publishedDate="Dec 3, 2024"
                            authorName = {blog.author.name || "Anonymous"}  
                            title = {blog.title}
                            content = {blog.content}
                            id = {blog.id}
                        ></BlogCard> ) 
                    }


                    {/* <BlogCard 
                        publishedDate="Dec 3,2024" 
                        authorName="Peter V" 
                        title="How an ugly single page website makes $5000 a month with affiliate marketing" 
                        content="No need to create a fancy and modern website with hundreds of pages to make money online. Making money online is the dream for many people byut not people are able to do so ">
                    </BlogCard> */}
                </div>
            </div>
        </div>
        
    )
}