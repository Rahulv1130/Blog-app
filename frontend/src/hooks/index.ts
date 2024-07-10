import axios from "axios";
import { useEffect, useState } from "react"


export interface Blog {
    content: string,
    title: string,
    id: number,
    author: {
        name: string
        }
}

export const useBlog = ( { id } : { id: Number } ) => {
    const [loading , setLoading] = useState(true);
    const [blog , setBlog] = useState<Blog>();

    useEffect( ()=> {
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/${id}` , {
            headers: {
                authorization: localStorage.getItem("token")
            }
       })
            .then( res => { 
                setBlog(res.data.blog);
                setLoading(false);
            })        
    } , []);

    return {
        loading,
        blog
    }
}


export const useBlogs = () => {
    const [loading , setLoading] = useState(true);
    const [blogs , setBlogs] = useState<Blog[]>([]);

    useEffect( () => {
       axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/bulk` , {
            headers: {
                authorization: localStorage.getItem("token")
            }
       })
            .then( res => { 
                setBlogs(res.data.blogs);
                setLoading(false);
            })
    } , [] )

    return {
        loading,
        blogs
    }
}