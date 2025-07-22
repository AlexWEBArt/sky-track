import { Header } from "components/header";
import { FlightDetails } from "components/flightDetails";
import { FlightList } from "components/flightList";
import flightsJSON from "shared/data/flights.json";
import styles from "./homePage.module.css";
import { useEffect, useState } from "react";
import { SkeletonCardList } from "shared/ui/skeletonLoader";
import { SkeletonDetails } from "shared/ui/skeletonLoader/skeletonDetails";
import type { IFlight } from "shared/types/IFlight.interface";

export const HomePage = () => {
  const flights = flightsJSON as IFlight[];

  const [isFlightLoading, setIsFlightLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsFlightLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page_layout}>
      {isFlightLoading ? (
        <>
          <SkeletonCardList count={5} />
          <SkeletonDetails />
        </>
      ) : (
        <>
          <FlightList flights={flights} />
          <FlightDetails flights={flights} />
        </>
      )}
      <Header />
    </div>
  );
};
