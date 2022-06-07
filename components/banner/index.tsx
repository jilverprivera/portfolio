import { Link as NavLink } from "react-scroll";
import { BsArrowRight } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-center max-w-7xl mx-auto">
      <h1 className="text-xl mb-3">I&apos;m Jilver Pacheco</h1>
      <h2 className="text-7xl font-bold mb-3">Software Developer</h2>
      <div className="w-2/6">
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
        className="font-normal mt-7 flex items-center justify-center cursor-pointer"
      >
        <span className="mr-2">Read more</span>
        <span className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full">
          <BsArrowRight />
        </span>
      </NavLink>
    </div>
  );
};

export default Banner;
