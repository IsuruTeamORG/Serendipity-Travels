import anuradhapura from "../../../public/Destinations/Anuradhapura.png";
import sigiriya from "../../../public/Destinations/Seegiriya.png";
import ella from "../../../public/Destinations/Ella.png"; 
import {StaticImageData} from "next/image";

export interface Destination {
  name: string;
  image: StaticImageData ; 
}

export const destinations: Destination[] = [
  { name: "Anuradhapura", image: anuradhapura }, 
  { name: "Sigiriya", image: sigiriya },
  { name: "Ella", image: ella },
];
