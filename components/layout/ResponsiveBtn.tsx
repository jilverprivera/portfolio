import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

interface Props {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}
const ResponsiveBtn = ({ isOpen, setIsOpen }: Props) => {
  const { cursorEnter, cursorLeave } = useContext(AppContext);

  return (
    <div
      className=" h-7 w-9 flex items-center justify-center ml-4 "
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => cursorEnter()}
      onMouseLeave={() => cursorLeave()}
    >
      <div
        className={`before:duration-300 after:duration-300 relative w-full h-1 ${
          !isOpen
            ? "before:content[]  before:absolute before:w-full before:h-0.5 before:bg-black before:dark:bg-white before:-translate-y-1 after:content[] after:absolute after:right-0 after:w-10/12 after:bg-black after:dark:bg-white after:h-0.5 after:translate-y-1"
            : "before:content[]  before:absolute before:w-full before:h-0.5 before:bg-black before:dark:bg-white before:-rotate-45 after:content[] after:absolute after:w-full after:bg-black after:dark:bg-white after:h-0.5 after:rotate-45"
        }`}
      />
    </div>
  );
};

export default ResponsiveBtn;
