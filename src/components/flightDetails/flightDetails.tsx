import { useSearchParams } from 'react-router'
import type { IFlight } from 'shared/types/IFlight.interface'
import { QUARY_PARAM_FLIGHT } from 'shared/constants'
import { useMemo } from 'react'
import styles from './flightDetails.module.css'
import { RouteInfo } from './routeInfo/routeInfo'
import { FlightInfo } from './flightInfo/flightInfo'
import { Actions } from './actions/actions'
import { FlightTitle } from './flightTitle/flightTitle'

interface Props {
    flights: IFlight[]
}

export function FlightDetails({ flights }: Props) {
    const [searchParams, setSearchParams] = useSearchParams()
    const selectedFlight = searchParams.get(QUARY_PARAM_FLIGHT)

    const flight = useMemo(() => flights.find(flight => flight.flightNumber === selectedFlight), [selectedFlight])

    const handleClickCloseDetails = () => {
        const params = new URLSearchParams(searchParams)
        params.delete(QUARY_PARAM_FLIGHT)
        setSearchParams(params)
    }

    return (
        <>
            {
                flight &&
                <div className={styles.outer_container}>
                    <div className={styles.header}>
                        <FlightTitle
                            flightNumber={flight.flightNumber}
                            airline={flight.airline}
                            handleClickCloseDetails={handleClickCloseDetails}
                        />
                        <img src={flight?.airplane.airplaneImage} className={styles.airplane_image} />
                    </div>
                    <div className={styles.details_container}>
                        <RouteInfo
                            departure={flight.departure}
                            arrival={flight.arrival}
                        />
                        <FlightInfo
                            airplane={flight.airplane}
                            route={flight.route}
                        />
                        <Actions />
                    </div>
                </div>
            }
        </>
    )
}