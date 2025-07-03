import cn from 'clsx'
import { Link } from 'react-router'
import { ThemeButton } from '../../shared/theme'
import styles from './header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <Link to="/">
                    Sky<span>T</span>rack
                </Link>
            </h1>
            <nav>
                <ul className={styles.menu_list}>
                    <li className={cn(styles.menu_list_item, styles.active)}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={styles.menu_list_item}>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li className={styles.menu_list_item}>
                        <Link to="/contacts">
                            Contacts
                        </Link>
                    </li>
                </ul>
            </nav>
            <ThemeButton />
        </header>
    )
}