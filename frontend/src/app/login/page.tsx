import SocialButton from "@/components/SocialButton";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm p-6">

        <h1 className="text-4xl font-bold text-center text-green-900 mb-10">
          Login
        </h1>

        <input
          placeholder="Email"
          className="w-full border p-3 rounded-full mb-4"
        />

        <input
          placeholder="Password"
          type="password"
          className="w-full border p-3 rounded-full"
        />

        <div className="text-right mt-2">
          <button className="text-sm underline">
            Forgot Password?
          </button>
        </div>

        <button
          className="
          w-full
          mt-6
          py-3
          rounded-full
          bg-green-900
          text-white"
        >
          Login
        </button>

        <div className="my-6 text-center text-gray-500">
          OR
        </div>

        <div className="space-y-4">
          <SocialButton text="Continue with Google" />
          <SocialButton text="Continue with Apple" />
          <SocialButton text="Continue as Guest" />
        </div>

      </div>
    </main>
  );
}