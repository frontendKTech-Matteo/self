import SignInWithGithub from "./SignInWithGithub";
import SignInWithGoogle from "./SignInWithGoogle";

import { auth } from "@/auth";
import Image from "next/image";

import { signOut } from "@/auth";
import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" variant="destructive">
        <LogOutIcon /> Sign Out
      </Button>
    </form>
  );
}

export default async function Header() {
  const session = await auth();

  console.log(session);

  return (
    <header className="bg-red-300 mx-auto px-4 py-4">
      {session?.user ? (
        <div className="flex items-center justify-end gap-4">
          <div className="flex justify-center items-center gap-2">
            <p className="text-sm font-medium">{session.user.name}</p>
            {session.user.image && (
              <Image
                src={session.user.image}
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
          </div>
          <SignOut />
        </div>
      ) : (
        <div className="flex items-end justify-end gap-2">
          <SignInWithGithub />
          <SignInWithGoogle />
        </div>
      )}
    </header>
  );
}
