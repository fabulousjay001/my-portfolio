/** @format */

import {
  useState,
  createContext,
  useMemo,
  useEffect,
  SetStateAction,
} from "react";

type ThemeContextProps = {
  value: "light" | "dark";
  handleSetValue: (value: "light" | "dark") => void;
};

export const ThemeContext = createContext<ThemeContextProps>({
  value: "dark",
  handleSetValue: (value: "light" | "dark") => undefined,
});

//Line 22-38 If the background is light/white, it should still be on page reload
export function ThemeContextProvider({ children }: any) {
  const [value, setValue] = useState<"light" | "dark">("dark");

  useEffect(() => {
    loadItemsFromStorage();
  });

  const loadItemsFromStorage = () => {
    let storageItem = window.localStorage.getItem(
      "themeSwitch"
    ) as SetStateAction<"light" | "dark">;

    if (storageItem) {
      setValue(storageItem);
      document.body.className = storageItem as "light" | "dark";
    }
  };
  const memoValue = useMemo(() => {
    const handleSetValue = (value: "light" | "dark") => {
      if (value === "light") {
        setValue("dark");
        localStorage.setItem("themeSwitch", "dark");
      } else {
        setValue("light");
        localStorage.setItem("themeSwitch", "light");
      }
    };

    return {
      value,
      handleSetValue,
    };
  }, [value]);

  return (
    <ThemeContext.Provider value={memoValue}>{children}</ThemeContext.Provider>
  );
}
