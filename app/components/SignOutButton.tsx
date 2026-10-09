"use client";

import { signOut } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";

const SignOutButton = () => {
  return (
    <button
      className="text-xs cursor-pointer flex items-center sm:max-lg:justify-center gap-2"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <FaSignOutAlt /> <span className="sm:max-lg:hidden">Sign out</span>
    </button>
  );
};

export default SignOutButton;
