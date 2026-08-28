import { ReactNode } from "react";
import SignOutButton from "../components/SignOutButton";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import Nav from "../components/Nav";



const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-[100dvh]">
      <header className="h-full flex flex-col justify-between w-60 px-2 py-9 bg-[#101522] text-white">
        LOGO
        <Nav/>
        <div className="shadow-[0px_10px_40px_rgba(0,0,0,0.1)] flex flex-col gap-4 border border-white/5 rounded-xl py-5 p-3">
          <div className="flex gap-2">
            <div className="rounded-sm size-8 flex justify-center items-center bg-[#7549ED]">
              A
            </div>
            <div>
              <h1 className="text-xs font-bold">Abdul</h1>
              <p className="text-[0.7rem]">abdul@gmail.com</p>
            </div>
          </div>
          <hr className="opacity-5" />
          <div className="flex items-center gap-2">
            <FaSignOutAlt /> <SignOutButton />
          </div>
        </div>
      </header>
      <section>{children}</section>
    </div>
  );
};

export default layout;
