import { Project, Projects } from "../interfaces/projects";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Projects = ({ projects }: Projects) => {
  const { cursorEnter, cursorLeave } = useContext(AppContext);

  return (
    <motion.section className="w-full my-10 bg-zinc-100 dark:bg-zinc-800">
      <div className="max-w-screen-xl mx-auto xs:w-11/12 sm:w-11/12 md:w-11/12 lg:w-11/12 xl:w-full grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3">
        <div className="w-full flex flex-col justify-center xs:items-center sm:items-center md:items-center lg:items-start xl:items-start xs:my-10 sm:my-10 md:my-10 lg:my-0 xl:my-0">
          <span className="text-2xl font-ClashGroteskMedium xs:text-center sm:text-center md:text-center lg:text-left xl:text-left">
            Take a look at what I&apos;ve created and inspired.
          </span>
          <Link href={"/portfolio"}>
            <a
              className="border-2 border-pink-500 dark:border-violet-500  mt-5 px-5 py-2.5 rounded-md"
              onMouseEnter={() => cursorEnter()}
              onMouseLeave={() => cursorLeave()}
            >
              <span>View all projects</span>
            </a>
          </Link>
        </div>
        <div className="grid lg:col-span-2 xl:col-span-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xs:gap-y-5 sm:gap-y-5 md:gap-y-0 lg:gap-y-0 xl:gap-y-0">
          {projects.map((project: Project, i: number) => (
            <Link href={`/portfolio/${project.slug}`} key={project.slug}>
              <a
                className="h-60 overflow-hidden"
                onMouseEnter={() => cursorEnter()}
                onMouseLeave={() => cursorLeave()}
              >
                <Image
                  className="hover:scale-105 duration-200"
                  src={project.cover_image}
                  alt={project.title}
                  width={400}
                  height={360}
                  objectFit="cover"
                  quality={100}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
