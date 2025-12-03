import SignInWithGithub from "./SignInWithGithub";
import SignInWithGoogle from "./SignInWithGoogle";

export default function Header() {
  return (
    <header className="bg-red-300 mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <SignInWithGithub />
        <SignInWithGoogle />
      </div>
    </header>
  );
}
