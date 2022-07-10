import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import EDUCATION from "../helpers/education";

const Education = () => {
  const { cursorEnter, cursorLeave } = useContext(AppContext);
  return (
    <div className="w-full xs:block sm:block md:grid lg:grid md:grid-cols-4 lg:grid-cols-6 my-10">
      <div>
        <h2 className="relative text-2xl font-semibold mb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:rounded-full after:h-0.5 after:bg-black dark:after:bg-zinc-500">
          Education
        </h2>
      </div>
      <div className="col-span-5 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:xs:grid-cols-2 gap-5 ">
        {EDUCATION.map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            onMouseEnter={() => cursorEnter()}
            onMouseLeave={() => cursorLeave()}
            className="grid grid-cols-5 gap-x-2 rounded-md w-full border-2 border-zinc-200 dark:border-zinc-700 overflow-hidden"
          >
            <div className="w-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center ">
              <span className="text-4xl text-zinc-400 dark:text-zinc-600">
                {item.icon}
              </span>
            </div>
            <div className="col-span-4 flex flex-col py-2">
              <div className="w-full flex items-center justify-between">
                <span className="text-xs font-ClashGroteskRegular">
                  {item.date}
                </span>
                <span className="text-xs mr-3">{item.location}</span>
              </div>
              <h3 className="text-lg font-ClashGroteskMedium">{item.title}</h3>
              <span className="text-xs font-ClashGroteskRegular mb-2">
                {item.academy}
              </span>
              <p className="text-base font-ClashGroteskRegular">{item.data}</p>
              <div></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Education;
