import Link from "next/link";
import { motion } from "framer-motion";
import { Projects } from "../interfaces/projects";

const LatestProjects = ({ projects }: Projects) => {
  return (
    <div
      id="latest-projects"
      className="relative max-w-6xl min-h-screen flex flex-col items-start justify-start mx-auto"
    >
      <div className=" w-full pt-16 pb-8 flex items-center justify-between mb-8">
        <div>
          <h2 className="text-5xl font-bold">Latest Projects</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="uppercase text-sm text-gray-500 dark:text-gray-300 mb-2">
            Want to view all my projects?
          </span>
          <Link href="/portfolio">
            <span className="text-base cursor-pointer">
              jilverpacheco.vercel.app
              <span className="text-base text-violet-800 dark:text-yellow-500">
                /portfolio
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestProjects;
