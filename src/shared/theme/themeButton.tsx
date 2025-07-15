import { Theme } from "./themeProvider";
import { useTheme } from "./useTheme";
import Moon from "/icons/moon.svg";
import Sun from "/icons/sun.svg";

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const icon = theme === Theme.LIGHT ? Sun : Moon;

  return (
    <button onClick={toggleTheme}>
      <img src={icon} alt="theme icon" />
    </button>
  );
};
