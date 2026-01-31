import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 dark:bg-zinc-950 px-4">
      <main className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={80}
            height={20}
            priority
          />
        </div>

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Log in to your account to continue
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          <Field>
            <FieldLabel htmlFor="input-username">Username</FieldLabel>
            <Input
              id="input-username"
              type="text"
              placeholder="you@example.com"
              className="mt-1"
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="input-password">Password</FieldLabel>
            <Input
              id="input-password"
              type="password"
              placeholder="••••••••"
              className="mt-1"
            />
          </Field>

          {/* Action */}
          <Link href="/dashboard" className="block">
            <Button className="w-full">
              Log in
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Your App. All rights reserved.
        </p>
      </main>
    </div>
  );
}
