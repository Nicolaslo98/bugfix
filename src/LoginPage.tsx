import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../auth/authStore";
import logo from "../src/assets/hkfyg_logo.jpg";

export function LoginPage() {
    const { setToken } = useAuthStore();
    const navigate = useNavigate();

    //useState
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    //submitHandler
    const submitHandler = async () => {
        console.log("username:", username);
        console.log("password:", password);
        try {
            const response = await
                fetch("http://localhost:4000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }
                );
            if (response.ok) {
                console.log("login successful");
                const data = await response.json();
                setToken(data.token);
                navigate("/activity", { replace: true });
                // {replace: true} mean cannot back to login page
            } else {
                console.log("login failed");
                setError("login failed");
            }
        } catch (error) {
            console.error("login failed:", error);
        }
    }

    //HTML page
    return (
        <div className="tw-bg-black">
            <div className="tw-m-30">
                <img src={logo} alt="Logo" />
            </div>
            <div className="tw-text-orange-500 tw-font-bold tw-text-4xl tw-flex tw-justify-center">
                Booking System
            </div>
            
            <div className="tw-flex tw-min-h-10 tw-items-center tw-justify-center tw-bg-white tw-p-12">
                <div className="">
                    <form action="">
                        <div className="tw-max-w-sm tw-rounded-3xl tw-bg-gradient-to-b tw-from-sky-300 tw-to-purple-500 tw-p-px dark:tw-from-gray-800 dark:tw-to-transparent">
                            
                            <div className="tw-rounded-[calc(1.5rem-1px)] tw-bg-white tw-px-10 tw-p-12 dark:tw-bg-gray-900">
                                <div>
                                    <h1 className="tw-text-xl tw-font-semibold tw-text-gray-800 dark:tw-text-white">Login to your account</h1>
                                </div>

                                <div className="tw-mt-8 tw-space-y-8">
                                    <div className="tw-space-y-6">
                                        <input className="tw-w-full tw-bg-transparent tw-text-gray-600 dark:tw-text-white dark:tw-border-gray-700 tw-rounded-md tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-placeholder-gray-600 invalid:tw-border-red-500 dark:tw-placeholder-gray-300" 
                                        placeholder="Your username" 
                                        id="username"
                                        onChange={(e) => setUsername(e.target.value)} />

                                        <input className="tw-w-full tw-bg-transparent tw-text-gray-600 dark:tw-text-white dark:tw-border-gray-700 tw-rounded-md tw-border tw-border-gray-300 tw-px-3 tw-py-2 tw-text-sm tw-placeholder-gray-600 invalid:tw-border-red-500 dark:tw-placeholder-gray-300" 
                                        placeholder="Your Password" 
                                        id="password" 
                                        onChange={(e) => setPassword(e.target.value)}/>
                                    </div>

                                    <button className="tw-h-9 tw-px-3 tw-w-full tw-bg-blue-600 hover:tw-bg-blue-700 active:tw-bg-blue-800 focus:tw-bg-blue-700 tw-transition tw-duration-500 tw-rounded-md tw-text-white"
                                    onClick={submitHandler}>
                                        Login
                                    </button>
                                </div>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}