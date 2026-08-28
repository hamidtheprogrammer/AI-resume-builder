"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { FaHome, FaBook, FaStar, FaPlusCircle } from "react-icons/fa";

const navs = [
  { name: "Home", link: "/builder", icon: <FaHome size={15} /> },
  {
    name: "My resumes",
    link: "",
    icon: <FaBook size={15} />,
  },
  { name: "Create Resume", link: "", icon: <FaPlusCircle size={15} /> },
  { name: "Review resume", link: "", icon: <FaStar size={15} /> },
];

const navlinkStyle =
  "flex gap-3 items-center text-xs cursor-pointer h-12 rounded-md px-3 flex items-center";

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="-translate-y-26">
      <li></li>
      <ul className="flex flex-col gap-3">
        {navs.map((n) => (
          <Link
            className={`${navlinkStyle}  ${
              pathName === n.link && "text-[#7549ED] bg-[#232039] border-l-1"
            }`}
            href={n.link}
          >
            <>{n.icon}</> {n.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
