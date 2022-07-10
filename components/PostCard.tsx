import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Post } from "../interfaces/posts";

const PostCard = ({ date, description, slug, tags, title }: Post) => {
  const { cursorEnter, cursorLeave } = useContext(AppContext);

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className="xs:block sm:block md:grid lg:grid xl:grid gap-5 grid-cols-6 mb-5 border-b-2 last:border-b-0 pb-5"
        onMouseEnter={() => cursorEnter()}
        onMouseLeave={() => cursorLeave()}
      >
        <div className="flex items-center justify-center">
          <span className="text-base font-ClashGroteskRegular">{date}</span>
        </div>
        <div className="md:col-span-2 lg:col-span-4 flex flex-col items-start justify-center xs:mt-5 sm:mt-5 md:mt-0 lg:mt-0 xl:mt-0 ">
          <h2 className="text-2xl font-ClashGroteskMedium">{title}</h2>
          <div className="mb-3">
            {tags.map((tag, i: number) => (
              <span
                key={i}
                className="xs:mr-2 sm:mr-2 md:mr-3 lg:mr-3 xlmr-3 last:mr-0 text-sm font-ClashGroteskMedium uppercase text-violet-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-base font-normal">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostCard;
