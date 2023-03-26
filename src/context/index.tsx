/** @format */

import { FC, ReactNode } from "react";
import { ThemeContextProvider } from "./theme/theme-context";

interface IAppProviderProps {
  children: ReactNode;
}

export const AppContextProvider: FC<IAppProviderProps> = ({ children }) => (
  <ThemeContextProvider>{children}</ThemeContextProvider>
);
