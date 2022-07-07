import { networks } from "../../helpers/networks";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-32">
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <span className="text-slate-700 text-sm mb-2 dark:text-gray-300">
          Jilver Pacheco Rivera • @jilverprivera • All rights reserved © 2020-
          {new Date().getFullYear()}
        </span>
        <span className="text-slate-700 text-sm dark:text-gray-300">
          From Colombia ❤ to the world
        </span>
      </div>
    </div>
  );
};

export default Footer;
