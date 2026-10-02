import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Sidebar from "../components/Sidebar";
import BottomBar from "../components/BottomBar";

export default async function layout({ children }: { children: ReactNode }) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/sign-in");
  }
  return (
    <div className="flex h-[100dvh]">
      <Sidebar />
      <div className="px-5 py-3 flex-1 h-full overflow-y-scroll">
        <div className="mb-14">
          {children}
        </div>
        <BottomBar/>
      </div>
    </div>
  );
}
