import MoreDestinationCard from "../components/MoreDestinationCard";
import { moreDestinations } from "../data/destinations";

export default function Home() {
  return (
    <>
    <div className="mt-[5%] py-8">
      <MoreDestinationCard moreDestinations={moreDestinations} />
    </div>
    
  </>
  );
}

