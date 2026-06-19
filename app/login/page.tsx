"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/admin");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white">

      <div
        className="
        w-full
        max-w-md
        bg-white
        p-10
        rounded-[32px]
        border
        border-blue-100
        shadow-[0_25px_80px_rgba(0,90,156,0.12)]
        "
      >

        <h1 className="text-4xl font-black text-[#003F73] text-center mb-8">
          Kangiten Admin
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 border border-blue-100 rounded-2xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 border border-blue-100 rounded-2xl"
          />

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-[#003F73]
            text-white
            py-4
            rounded-2xl
            font-bold
            "
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

      </div>

    </main>
  );
}