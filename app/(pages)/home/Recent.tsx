import Link from "next/link";
import { FaBook } from "react-icons/fa";

const Recent = () => {
  const recentResumes = [
    {
      icon: <FaBook size={25} />,
      title: "Full stack Developer Resume",
      details: "Generated for Software Engineer at Google",
      matchScore: "90",
      dateCreated: "Aug 10, 2025",
      link: "",
    },
    {
      icon: <FaBook size={25} />,
      title: "Full stack Developer Resume",
      details: "Generated for Software Engineer at Google",
      matchScore: "90",
      dateCreated: "Aug 10, 2025",
      link: "",
    },
  ];

  function randomColor() {
    const colorPool = [
      "text-[#5B8DEF] bg-[#5B8DEF]/30",
      "text-[#38B66A] bg-[#38B66A]/30",
      "text-[#F4B740] bg-[#F4B740]/30",
    ];

    return colorPool[Math.round(Math.random() * 2)];
  }

  return (
    <div className="md:w-[55%] p-4 bg-white border border-black/10 rounded-md">
      <div className="flex justify-between text-xs">
        <span className="font-bold">Recent resumes</span>
        <button className="text-[#7549ED]">View all</button>
      </div>
      <ul className="flex flex-col mt-4">
        {recentResumes.map((r) => (
          <li key={r.title} className="border-t border-black/10 p-2">
            <Link href={r.link} className="flex gap-3 items-center">
              <div
                className={`size-10 ${randomColor()} flex justify-center items-center rounded-sm`}
              >
                <FaBook size={25} className={""} />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <span className="text-xs font-bold">{r.title}</span>
                <span className="text-xs opacity-70">{r.details}</span>
              </div>
              <div className="flex flex-col text-[0.65rem]">
                <span className="text-green-600 ">{r.matchScore}% Match</span>
                <span className="opacity-70">{r.dateCreated}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Link href={""} className="text-xs text-[#7549ED] border-t border-black/10 min-w-full"> View all resumes</Link>
    </div>
  );
};

export default Recent;
