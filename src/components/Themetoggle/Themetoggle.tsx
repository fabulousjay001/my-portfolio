/** @format */
import { DarkMode, LightMode } from "@mui/icons-material";
import { useThemeContext } from "../../context/theme";

const Themetoggle = () => {
  const { value, handleSetValue } = useThemeContext();

  return (
    <div>
      {value === "light" ? (
        <DarkMode
          onClick={() => {
            document.body.className = "dark";
            handleSetValue("light");
          }}
        />
      ) : (
        <LightMode
          onClick={() => {
            document.body.className = "light";
            handleSetValue("dark");
          }}
        />
      )}
    </div>
  );
};

export default Themetoggle;
