import cn from 'clsx'
import { useSearchParams } from 'react-router'
import type { IFlight } from '../../shared/types/IFlight.interface'
import { QUARY_PARAM_FLIGHT } from '../../shared/constants/queryParameters'
import { useMemo } from 'react'
import styles from './flightDetails.module.css'
import { RouteInfo } from './routeInfo/routeInfo'
import { FlightInfo } from './flightInfo/flightInfo'
import { Actions } from './actions/actions'
import { FlightTitle } from './flightTitle/flightTitle'
import { useTheme } from '../../shared/theme'

interface Props {
    flights: IFlight[]
}

export function FlightDetails({ flights }: Props) {
    const { theme } = useTheme()
    const [searchParams, setSearchParams] = useSearchParams()
    const selectedFlight = searchParams.get(QUARY_PARAM_FLIGHT)
    const themeClassName = theme === 'dark' ? styles.dark : ''

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
                <div className={cn(styles.outer_container, themeClassName)}>
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