import experience from "../data/experience.json";

const Experience = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl pb-12">Experience</h2>
      <div>
        {experience.map((item, i) => (
          <div
            key={i}
            className="relative border-l-2 border-b-2 last:border-b-0 px-5 pt-12 pb-6"
          >
            <div className="absolute top-2 -left-5 flex items-center justify-start w-full h-6">
              <span className="bg-white text-xs tracking-wider border-2 rounded-full px-2 py-1">
                {item.date}
              </span>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-6 text-xs text-stone-500"
              >
                @{item.company}
              </a>
            </div>
            <h3 className=" text-xl font-medium">{item.role}</h3>
            <div>
              {item.activities.map((activity, i) => (
                <p className="text-sm font-light" key={i}>
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
