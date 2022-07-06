import skills from "../data/skills.json";

const Skills = () => {
  return (
    <div className="pt-12">
      <h2 className="text-2xl pb-12">Skills</h2>
      <div className="w-full grid grid-cols-5">
        {skills.map((item, i) => (
          <div key={i}>
            <h3 className="text-lg mb-2">{item.name}</h3>
            <div>
              {item.skills.map((skill, i) => (
                <p
                  className="relative text-sm pl-3 before:content[] before:absolute before:h-0.5 before:w-2 before:rounded-full before:bg-black before:top-2/4 before:left-0 before:-translate-y-2/4"
                  key={i}
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
