import Image from "next/image";
import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="mt-5 bg-[linear-gradient(135deg,#f6efff_0%,#f8f5ff_50%,#eef4ff_100%)] rounded-lg flex max-sm:p-4 p-8 overflow-hidden">
      <div className="relative z-2 flex flex-col gap-2 flex-1">
        <span className="text-[0.5rem] w-fit text-[#7549ED] font-bold tracking-widest bg-black/5 rounded-full p-1">
        AI POWERED
      </span>
      <h1 className="text-xl lg:text-3xl text-balance max-xs:text-lg font-bold w-72">Create a resume that gets you hired</h1>
      <p className="text-xs lg:text-sm max-xs:text-[0.65rem] opacity-75 max-w-sm leading-5">
        Our AI analyzes job description and optimizes your resume to stand out
        to recruiters.
      </p>
      <button className="mt-5 bg-gradient-to-r from-[#6D3FE8] via-[#7C46EC] to-[#8550ED] text-white text-xs flex items-center justify-center gap-1 rounded-sm w-42 h-10">
        Create New Resume <FaArrowCircleRight />
      </button>
      </div>
      <div className="max-md:w-[45%] flex-1 relative h-58">
        <div className="h-120 w-90  bg-white absolute max-xs:-translate-x-30 max-xs:opacity-10">
            <Image width={200} height={400} alt="resume-image" className="size-full rounded-xl" src={"/resume.png"}/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
