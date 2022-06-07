import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Link as NavLink } from "react-scroll";

const routes = [
  { path: "about", name: "About Me" },
  { path: "portfolio", name: "Portfolio" },
  { path: "blog", name: "Blog" },
];

const Header = () => {
  const { pathname } = useRouter();
  return (
    <div className="w-full fixed backdrop-blur-sm z-50">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        {pathname === "/" ? (
          <NavLink
            to="banner"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className="cursor-pointer"
          >
            <Image
              src={`/icon.svg`}
              alt="Jilver Pacheco"
              width={60}
              height={60}
            />
          </NavLink>
        ) : (
          <Link href="/">
            <Image
              src={`/icon.svg`}
              alt="Jilver Pacheco"
              width={60}
              height={60}
            />
          </Link>
        )}

        <div>
          {routes.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className="font-normal"
              activeClass="font-bold"
            >
              <span className=" uppercase mx-2 text-sm cursor-pointer">
                {item.name}
              </span>
            </NavLink>
          ))}
          <span className=" uppercase mx-2 text-sm cursor-pointer">
            Connect
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
