import { observer } from 'mobx-react-lite'

import { FlightDetails } from 'components/flightDetails'
import { FlightList } from 'components/flightList'
import { Header } from 'components/header/header'

import { favoritesStore } from 'store/favoritesStore'

import styles from './favorites.module.css'

export const FavoritesPage = observer(() => {
	return (
		<div className={styles.page_layout}>
			<FlightList flights={favoritesStore.favoriteFlights} />
			<Header />
			<FlightDetails flights={favoritesStore.favoriteFlights} />
		</div>
	)
})
