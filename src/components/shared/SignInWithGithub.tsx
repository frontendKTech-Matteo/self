import { signIn } from "@/auth";
import { GithubIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function SignInWithGithub() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <Button type="submit" variant="default">
        Sign In With <GithubIcon />
      </Button>
    </form>
  );
}
