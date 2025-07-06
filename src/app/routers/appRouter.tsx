import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "pages/home"
import { FavoritesPage } from "pages/favorites"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </BrowserRouter>
    )
}