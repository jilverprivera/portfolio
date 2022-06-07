import { Link as NavLink } from "react-scroll";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="min-h-screen flex items-center justify-between max-w-7xl mx-auto">
      <div
        className="
      flex flex-col items-start justify-center "
      >
        <h1 className="text-xl mb-3">I&apos;m Jilver Pacheco</h1>
        <h2 className="text-7xl font-bold mb-3 dark:text-yellow-500 text-violet-800">
          <Typewriter
            options={{
              strings: [
                "Software Developer",
                "Electronic Engineer",
                "Robotics Enthusiast",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="w-5/6">
          <p className="text-base font-normal">
            Welcome to my little space on the WWW, where I show my projects and
            talk about what I like.
          </p>
        </div>
        <NavLink
          to={"about"}
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="font-normal mt-10 flex items-center justify-center cursor-pointer"
        >
          <span className="mr-2">Read more</span>
          <span className="w-10 h-10 flex items-center justify-center bg-black dark:bg-yellow-500 text-white dark:text-black rounded-full">
            <BsArrowRight />
          </span>
        </NavLink>
      </div>
      <div className="overflow-hidden rounded-full mr-3">
        <Image
          src={`/image.webp`}
          alt="Jilver Pacheco"
          width={412}
          height={512}
        />
      </div>
    </div>
  );
};

export default Banner;
