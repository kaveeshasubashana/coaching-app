"use client";

import Image from "next/image";
import Link from "next/link";
import SocialButton from "@/components/SocialButton";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F3F2EE] p-4 lg:p-10">
      <div
        className="
          bg-white
          rounded-[32px]
          shadow-sm
          w-full
          max-w-[390px]
          lg:max-w-[850px]
          px-8
          lg:px-20
          py-10
          lg:py-16
          transition-all
        "
      >
        {/* Illustration */}
        <div className="flex justify-center mb-8 lg:mb-10">
          <Image
            src="/coaching.png"
            alt="Coaching"
            width={320}
            height={320}
            priority
            className="w-[180px] lg:w-[320px] h-auto"
          />
        </div>

        {/* Title */}
        <h1 className="text-center text-[24px] lg:text-[42px] font-bold text-[#143300]">
          Private Coaching
        </h1>

        {/* Description */}
        <p className="text-center text-[15px] lg:text-[20px] text-gray-600 mt-4 leading-7">
          Add one-on-one, confidential sessions for only
          <br />
          $35 per session
        </p>

        {/* Progress Bar */}
        <div className="flex gap-3 mt-10 mb-10 max-w-[500px] mx-auto">
          <div className="h-[4px] flex-1 rounded-full bg-[#9BE564]" />
          <div className="h-[4px] flex-1 rounded-full bg-[#9BE564]" />
          <div className="h-[4px] flex-1 rounded-full bg-[#E8E8E8]" />
        </div>

        {/* Buttons */}
        <div className="space-y-4 max-w-[500px] mx-auto">
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

        {/* Login Link */}
        <p className="text-center text-sm lg:text-base text-gray-500 mt-10">
          Already have an account?
          <Link
            href="/login"
            className="ml-1 font-semibold text-[#143300]"
          >
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}