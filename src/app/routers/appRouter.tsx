import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "pages/home";
import { FavoritesPage } from "pages/favorites";
import { FlightMap } from "components/flightMap";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <FlightMap />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
