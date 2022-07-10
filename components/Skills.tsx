import skills from "../data/skills.json";

const Skills = () => {
  return (
    <div className="w-full xs:block sm:block md:grid lg:grid md:grid-cols-4 lg:grid-cols-6 mt-10">
      <div className="xs:flex xs:items-center xs:justify-center sm:flex sm:items-center sm:justify-center md:block lg:block">
        <h2 className="relative text-2xl font-semibold mb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:rounded-full after:h-0.5 after:bg-black dark:after:bg-zinc-500">
          Skills
        </h2>
      </div>
      <div className="col-span-5 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:xs:grid-cols-4 gap-5 ">
        {skills.map((item, i) => (
          <div key={i} className="px-4">
            <h3 className="text-lg mb-2 text-center">{item.name}</h3>
            <div className="w-full xs:grid xs:grid-cols-2 sm:grid sm:grid-cols-3 md:flex md:flex-col md:items-start md:justify-center lg:flex lg:flex-col lg:items-start lg:justify-center">
              {item.skills.map((skill, i) => (
                <span
                  className="text-sm my-0.5 relative pl-3 before:content-[''] before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:h-2 before:w-2 before:rounded-full before:border-2 before:border-pink-500 before:dark:border-violet-500"
                  key={i}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
