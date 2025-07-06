import { BrowserRouter, Route, Routes } from "react-router"
import { HomePage } from "pages/home"

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}