
import { Link } from "react-router-dom";
import { type Experience } from "../../types/experiences-type";

type ExperienceProps = {
  experienceItem: Experience;
};

const Experience = ({ experienceItem }: ExperienceProps) => {
  return (
    <section className="relative overflow-hidden">
      {/* <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-indigo-500" /> */}

      <div className="flex flex-row justify-between  py-4 sm:py-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {experienceItem.time}
          </p>
          <h2 className="text-lg font-semibold text-slate-800">{experienceItem.position}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          <Link to="/" target="_blank" className="group">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-2 text-[#0a66c2] transition group-hover:border-blue-200 group-hover:bg-blue-100">
              <img
                src={experienceItem.logo}
                alt={experienceItem.name}
                width={26}
                height={26}
                className="h-[26px] w-[26px] rounded-full object-contain"
              />
              <p className="text-sm font-semibold">{experienceItem.name}</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
