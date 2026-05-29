"use client";

import Link from "next/link";
import Input from "@/components/Input";
import SocialButton from "@/components/SocialButton";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F3F2EE] p-4">
      <div className="bg-white rounded-[32px] w-full max-w-[390px] px-8 py-10 shadow-sm">

        <h1 className="text-center text-[24px] font-bold text-[#143300] mb-8">
          Login
        </h1>

        <div className="space-y-4">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
        </div>

        <div className="text-center mt-4">
          <button className="text-sm underline text-gray-500">
            Forgot Password?
          </button>
        </div>

        <button className="w-full h-14 rounded-full bg-[#143300] text-white mt-5 font-medium cursor-pointer">
          Login
        </button>

        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="mx-4 text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="space-y-4">
          <SocialButton
            text="Continue with Google"
            icon="/google.svg"
            onClick={() => alert("Google Login")}
          />

          <SocialButton
            text="Continue with Apple"
            icon="/apple.svg"
            green
            onClick={() => alert("Apple Login")}
          />

          <SocialButton
            text="Continue As Guest"
            onClick={() => alert("Guest Login")}
          />
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          Need an account?
          <Link
            href="/signup"
            className="ml-1 font-semibold text-[#143300]"
          >
            Sign up
          </Link>
        </p>

      </div>
    </main>
  );
}