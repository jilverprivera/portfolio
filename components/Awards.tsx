import awards from "../data/awards.json";

const Awards = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl mb-12">Awards</h2>
      <div className="grid grid-cols-2 gap-4">
        {awards.map((item, i) => (
          <div
            key={i}
            className="relative border-2 border-stone-100 grid grid-cols-6 gap-x-2 rounded-lg"
          >
            <div className="bg-blue-50 flex items-center justify-center">
              <span className="text-sm">{item.date}</span>
            </div>
            <div className="col-span-5 p-2">
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
