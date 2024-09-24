import anuradhapura from "../../../public/Destinations/Anuradhapura.png";
import sigiriya from "../../../public/Destinations/Seegiriya.png";

import ella from "../../../public/Destinations/Ella.png"; 
import Sigiriya from "../../../public/Destinations/Seegiriya.png"
import Galle from "../../../public/Destinations/Galle.png"
import Kandy from "../../../public/Destinations/Kandy.png"
import Polonnaruwa from "../../../public/Destinations/Polonnaruwa.png"
import Pinnawala from "../../../public/Destinations/Pinnawala.png"
import {StaticImageData} from "next/image";

export interface Destination {
  name: string;
  image: StaticImageData ; 
}

export interface MoreDestination {
  name: string;
  image: StaticImageData ; 
}

export const destinations: Destination[] = [
  { name: "Anuradhapura", image: anuradhapura },
  { name: "Sigiriya", image: sigiriya },
  { name: "Ella", image: ella },

  { name: "Anuradhapura", image: anuradhapura }, 
  { name: "Sigiriya", image: sigiriya },
  { name: "Ella", image: ella },

];

export const moreDestinations: MoreDestination[] = [
  { name: "seegiriya", image: Sigiriya }, 
  { name: "Galle", image: Galle },
  { name: "Kandy", image:Kandy },
  { name: "Polonnaruwa", image: Polonnaruwa },
  { name: "Pinnawala", image: Pinnawala },
  { name: "seegiriya", image: Sigiriya }, 
  { name: "Galle", image: Galle },
  { name: "Kandy", image:Kandy },
  { name: "Polonnaruwa", image: Polonnaruwa },
];