import { makeAutoObservable, reaction } from 'mobx'

import { LOCAL_STORAGE_FAVORITES_KEY } from 'shared/constants'
import flights from 'shared/data/flights.json'
import type { IFlight } from 'shared/types/IFlight.interface'

class FavoritesStore {
	favorites: Set<string> = new Set()

	constructor() {
		const saved = localStorage.getItem(LOCAL_STORAGE_FAVORITES_KEY)
		if (saved) {
			try {
				this.favorites = new Set(JSON.parse(saved))
			} catch {
				this.favorites = new Set()
			}
		}
		makeAutoObservable(this)

		reaction(
			() => Array.from(this.favorites),
			favArr => {
				localStorage.setItem(
					LOCAL_STORAGE_FAVORITES_KEY,
					JSON.stringify(favArr)
				)
			}
		)
	}

	addFavorite(flightId: string) {
		this.favorites.add(flightId)
	}

	removeFavorite(flightId: string) {
		this.favorites.delete(flightId)
	}

	isFavorite(flightId: string) {
		return this.favorites.has(flightId)
	}

	toggleFavorite(flightId: string) {
		if (this.isFavorite(flightId)) {
			this.removeFavorite(flightId)
		} else {
			this.addFavorite(flightId)
		}
	}

	get favoriteFlights() {
		return flights.filter(flight => this.isFavorite(flight.id)) as IFlight[]
	}
}

export const favoritesStore = new FavoritesStore()
