"use client"
import { usePathname } from "next/navigation";
import { FaHome, FaBook, FaStar, FaPlusCircle } from "react-icons/fa";
import Link from "next/link";

const BottomBar = () => {

 const navs = [
      { name: "Home", link: "/home", icon: <FaHome size={20} strokeWidth={30} fill="none" /> },
      {
        name: "My resumes",
        link: "",
        icon: <FaBook size={20} strokeWidth={30} fill="none" />,
      },
      { name: "Create", link: "", icon: <FaPlusCircle size={20} strokeWidth={30} fill="none" /> },
      { name: "Review", link: "", icon: <FaStar size={20} strokeWidth={30} fill="none" /> },
    ];

    const navlinkStyle = ""

    const pathName = usePathname();
  return (
    <nav className="sm:hidden fixed px-5 bottom-0 left-0  w-full h-14 ">
      <ul className="h-full flex justify-around items-center border rounded-t-md border-black/10 bg-white">
        {navs.map((n) => (
          <li
            key={n.name}
            className={`${navlinkStyle}  ${
              pathName === n.link && "text-[#7549ED]"
            }`}
          >
            <Link href={n.link} className="size-full flex flex-col items-center gap-1">
              <>{n.icon}</> <span className="text-[0.5rem]">{n.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default BottomBar
