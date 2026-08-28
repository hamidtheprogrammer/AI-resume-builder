import { auth } from "@/auth";
import SignOutButton from "../../components/SignOutButton";

export default async function page() {
  const session = await auth();

  if (session?.user) {
    return (
      <section>
        <h1>Welcome back, {session.user.name}</h1>
      </section>
    );
  }

  return <h1>Welcome to AI Resume Builder</h1>;
}
