import { makeAutoObservable, reaction } from "mobx"
import { LOCAL_STORAGE_FAVORITES_KEY } from "shared/constants"

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
            (favArr) => {
                localStorage.setItem(LOCAL_STORAGE_FAVORITES_KEY, JSON.stringify(favArr))
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
}

export const favoritesStore = new FavoritesStore()