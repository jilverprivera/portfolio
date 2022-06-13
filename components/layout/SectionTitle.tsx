import Link from "next/link";

interface Props {
  title: string;
  type: string;
  path: string;
}

const SectionTitle = ({ title, type, path }: Props) => {
  return (
    <div
      className="
      max-w-screen-xl
    mx-auto flex items-center justify-between mt-6 mb-12
    xs:w-11/12 xs:flex-col
    sm:w-11/12 sm:flex-col
    md:w-11/12 md:flex-row
    lg:w-full lg:flex-row"
    >
      <h2
        className="text-4xl 
      xs:font-bold 
      sm:font-bold 
      md:font-medium 
      lg:font-semibold"
      >
        {title}
      </h2>
      <div className="flex flex-col items-center justify-center">
        <span className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          View all {type}
        </span>
        <Link href={path}>
          <a className="text-base text-zinc-600 hover:text-zinc-800 cursor-pointer dark:text-zinc-400 dark:hover:text-zinc-300 duration-200">
            jilverpacheco.vercel.app
            <span className="text-base font-bold">{path}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SectionTitle;
