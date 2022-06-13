import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Project } from "../interfaces/projects";

const ProjectCard = ({
  categories,
  cover_image,
  slug,
  date,
  description,
  title,
  technologies,
}: Project) => {
  return (
    <div
      className="mx-auto pb-5 mb-5 overflow-hidden 
      xs:w-11/12 xs:flex xs:flex-col
      sm:w-11/12 sm:flex sm:flex-col 
      md:w-11/12 md:grid md:grid-cols-5 
      lg:w-full  lg:grid lg:grid-cols-3 border-b  border-gray-300 dark:border-zinc-800"
    >
      <div className="md:col-span-2 lg:col-span-1 ">
        <Link href={`/portfolio/${slug}`}>
          <a className="">
            <Image
              className="rounded-md bg-gray-300 hover:scale-105 duration-200"
              src={cover_image}
              alt={title}
              width={420}
              height={300}
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-col items-start justify-start xs:ml-0 xs:mt-1 xs:p-3 md:col-span-3 lg:col-span-2 lg:ml-5 lg:mt-0 lg:p-0">
        <div>
          {categories.map((item, i) => (
            <span
              key={i}
              className="text-sm text-gray-600 dark:text-stone-400 mr-2 "
            >
              {item}
            </span>
          ))}
        </div>
        <h3 className="font-bold xs:text-2xl sm:text-2xl md:text-3xl lg:text-3xl ">
          {title}
        </h3>
        <div className="flex xs:flex-col lg:flex-row lg:items-center xs:items-start xs:justify-center lg:justify-start mt-2 xs:mb-3 lg:mb-4">
          <span className="mr-6 lg:mt-0 font-normal text-gray-600 dark:text-stone-400 text-sm">
            {date}
          </span>
          <div className="xs:mt-1 lg:mt-0">
            {technologies.map((item, i) => (
              <span
                key={i}
                className="text-sm text-black dark:text-gray-300 mr-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <p className="xs:w-11/12 lg:w-10/12 text-base leading-7">
          {description}
        </p>
        <Link href={`/portfolio/${slug}`}>
          <a className="flex items-center justify-center mt-6">
            <span className="text-md mr-2">View project</span>
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white">
              <BsArrowRight />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
