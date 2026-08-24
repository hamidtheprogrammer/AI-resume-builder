import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/builder");
  }

  return <div>
    <header>
      <Link href={"/sign-in"}>Sign in</Link>
    </header>
  </div>;
}
