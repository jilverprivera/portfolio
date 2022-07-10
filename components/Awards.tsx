import awards from "../data/awards.json";

const Awards = () => {
  return (
    <div className="w-full xs:block sm:block md:grid lg:grid md:grid-cols-4 lg:grid-cols-6 mt-10">
      <div>
        <h2 className="relative text-2xl font-semibold mb-5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:rounded-full after:h-0.5 after:bg-black dark:after:bg-zinc-500">
          Awards
        </h2>
      </div>
      <div className="col-span-5 grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:xs:grid-cols-2 gap-5 ">
        {awards.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-5 gap-x-2 rounded-md w-full border-2 border-zinc-200 dark:border-zinc-700 overflow-hidden"
          >
            <div className="w-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center">
              <span className="text-sm">{item.date}</span>
            </div>
            <div className="col-span-4 flex flex-col py-2">
              <span className=" text-sm font-medium">{item.location}</span>
              <h3 className=" text-base font-medium">{item.award}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
