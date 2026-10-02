import { auth } from "@/auth";
import Banner from "./Banner";
import QuickActions from "./QuickActions";
import Recent from "./Recent";
import Tips from "./Tips";
import { redirect } from "next/navigation";
import { FaBell } from "react-icons/fa";

export default async function page() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/sign-in");
  }
  return (
    <section>
      <section className="flex justify-between items-center">
        <div>
          <h1 className="font-bold xs:text-lg">
            Welcome back, {session.user.name?.split(" ")[0]}! 👋
          </h1>
          <p className="max-xs:text-xs text-sm">Let's build your dream resume today.</p>
        </div>
        <div><FaBell size={20} strokeWidth={40} fill="none"/></div>
      </section>
      <Banner />
      <QuickActions />
      <section className="flex max-md:flex-col gap-4 mt-4">
        <Recent />
        <Tips />
      </section>
    </section>
  );
}
