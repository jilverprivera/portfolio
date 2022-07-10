const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-20 pb-8 bg-white dark:bg-zinc-900 ">
      <div className="xs:w-11/12 sm:w-11/12 md:w-full lg:w-full flex flex-col justify-center items-center ">
        <span className="text-slate-700 text-sm mb-2 dark:text-gray-300 text-center">
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
