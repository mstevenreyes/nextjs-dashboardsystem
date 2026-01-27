import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Login to your account
          </h1>
            <Field>
              <FieldLabel htmlFor="input-username">Username</FieldLabel>
              <Input id="input-username" type="text" placeholder="Enter your username" />
            </Field>
            <Field>
              <FieldLabel htmlFor="input-password">Password</FieldLabel>
              <Input id="input-password" type="password" placeholder="Enter your password" />
            </Field>
          <div>
            <Button>Log in</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
