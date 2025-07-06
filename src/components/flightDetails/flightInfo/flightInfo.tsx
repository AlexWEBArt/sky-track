import type { IAirplane, IRoute } from 'shared/types/IFlight.interface'
import styles from './flightInfo.module.css'

interface Props {
    airplane: IAirplane
    route: IRoute
}

export function FlightInfo({ airplane, route }: Props) {
    return (
        <div className={styles.flight_info}>
            <div className={styles.flight_info_title}>
                Flight information
            </div>
            <div className={styles.other_info}>
                <div className={styles.airplane}>
                    <span>{airplane.brand}</span>
                    <span>{airplane.model}</span>
                </div>
                <div className={styles.country}>
                    <img src={route.countryFlag} alt="" className={styles.contry_flag} />
                    <span>{route.countryName}</span>
                </div>
            </div>
            <div className={styles.airplane_parameters}>
                <div className={styles.speed}>
                    <span>Speed</span>
                    <span>{route.speed} km/h</span>
                </div>
                <div className={styles.altitude}>
                    <span>Altitude</span>
                    <span>{route.altitude} m</span>
                </div>
            </div>
        </div>
    )
}