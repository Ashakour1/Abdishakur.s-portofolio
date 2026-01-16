import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaCcStripe,
  FaDatabase,
  FaJava,
  FaNode,
  FaPython,
  FaReact,
} from "react-icons/fa6";
// import { FcNext } from "react-icons/fc";
import { DiPostgresql } from "react-icons/di";
import { SiRailway } from "react-icons/si";


import { RiNextjsFill, RiSvelteFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandSupabase, TbBrandTypescript } from "react-icons/tb";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image?: string;
    techStacks: string[]; // Added tech stacks property
    date?: string;
    category?: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          to={item?.link || "#"}
          key={idx}
          className="relative group block h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-gray-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card techStacks={item.techStacks} date={item.date} category={item.category}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="mt-4"></div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  children,
  techStacks,
  date,
  category,
}: {
  className?: string;
  children: React.ReactNode;
  techStacks: string[]; // Accept techStacks prop
  date?: string;
  category?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full p-5 overflow-hidden bg-white border border-gray-200 relative z-20 shadow-sm"
      )}
    >
      <div className="relative z-50">
        {/* Header with date and category */}
        <div className="flex items-center justify-between mb-4">
          {date && (
            <span className="text-xs text-gray-600">{date}</span>
          )}
          {category && (
            <span className="text-xs px-3 py-1 border border-blue-300 text-blue-500 rounded-md font-medium">
              {category}
            </span>
          )}
        </div>
        {children}
        <ul className="mt-6 flex flex-wrap gap-2">
          {techStacks.map((stack, idx) => (
            <li
              key={idx}
              className="text-2xl text-black"
            >
              {getIcon(stack)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const getIcon = (stack: string) => {
  switch (stack) {
    case "Stripe":
      return <FaCcStripe className="w-7 h-7" />;
    case "TypeScript":
      return <TbBrandTypescript className="w-7 h-7" />;
    case "supabase":
      return <TbBrandSupabase className="w-7 h-7" />;
    case "MongoDb":
      return <BiLogoMongodb className="w-7 h-7" />;
    case "Svelte":
      return <RiSvelteFill className="w-7 h-7" />;
    case "React":
      return <FaReact className="w-7 h-7" />;
    case "Next.js":
      return <RiNextjsFill className="w-7 h-7" />;
    case "Node.js":
      return <FaNode className="w-7 h-7" />;
    case "Python":
      return <FaPython className="w-7 h-7" />;
    case "Java":
      return <FaJava className="w-7 h-7" />;
    case "Database":
      return <FaDatabase className="w-7 h-7" />;
        case "PostgreSQL":
      return <DiPostgresql className="w-7 h-7" />;
        case "Railway":
      return <SiRailway className="w-7 h-7" />;
    default:
      return null;
  }
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-semibold tracking-wide text-lg mb-3", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-gray-700 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
