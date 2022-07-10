import { createContext, useState } from "react";

type contextProps = {
  cursor: string;
  cursorEnter: () => void;
  cursorLeave: () => void;
};
interface providerProps {
  children: JSX.Element | JSX.Element[];
}

export const AppContext = createContext({} as contextProps);

export const AppProvider = ({ children }: providerProps) => {
  const [cursor, setCursor] = useState("default");
  const cursorEnter = () => setCursor("text");
  const cursorLeave = () => setCursor("default");

  return (
    <AppContext.Provider value={{ cursor, cursorEnter, cursorLeave }}>
      {children}
    </AppContext.Provider>
  );
};
