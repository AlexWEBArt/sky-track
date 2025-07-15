import { Header } from "components/header";
import { FlightDetails } from "components/flightDetails";
import { FlightList } from "components/flightList";
import flights from "shared/data/flights.json";
import styles from "./homePage.module.css";
import { useEffect, useState } from "react";
import { SkeletonLoader } from "shared/ui/skeletonLoader";

export const HomePage = () => {
  const [isFlightLoading, setIsFlightLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFlightLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page_layout}>
      {isFlightLoading ? (
        <SkeletonLoader count={5} />
      ) : (
        <FlightList flights={flights} />
      )}
      <Header />
      <FlightDetails flights={flights} />
    </div>
  );
};
