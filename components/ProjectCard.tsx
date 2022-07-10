import Image from "next/image";
import Link from "next/link";

import { Project } from "../interfaces/projects";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ProjectCard = ({
  categories,
  cover_image,
  slug,
  description,
  title,
}: Project) => {
  const { cursorEnter, cursorLeave } = useContext(AppContext);
  return (
    <Link href={`/portfolio/${slug}`}>
      <a
        className="border-2 rounded-lg overflow-hidden border-zinc-200  dark:border-zinc-700"
        onMouseEnter={() => cursorEnter()}
        onMouseLeave={() => cursorLeave()}
      >
        <Image
          alt={title}
          src={cover_image}
          objectFit="cover"
          width={680}
          height={480}
          quality={100}
        />
        <div className="p-5">
          <div>
            {categories.map((item, i) => (
              <span className="text-sm" key={i}>
                {item}
              </span>
            ))}
          </div>
          <h2 className="mb-3 text-2xl font-ClashGroteskMedium leading-8 tracking-tight">
            {title}
          </h2>
          <p>{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
