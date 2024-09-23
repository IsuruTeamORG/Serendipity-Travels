import DestinationCarousel from "../Hero/DestinationCard";
import { destinations } from "../../data/destinations";

export default function Home() {
  return (
    <div className="min-h-screen  py-8">
      <DestinationCarousel destinations={destinations} />
    </div>
  );
}
