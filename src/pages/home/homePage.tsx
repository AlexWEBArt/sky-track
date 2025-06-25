import { FlightDetails } from '../../components/flightDetails'
import { FlightList } from '../../components/flightList/flightList'
import flights from '../../shared/data/flights.json'
import styles from './homePage.module.css'

export const HomePage = () => {
    return (
        <main className={styles.page_layout}>
            <FlightList flights={flights} />
            <FlightDetails  flights={flights} />
        </main>
    )
}