import cn from "clsx";
import { Link, useLocation } from "react-router";
import { ThemeButton } from "shared/theme";
import styles from "./header.module.css";
import { PAGE_PATHS } from "shared/constants";

export function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link to={PAGE_PATHS.HOME}>
          Sky<span>T</span>rack
        </Link>
      </h1>
      <nav>
        <ul className={styles.menu_list}>
          <li
            className={cn(
              styles.menu_list_item,
              location.pathname === PAGE_PATHS.HOME && styles.active
            )}
          >
            <Link to={PAGE_PATHS.HOME}>Home</Link>
          </li>
          <li
            className={cn(
              styles.menu_list_item,
              location.pathname === PAGE_PATHS.FAVORITES && styles.active
            )}
          >
            <Link to={PAGE_PATHS.FAVORITES}>Favorites</Link>
          </li>
        </ul>
      </nav>
      <ThemeButton />
    </header>
  );
}
