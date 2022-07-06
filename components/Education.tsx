import education from "../data/education.json";

const Education = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl pb-12">Education</h2>
      <div>
        {education.map((item, i) => (
          <div
            key={i}
            className="relative border-l-2 border-b-2 last:border-b-0 px-5 pt-12 pb-6"
          >
            <div className="absolute top-2 -left-5 flex items-center justify-start w-full h-6">
              <span className="bg-white text-xs tracking-wider border-2 rounded-full px-2 py-1">
                {item.date}
              </span>
              <span className="ml-6 text-xs text-stone-500">
                {item.academy}
              </span>
            </div>
            <h3 className=" text-xl font-medium">{item.title}</h3>
            <h3 className=" text-sm">{item.location}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
