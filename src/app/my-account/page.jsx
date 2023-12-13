"use client"
import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from 'next/link';
//import { useStore } from '@/stores';

const ecommerce_url = process.env.ECOMMERCE_URL;

const MyAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { updateUser } = useStore.getState();
  const router = useRouter()


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${ecommerce_url}auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
       // updateUser(data);
        toast.success(
          <p className="flex">
            Hello {data.firstName} {data.lastName}
          </p>,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
        router.push("/");
      } else {
        toast.error("The email or password you entered is incorrect.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Hata:", error);
    }

  };

  return (
    <div className="flex-1 flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Giriş Yap</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">Şifre</label>
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
            <Link href="/register">
              <label className="text-gray-600 mb-2 flex justify-end cursor-pointer">Register</label>
            </Link>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Giriş Yap
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
