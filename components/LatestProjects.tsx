import Link from "next/link";
import Image from "next/image";

import { Projects, Project } from "../interfaces/projects";

const LatestProjects = ({ projects }: Projects) => {
  return (
    <div className="relative max-w-7xl min-h-screen flex flex-col items-start justify-start mx-auto">
      <div className="w-full mx-auto pt-10 flex items-center justify-between mb-5">
        <h2 className="text-4xl font-semibold mb-3">Latest projects</h2>
        <div className="flex flex-col items-center justify-center">
          <span className="uppercase text-sm text-gray-500 dark:text-gray-300 mb-2">
            View all projects
          </span>
          <Link href="/portfolio">
            <a>
              <span className="text-base cursor-pointer">
                jilverpacheco.vercel.app
                <span className="text-base text-violet-800 dark:text-yellow-500">
                  /portfolio
                </span>
              </span>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full principal">
        {projects.map((project: Project, index: number) => {
          console.log(new Date(project.date));
          return (
            <div
              key={project.slug}
              className="my-8 relative flex flex-row items-start justify-start project-card bor"
            >
              <Link href={`/portfolio/${project.slug}`}>
                <a className="mb-6">
                  <Image
                    className="rounded-md"
                    src={project.cover_image}
                    alt={project.title}
                    width={420}
                    height={300}
                    objectFit="cover"
                  />
                </a>
              </Link>
              <div className="ml-8">
                <div>
                  {project.categories.map((item, i) => (
                    <span key={i} className="text-sm text-gray-400 mr-2">
                      {item}
                    </span>
                  ))}
                </div>
                <h3 className="font-bold text-2xl">{project.title}</h3>
                <div className="flex mt-4 mb-8">
                  <span className="mr-8 font-semibold">{project.date}</span>
                  <div>
                    {project.technologies.map((item, i) => (
                      <span key={i} className="text-sm text-gray-400 mr-2">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-description">
                  <p className="leading-7">{project.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestProjects;
