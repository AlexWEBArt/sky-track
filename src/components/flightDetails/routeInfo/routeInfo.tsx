import type {
	IArrival,
	IDeparture,
	IRoute
} from 'shared/types/IFlight.interface'
import { ProgressBar } from 'shared/ui/progressBar'

import styles from './routeInfo.module.css'

interface Props {
	departure: IDeparture
	arrival: IArrival
	route: IRoute
}

export function RouteInfo({ departure, arrival, route }: Props) {
	return (
		<div className={styles.route_info}>
			<div className={styles.route}>
				<div className={styles.from}>
					<span className={styles.airport_code}>{departure.code}</span>
					<span className={styles.airport_city}>{departure.city}</span>
					<span className={styles.time_zone}>{departure.timeZone}</span>
				</div>
				<span className={styles.plane_icon}>&#128746;</span>
				<div className={styles.to}>
					<span className={styles.airport_code}>{arrival.code}</span>
					<span className={styles.airport_city}>{arrival.city}</span>
					<span className={styles.time_zone}>{arrival.timeZone}</span>
				</div>
			</div>
			<div className={styles.route_progress}>
				<ProgressBar progress={route.statusPercent} />
			</div>
			<div className={styles.schedule}>
				<div className={styles.departure}>
					<div>
						<span>Scheduled</span>
						<span>{departure.scheduleTime}</span>
					</div>
					<div>
						<span>Actual</span>
						<span>{departure.actualTime}</span>
					</div>
				</div>
				<div className={styles.arrival}>
					<div>
						<span>Scheduled</span>
						<span>{arrival.scheduleTime}</span>
					</div>
					<div>
						<span>Estimated</span>
						<span>{arrival.estimatedTime}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
