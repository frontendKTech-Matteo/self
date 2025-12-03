import { auth } from "@/auth";
import SignInWithGithub from "./SignInWithGithub";
import SignInWithGoogle from "./SignInWithGoogle";
import SignOut from "./SignOut";
import UserAvatar from "./UserAvatar";

export default async function Header() {
  const session = await auth();

  console.log(session);

  return (
    <header className="bg-red-300 mx-auto px-4 py-4">
      <div className="flex items-center justify-end gap-4">
        {session?.user ? (
          <>
            <UserAvatar name={session.user.name} image={session.user.image} />
            <SignOut />
          </>
        ) : (
          <>
            <SignInWithGithub />
            <SignInWithGoogle />
          </>
        )}
      </div>
    </header>
  );
}
