import cn from 'clsx'
import { FlightDetails } from '../../components/flightDetails'
import { FlightList } from '../../components/flightList/flightList'
import flights from '../../shared/data/flights.json'
import styles from './homePage.module.css'
import { ThemeButton, useTheme } from '../../shared/theme'

export const HomePage = () => {
    const { theme } = useTheme()

    return (
        <main className={cn(styles.page_layout, theme)}>
            <FlightList flights={flights} />
            <FlightDetails flights={flights} />
            <ThemeButton />
        </main>
    )
}