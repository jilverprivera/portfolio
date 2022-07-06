import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface Props {
  isMounted: boolean;
  setIsMounted: (arg: boolean) => void;
}
export const Theme = ({ isMounted, setIsMounted }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  if (!isMounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  if (currentTheme === "dark") {
    return (
      <button
        onClick={() => setTheme("light")}
        className="xs:w-9 xs:h-9 w-10 h-10 ml-2 rounded-lg bg-zinc-900  hover:border-zinc-700 hover:border-2  flex items-center justify-center"
      >
        <BsFillSunFill />
      </button>
    );
  } else {
    return (
      <button
        onClick={() => setTheme("dark")}
        className="xs:w-9 xs:h-9 w-10 h-10 ml-2 flex items-center justify-center rounded-lg bg-zinc-100 hover:border-2 hover:border-zinc-300"
      >
        <BsFillMoonFill />
      </button>
    );
  }
};
