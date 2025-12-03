import { signOut } from "@/auth";
import { LogOutIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function SignOut() {
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
