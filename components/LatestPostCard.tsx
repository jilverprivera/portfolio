import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Post } from "../interfaces/posts";

const LatestPostCard = ({ date, tags, slug, description, title }: Post) => {
  return (
    <div className="cursor-grab blog-square square mr-10 p-6 rounded-lg bg-white dark:bg-zinc-800">
      <span className="text-sm  text-gray-400">{date}</span>
      <h2 className="text-xl font-bold leading-7 mt-2">{title}</h2>
      <div className="my-2">
        {tags.map((item, i) => (
          <span key={i} className="text-sm text-gray-400 mr-2">
            {item}
          </span>
        ))}
      </div>
      <p className="leading-7 text-base mb-8">{description}</p>

      <Link href={`/blog/${slug}`}>
        <a className="flex items-center justify-start">
          <span className="text-md mr-2">Read more</span>
          <span className="w-10 h-10 rounded-full flex items-center justify-center bg-black text-white">
            <BsArrowRight />
          </span>
        </a>
      </Link>
    </div>
  );
};

export default LatestPostCard;
