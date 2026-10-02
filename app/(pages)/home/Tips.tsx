import React from "react";

const Tips = () => {
  const tips = [
    {
      title: "Tailor to the job",
      details:
        "Customize your resume for each job application to increase your chances.",
    },{
      title: "Tailor to the job",
      details:
        "Customize your resume for each job application to increase your chances.",
    },{
      title: "Tailor to the job",
      details:
        "Customize your resume for each job application to increase your chances.",
    },
  ];
  return (
    <div className="flex-1 border border-black/10 bg-white rounded-md p-3">
      <span className="text-xs font-bold">AI Tips for Better Resumes</span>
      <ul className="mt-3 border-t border-black/10 pt-3 flex flex-col gap-2">
        {tips.map((t) => (
          <li key={t.title} className="flex flex-col">
            <span className="text-xs font-bold">{t.title}</span>
            <span className="text-xs opacity-70">{t.details}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tips;
