import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import experience from "../data/experience.json";

const Experience = () => {
  const { cursorEnter, cursorLeave } = useContext(AppContext);
  return (
    <div className="w-full xs:block sm:block md:grid lg:grid md:grid-cols-4 lg:grid-cols-6">
      <div>
        <h2 className="relative text-2xl font-semibold mb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:rounded-full after:h-0.5 after:bg-black dark:after:bg-zinc-500">
          Experience
        </h2>
      </div>
      <div className="col-span-5">
        {experience.map((item, i) => (
          <div
            key={i}
            className="relative my-5 pb-2 border-b-2 dark:border-zinc-700 last:border-b-0 first:mt-0 last:mb-0"
          >
            <div className="flex items-center justify-start w-full h-6">
              <span className="bg-white dark:bg-zinc-900 text-xs tracking-wider border-2 dark:border-zinc-700 rounded-md px-2 py-1">
                {item.date}
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-6 text-base tracking-wide font-ClashGroteskMedium text-pink-500 dark:text-violet-500"
                onMouseEnter={() => cursorEnter()}
                onMouseLeave={() => cursorLeave()}
              >
                @{item.company}
              </a>
            </div>
            <h3 className=" text-xl font-ClashGroteskMedium my-2">
              {item.role}
            </h3>
            <div>
              {item.activities.map((activity, i) => (
                <p
                  className="text-sm mb-2 last:mb-0 font-ClashGroteskRegular"
                  key={i}
                >
                  {activity}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
