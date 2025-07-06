import cn from 'clsx'
import { Link, useLocation } from 'react-router'
import { ThemeButton } from 'shared/theme'
import styles from './header.module.css'

export function Header() {
    const location = useLocation()

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <Link to="/">
                    Sky<span>T</span>rack
                </Link>
            </h1>
            <nav>
                <ul className={styles.menu_list}>
                    <li className={cn(styles.menu_list_item, location.pathname === '/' && styles.active)}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={cn(styles.menu_list_item, location.pathname === '/favorites' && styles.active)}>
                        <Link to="/favorites">
                            Favorites
                        </Link>
                    </li>
                </ul>
            </nav>
            <ThemeButton />
        </header>
    )
}