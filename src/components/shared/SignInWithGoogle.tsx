import { signIn } from "@/auth";
import { GlobeIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit" variant="default">
        Sign In With <GlobeIcon />
      </Button>
    </form>
  );
}
