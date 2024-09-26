import { destinations } from "@/app/data/destinations";
import DestinationView from "./DestinationView";

interface IPrams {
    destinationId?: string;
}
const DestinationData = ({params} : {params: IPrams}) => {
    
    return ( 
        <div>
            <DestinationView destinations ={destinations}/>
        </div>
     );
}
 
export default DestinationData;