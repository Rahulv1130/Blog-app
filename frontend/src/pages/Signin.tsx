import Quote from "../components/Quote";
import LabelledInput from "../components/LabelledInput";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput } from "@rahulv1130/medium-common";
import axios from "axios";

export default function Signup(){

    const navigate = useNavigate();

    const [postInputs,setPostInputs] = useState<SigninInput>({
        username: "",
        password: ""
    });

    async function sendRequest(){
        try{
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signin` , postInputs)
            const jwt = response.data.jwt;
            localStorage.setItem("token" , jwt);
            navigate("/blogs")
        } catch(e) {
            alert("Username or password is wrong")
        }
    }

    return (
        <div className="grid grid-cols-2">
            <div className="flex justify-center h-screen place-items-center">
                <div>
                    <div className="text-center px-10">
                        <div className="text-3xl font-extrabold">
                            Login to your Account
                        </div>

                        <div className="text-slate-500">
                            Don't have an account?
                            <Link to="/" className="underline pl-2">Sign up</Link> 
                        </div>
                    </div>

                    <div className="pt-6">
                        <LabelledInput label="Username" placeholder="abc@gmail.com" onChange={ (e) => {
                            setPostInputs({...postInputs , username: e.target.value})
                        }}></LabelledInput>

                        <LabelledInput label="Password" type="password" placeholder="123456" onChange={ (e) => {
                            setPostInputs({...postInputs , password: e.target.value})
                        }}></LabelledInput>
                    </div>

                    <button onClick={sendRequest} type="button" className="mt-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Sign in</button>
                    
                </div>
            </div>


            <div className="invisible lg:visible">
                <Quote></Quote>
            </div>
        </div>
    )
}