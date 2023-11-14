"use client"
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { useStore } from '@/stores';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter()
    const { register } = useStore.getState();




    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address.", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        if (password.length < 8) {
            toast.error("The password must be at least 8 characters long.", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        const nameRegex = /^[A-Za-z]{2,}$/;
        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            toast.error(
                "First name and last name must contain at least two letters and cannot contain numbers or special characters.", {
                position: "top-center",
                autoClose: 3000,
            }
            );
            return;
        }

        if (password !== confirmPassword) {
            toast.error("The passwords do not match. Please check again.", {
                position: "top-center",
                autoClose: 3000,
            });
            return;
        }

        try {
            const response = await register({ email, password, firstName, lastName });
            if (response.status === "email") {
                toast.error("This email is already registered. Please use a different email address.", {
                    position: "top-center",
                    autoClose: 3000,
                });
            } else if (response.status === "success") {
                toast.success("You have successfully registered.", {
                    position: "top-center",
                    autoClose: 3000,
                });
                router.push("/my-account");
            } else {
                toast.error("An error occurred. Please try again.", {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.", {
                position: "top-center",
                autoClose: 3000,
            });
        }

        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Current Password:', confirmPassword);
    };

    return (
        <div className="flex-1 flex justify-center items-center bg-gray-50">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h1 className="text-2xl font-semibold mb-4">Register</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-600 mb-2">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value.replace(/\d+/g, ''))}
                            required
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-gray-600 mb-2">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value.replace(/\d+/g))}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="currentPassword" className="block text-gray-600 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="currentPassword"
                            name="currentPassword"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <p className="flex justify-end p-2">
                        <Link href="/my-account">Click here to login</Link> or <Link href="/password-reset">Forgot Password?</Link>
                    </p>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
