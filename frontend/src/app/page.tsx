import Link from "next/link";
import SocialButton from "@/components/SocialButton";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm p-6 text-center">

        <div className="h-52 flex items-center justify-center">
          IMAGE
        </div>

        <h1 className="text-4xl font-bold text-green-900">
          Private Coaching
        </h1>

        <p className="mt-4 text-gray-600">
          Add one-on-one confidential sessions.
        </p>

        <div className="flex gap-2 my-8">
          <div className="h-2 flex-1 bg-green-400 rounded"></div>
          <div className="h-2 flex-1 bg-green-400 rounded"></div>
          <div className="h-2 flex-1 bg-gray-200 rounded"></div>
        </div>

        <div className="space-y-4">
          <SocialButton text="Continue with Google" />
          <SocialButton text="Continue with Apple" />
          <SocialButton text="Continue as Guest" />
        </div>

        <Link
          href="/login"
          className="block mt-8 text-sm"
        >
          Already have an account? Login
        </Link>

      </div>
    </main>
  );
}