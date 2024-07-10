import { useState } from "react"
import AppBar from "../components/AppBar"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Publish() {

    const [title , setTitle] = useState("");
    const [content , setContent] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <AppBar></AppBar>
            <div className="pt-8 flex justify-center">
                <div className="w-full max-w-screen-lg">
                    <div className="w-full max-w-screen-lg">
                        <label className="block mb-2 font-medium text-gray-900">Title</label>
                        <input onChange={ (e) => setTitle(e.target.value) } type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title" required></input>
                    </div>
                    <div className="pt-10">
                        <label className="block mb-2 font-medium text-gray-900">Content</label>
                        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                            <textarea  onChange={ (e) => setContent(e.target.value) } rows={9} className="pl-2 pt-2 block w-full text-sm text-gray-800" placeholder="Write an article..." required ></textarea>
                        </div>
                    </div>
                    <button type="submit" 
                            onClick={ () => {
                                axios.post(`${import.meta.env.VITE_BACKEND_URL}/blog` , {
                                        title,
                                        content
                                    }, {
                                    headers: {
                                        authorization: localStorage.getItem("token")
                                    }
                                })
                                .then(res => navigate(`/blog/${res.data.id}`))
                            }}
                            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                Publish post
                    </button>
                </div>
            </div>
            
        </div>
    )
}