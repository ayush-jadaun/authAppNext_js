"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation"
import axios from "axios"
import Link from "next/link";

export default function SignUpPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: ""
    })
    const [loading, setLoading] = useState(false);

    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            router.push("/login");
        } catch (error) {
            console.log("Signup failed", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-2xl font-bold mb-8">
                {loading ? "Processing" : "Signup"}
            </h1>
            <div className="flex flex-col space-y-4 w-[300px]">
                <div className="flex flex-col">
                    <label htmlFor="username" className="mb-1">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        placeholder="Enter username"
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder="Enter email"
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder="Enter password"
                        className="p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <button
                    onClick={onSignup}
                    className="p-2 border border-gray-300 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-400"
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Signup"}
                </button>
                <Link
                    href="/login"
                    className="text-center text-blue-500 hover:text-blue-600"
                >
                    Already have an account? Login
                </Link>
            </div>
        </div>
    );
}
