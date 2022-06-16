import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Project } from "../interfaces/projects";

const LatestProjectsCard = ({
  categories,
  cover_image,
  slug,
  date,
  description,
  title,
  technologies,
}: Project) => {
  return (
    <div className="col-span-5 grid grid-cols-5 gap-x-4 ">
      <div className="col-span-2 row-span-2">
        <Link href={`/portfolio/${slug}`}>
          <a>
            <Image
              className="hover:scale-105 duration-200"
              src={cover_image}
              alt={title}
              width={512}
              height={384}
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <div className="col-span-3">
        <div className="mb-1">
          {categories.map((subitem, i: number) => (
            <span key={i} className="text-sm mr-1.5">
              {subitem}
            </span>
          ))}
        </div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <div className="mb-2 mt-1 flex flex-row">
          <span>{date}</span>
          <div className="ml-5">
            {technologies.map((subitem, i) => (
              <span key={i} className="text-sm mr-2">
                {subitem}
              </span>
            ))}
          </div>
        </div>
        <div className="w-4/5 leading-7 text-base">{description}</div>

        <Link href={`/portfolio/${slug}`}>
          <a className="flex flex-row items-center justify-start mt-5">
            <span className="text-base mr-2">View Project</span>
            <span className="w-10 h-10 rounded-full bg-black dark:bg-white flex flex-row items-center justify-center text-white dark:text-black text-xl">
              <BsArrowRight />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LatestProjectsCard;
