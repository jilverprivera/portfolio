import { useTheme } from "next-themes";
import { useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AppContext } from "../../context/AppContext";

interface Props {
  isMounted: boolean;
  setIsMounted: (arg: boolean) => void;
}
export const Theme = ({ isMounted, setIsMounted }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const { cursorEnter, cursorLeave } = useContext(AppContext);
  if (!isMounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        onMouseEnter={() => cursorEnter()}
        onMouseLeave={() => cursorLeave()}
        className="xs:w-9 xs:h-9 w-12 h-12 ml-2 rounded-lg bg-zinc-900  hover:border-zinc-700 hover:border-2  flex items-center justify-center"
      >
        <BsFillSunFill />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => setTheme("dark")}
        onMouseEnter={() => cursorEnter()}
        onMouseLeave={() => cursorLeave()}
        className="xs:w-9 xs:h-9 w-10 h-10 ml-2 flex items-center justify-center rounded-lg bg-zinc-100 hover:border-2 hover:border-zinc-300"
      >
        <BsFillMoonFill />
      </button>
    );
  }
};
