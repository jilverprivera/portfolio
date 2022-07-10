import { useContext } from "react";
import { AppContext } from "../context/AppContext";

interface Props {
  setSearchedArticles: (arg: string) => void;
}

const PostSearch = ({ setSearchedArticles }: Props) => {
  const { cursorEnter, cursorLeave } = useContext(AppContext);
  return (
    <div
      className="relative mx-auto mb-10 max-w-xl w-full  "
      onMouseEnter={() => cursorEnter()}
      onMouseLeave={() => cursorLeave()}
    >
      <input
        aria-label="Search articles"
        type="text"
        onChange={(e) => setSearchedArticles(e.target.value)}
        placeholder="Search articles"
        className="relative w-full mx-auto px-4 py-2 text-gray-900  bg-white border border-gray-200 rounded-md dark:border-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:text-gray-100"
      />
      <svg
        className="absolute w-5 h-5 text-gray-400 right-3 top-2/4 -translate-y-2/4 dark:text-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default PostSearch;
