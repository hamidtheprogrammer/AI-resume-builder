import Link from "next/link";
import { FaArrowRight, FaBook, FaKey, FaPagelines, FaPlusCircle } from "react-icons/fa";
import { FaNoteSticky, FaStar } from "react-icons/fa6";

const QuickActions = () => {
  const actions = [
    {
      title: "Create Resume",
      body: "Start building a new resume with AI assistance",
      link: "",
      bgcolor: "bg-[#7549ED]/30",
      color: "text-[#7549ED]",
      icon:<FaPlusCircle size={25}/>
    },
    {
      title: "My Resume",
      body: "View and management all your generated resumes",
      link: "",
      bgcolor: "bg-[#5B8DEF]/30",
      color: "text-[#5B8DEF]",
      icon:<FaBook size={25}/>
    },
    {
      title: "AI Review",
      body: "Get AI-powered feedback on your resume",
      link: "",
      bgcolor: "bg-[#38B66A]/30",
      color: "text-[#38B66A]",
      icon:<FaStar size={25}/>
    },
    {
      title: "Templates",
      body: "Choose from professional resume templates",
      link: "",
      bgcolor: "bg-[#F4B740]/30",
      color: "text-[#F4B740]",
      icon:<FaNoteSticky size={25}/>
    },
  ];
  return (
    <section className="mt-4">
      <span className="text-sm font-bold">Quick Actions</span>
      <ul className="flex flex-wrap py-1 max-lg:gap-5 gap-8 mt-2">
        {actions.map((action) => (
          <li
            key={action.title}
            className="bg-white border-1 border-black/10 rounded-md p-3 min-w-40 flex-1"
          >
            <Link href={action.link} className="relative flex flex-col gap-2 p">
              <div
                className={`rounded-[999px] ${action.bgcolor} ${action.color} size-10 flex justify-center items-center`}
              >
                {action.icon}
              </div>
              <span className="text-xs font-bold">{action.title}</span>
              <span className="text-xs opacity-70">{action.body}</span>
              <FaArrowRight className="opacity-70 absolute right-1 top-1/2 -translate-y-1/2"/>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default QuickActions;
