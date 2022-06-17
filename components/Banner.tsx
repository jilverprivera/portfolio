import Image from "next/image";

import Presentation from "./Presentation";

const Banner = () => {
  return (
    <div className=" principal max-w-screen-xl mx-auto flex flex-row items-center justify-between">
      <Presentation />
      <Image
        className="square"
        src={`/image.webp`}
        alt="Jilver Pacheco"
        width={284}
        height={412}
      />
    </div>
  );
};

export default Banner;
