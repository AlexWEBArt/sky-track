import { FlightList } from '../../components/flightList/flightList'
import flights from '../../shared/data/flights.json'
import styles from './homePage.module.css'

export const HomePage = () => {
    return (
        <main className={styles.page_layout}>
            <FlightList flights={flights} />
        </main>
    )
}