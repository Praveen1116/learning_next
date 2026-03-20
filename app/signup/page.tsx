"use client"

import axios from "axios"
import { useState } from "react"

export default function Signup()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center">
                <div className="border-2 border-grey-800 rounded-xl p-4">
                    <input type="text" placeholder="username" className="p-3 border-1 rounded-lg mb-2" onChange={(e) => setUsername(e.target.value)} />
                    <br />
                    <input type="password" placeholder="password" className="p-3 border-1 rounded-lg mb-3" onChange={(e) => setPassword(e.target.value)} />
                    
                    <br />
                    
                    <button className="text-center border-1 p-2 rounded-lg bg-teal-400 text-black ml-18"
                        onClick={async () => {
                            const response = axios.post("api/v1/user/signup", {
                                username,
                                password
                            });
                            alert("user created")
                        }}
                    >Signup</button>
                </div>
            </div>
        </>
    )
}