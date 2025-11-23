
import { Link } from "react-router-dom";
import { type Experience } from "../../types/experiences-type";


type ExperienceProps = {
  experienceItem: Experience;
};

const Experience = ({ experienceItem }: ExperienceProps) => {
  console.log(experienceItem.logo);

 
  return (
    <section>
      <div  className="flex justify-between items-center  px-2 py-2">
        <div className="flex">
          <h1 className="text-gray-600 text-lg">
            {experienceItem.time}
          </h1>
        </div>
        <div className="flex">
         <h1 className="text-gray-600 font-semibold hover:underline  text-lg">
            {experienceItem.position}
          </h1>
          <div>
            <Link className="mx-2"    to="/"   target="_blank"> 
                 <div  
              className="inline-flex items-center gap-2 rounded-lg bg-[#007BB7]/10 px-3 py-1 text-[#007BB7] transition hover:bg-[#007BB7]/20"
            >
              <img
                src={experienceItem.logo}
                alt={experienceItem.name}
                width={24}
                height={24}
                className="rounded-full object-contain"
              />
             <p className="text-sm font-medium">
                {experienceItem.name}
              </p>
            </div>
            </Link>

          </div>
           
        </div>
        
      </div>
    </section>
  );
};

export default Experience;
