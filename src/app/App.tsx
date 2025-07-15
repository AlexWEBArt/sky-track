import { FlightMap } from "components/flightMap";
import { Providers } from "./providers";
import { AppRouter } from "./routers";

export default function App() {
  return (
    <Providers>
      <AppRouter />
      <FlightMap />
    </Providers>
  );
}
