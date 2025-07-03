import { FlightDetails } from '../../components/flightDetails'
import { FlightList } from '../../components/flightList/flightList'
import flights from '../../shared/data/flights.json'
import styles from './homePage.module.css'
import { Header } from '../../components/header/header'

export const HomePage = () => {
    return (
        <div className={styles.page_layout}>
            <FlightList flights={flights} />
            <Header />
            <FlightDetails flights={flights} />
        </div>
    )
}