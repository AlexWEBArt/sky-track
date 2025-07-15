import { observer } from "mobx-react-lite";
import { Header } from "components/header/header";
import { FlightDetails } from "components/flightDetails";
import { FlightList } from "components/flightList";
import styles from "./favorites.module.css";
import { favoritesStore } from "store/favoritesStore";

export const FavoritesPage = observer(() => {
  return (
    <div className={styles.page_layout}>
      <FlightList flights={favoritesStore.favoriteFlights} />
      <Header />
      <FlightDetails flights={favoritesStore.favoriteFlights} />
    </div>
  );
});
