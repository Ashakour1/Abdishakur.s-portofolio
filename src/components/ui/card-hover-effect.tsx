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
    image: string;
    techStacks: string[]; // Added tech stacks property
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
          to={item?.link}
          key={item?.link}
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
          <Card image={item.image} techStacks={item.techStacks}>
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
  image,
  techStacks,
}: {
  className?: string;
  children: React.ReactNode;
  image: string;
  techStacks: string[]; // Accept techStacks prop
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border   relative z-20"
      )}
    >
      {/* Display the image */}
      <div className="relative w-full border  h-48 overflow-hidden rounded-xl">
        <img
          src={image}
          alt="Card image"
          className="w-full h-full   object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="relative z-50">
        <div className="p-4">
          {children}
          <ul className="mt-10 flex flex-wrap gap-2">
            {techStacks.map((stack, idx) => (
              <li
                key={idx}
                className="text-3xl  text-black px-2 py-1 rounded-md"
              >
                {getIcon(stack)} {/* Call getIcon function */}
              </li>
            ))}
          </ul>
        </div>
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
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
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
        "mt-2 text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
