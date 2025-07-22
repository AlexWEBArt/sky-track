import styles from './flightTitle.module.css'

interface Props {
	flightNumber: string
	airline: string
	handleClickCloseDetails: () => void
}

export function FlightTitle({
	flightNumber,
	airline,
	handleClickCloseDetails
}: Props) {
	return (
		<div className={styles.flight_title}>
			<div className={styles.flight_info}>
				<span className={styles.flight_number}>{flightNumber}</span>
				<span className={styles.airline}>{airline}</span>
			</div>
			<button
				className={styles.btn_close}
				onClick={handleClickCloseDetails}
			>
				&times;
			</button>
		</div>
	)
}
