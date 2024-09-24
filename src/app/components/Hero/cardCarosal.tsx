import DestinationCarousel from "../Hero/DestinationCard";
import { destinations } from "../../data/destinations";

export default function Home() {
  return (
    <div className="">
      <DestinationCarousel destinations={destinations} />
    </div>
  );
}
