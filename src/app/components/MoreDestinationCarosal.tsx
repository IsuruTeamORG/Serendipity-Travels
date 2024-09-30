import MoreDestinationCard from "../components/MoreDestinationCard";
import { moreDestinations } from "../data/destinations";

export default function Home() {
  return (
    <>
    <div className="mt-[5%] py-8 max-md:mt-0 max-md:py-4">
      <MoreDestinationCard moreDestinations={moreDestinations} />
    </div>
    
  </>
  );
}

