"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBook, FaStar, FaPlusCircle } from "react-icons/fa";

export const navs = [
  { name: "Home", link: "/home", icon: <FaHome size={15} /> },
  {
    name: "My resumes",
    link: "",
    icon: <FaBook size={15} />,
  },
  { name: "Create Resume", link: "", icon: <FaPlusCircle size={15} /> },
  { name: "Review resume", link: "", icon: <FaStar size={15} /> },
];

const navlinkStyle =
  "text-xs cursor-pointer h-12 rounded-md px-3 sm:max-lg:w-12 sm:max-lg:flex";

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="-translate-y-26">
      <ul className="flex flex-col gap-3 sm:max-lg:items-center">
        {navs.map((n) => (
          <li
            key={n.name}
            className={`${navlinkStyle}  ${
              pathName === n.link && "text-[#7549ED] bg-[#232039] border-l-1 sm:max-lg:border-1"
            }`}
          >
            <Link href={n.link} className="size-full flex items-center gap-3">
              <>{n.icon}</> <span className="max-lg:hidden">{n.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
