"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    try {

      const response = await fetch(
        "http://localhost:8081/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      if (!response.ok) {
        alert("Signup Failed");
        return;
      }

      alert("Signup Successful");

      router.push("/login");

    } catch (error) {

      console.error(error);

      alert("Signup Failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F3F2EE] p-4">

      <div className="bg-white rounded-[32px] w-full max-w-[390px] px-8 py-10 shadow-sm">

        <h1 className="text-center text-[24px] font-bold text-[#143300] mb-8">
          Sign Up
        </h1>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-14 px-5 rounded-full border border-[#ECECEC]"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 px-5 rounded-full border border-[#ECECEC]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-14 px-5 rounded-full border border-[#ECECEC]"
          />

        </div>

        <button
          onClick={handleSignup}
          className="w-full h-14 rounded-full bg-[#143300] text-white mt-5 font-medium cursor-pointer"
        >
          Create Account
        </button>

      </div>

    </main>
  );
}