import { useMemo, useRef } from 'react'

import { Actions } from './actions/actions'
import { FlightInfo } from './flightInfo/flightInfo'
import { FlightTitle } from './flightTitle/flightTitle'
import { RouteInfo } from './routeInfo/routeInfo'
import { useSearchParams } from 'react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { QUERY_PARAM_FLIGHT } from 'shared/constants'
import type { IFlight } from 'shared/types/IFlight.interface'

import styles from './flightDetails.module.css'

interface Props {
	flights: IFlight[]
}

export function FlightDetails({ flights }: Props) {
	const [searchParams, setSearchParams] = useSearchParams()
	const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT)

	const nodeRef = useRef<HTMLDivElement>(null)

	const flight = useMemo(
		() => flights.find(flight => flight.flightNumber === selectedFlight),
		[selectedFlight]
	)

	const handleClickCloseDetails = () => {
		const params = new URLSearchParams(searchParams)
		params.delete(QUERY_PARAM_FLIGHT)
		setSearchParams(params)
	}

	return (
		<SwitchTransition mode='out-in'>
			<CSSTransition
				key={flight ? flight.flightNumber : 'empty'}
				nodeRef={nodeRef}
				in={!!flight}
				timeout={250}
				classNames={{
					enter: styles.fade_enter,
					enterActive: styles.fade_enter_active,
					exit: styles.fade_exit,
					exitActive: styles.fade_exit_active
				}}
				unmountOnExit
			>
				<div
					ref={nodeRef}
					className={styles.outer_container}
				>
					{flight && (
						<>
							<div className={styles.header}>
								<FlightTitle
									flightNumber={flight.flightNumber}
									airline={flight.airline}
									handleClickCloseDetails={handleClickCloseDetails}
								/>
								<img
									src={flight?.airplane.airplaneImage}
									className={styles.airplane_image}
								/>
							</div>
							<div className={styles.details_container}>
								<RouteInfo
									departure={flight.departure}
									arrival={flight.arrival}
									route={flight.route}
								/>
								<FlightInfo
									airplane={flight.airplane}
									route={flight.route}
								/>
								<Actions />
							</div>
						</>
					)}
				</div>
			</CSSTransition>
		</SwitchTransition>
	)
}
