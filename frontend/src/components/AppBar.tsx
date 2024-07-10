import { Link, useNavigate } from "react-router-dom"
import { Avatar } from "./BlogCard"

export default function AppBar(){

    const navigate = useNavigate();

    function logout(){
        localStorage.removeItem("token");
        navigate("/signin")
    }

    return(
        <div className="border-b-2 flex justify-between px-10 py-1">
            <Link to="/blogs" className="flex flex-col justify-center text-xl hover:text-blue-900 hover:font-semibold">
                Medium
            </Link>

            <div className="flex">
                <div className="flex flex-col justify-center ">
                    <Link to="/publish">
                        <button type="button" className="mr-5 text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">New</button>
                    </Link>
                </div>

                <div className="pr-4 flex flex-col justify-center">
                    <Avatar name="M" size="big"></Avatar>
                </div>
                
                <div className="flex flex-col justify-center">
                    <button onClick={logout}  type="button" className="mr-5 text-white bg-slate-400 hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">Logout</button>
                </div>
            </div>
            
        </div>
    )
}